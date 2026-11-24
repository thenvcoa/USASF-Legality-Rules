// Call sheet UI + watch guide. Needs engine.js (window.CallEngine).
(function () {
const E = window.CallEngine; if (!E) return;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ctx = { L: 3, youth: false, mini: false, junior: false, div: "allstar" };
let type = "stunt"; let obs = {};
function fields() { let f = []; for (let i = 0; i < 4; i++) { f = E.FORMS[type](obs, ctx); f.forEach(x => { if (obs[x.k] === undefined) obs[x.k] = x.d; }); } return f.filter(x => x.when === undefined || x.when); }
function resetObs() { obs = {}; fields(); }

function render() {
  const root = document.getElementById("callsheet"); if (!root) return;
  const fl = fields();
  const lv = [1, 2, 3, 4, 5, 6, 7].map(l => `<button class="chip" data-lv="${l}" aria-pressed="${ctx.L === l}">Level ${l}</button>`).join("");
  const tp = E.TYPES.map(([k, n]) => `<button class="chip" data-type="${k}" aria-pressed="${type === k}">${n}</button>`).join("");
  const form = fl.map(f => {
    const id = "cs-" + f.k;
    if (f.t === "seg") return `<div class="cs-f"><div class="cs-l" id="${id}">${esc(f.label)}</div><div class="cs-seg" role="group" aria-labelledby="${id}">${f.o.map(([v, l]) => `<button type="button" data-k="${f.k}" data-v='${JSON.stringify(v)}' aria-pressed="${obs[f.k] === v}">${esc(l)}</button>`).join("")}</div></div>`;
    if (f.t === "yn") return `<label class="cs-f cs-yn"><input type="checkbox" id="${id}" data-k="${f.k}" ${obs[f.k] ? "checked" : ""}><span>${esc(f.label)}</span></label>`;
    const val = obs[f.k], disp = f.t === "q" ? E.tw(val) : val;
    return `<div class="cs-f"><div class="cs-l" id="${id}">${esc(f.label)}</div><div class="cs-step" role="group" aria-labelledby="${id}"><button type="button" data-step="${f.k}" data-d="-1" aria-label="Decrease">−</button><output>${esc(disp)}</output><button type="button" data-step="${f.k}" data-d="1" aria-label="Increase">+</button>${f.t === "q" ? `<span class="cs-hint">tap + once per ¼ turn of the hips</span>` : ""}</div></div>`;
  }).join("");
  const res = E.CHECK[type](obs, ctx), ill = res.filter(r => r.sev === "ill"), chk = res.filter(r => r.sev === "chk");
  const verdict = ill.length ? `<div class="cs-v ill"><span>Illegal</span><small>${ill.length} rule${ill.length > 1 ? "s" : ""} broken</small></div>` : `<div class="cs-v ok"><span>Legal</span><small>based on what you entered</small></div>`;
  const items = r => `<li class="${r.sev}"><b>${esc(r.ref)}</b>${esc(r.t)}</li>`;
  const tname = E.TYPES.find(t => t[0] === type)[1];
  root.innerHTML = `
  <div class="cs-ctx">
    <div class="cs-row"><span class="cs-lab">Level</span><div class="chips">${lv}</div></div>
    <div class="cs-row"><span class="cs-lab">Team</span>
      <label class="cs-tog"><input type="checkbox" data-ctx="youth" ${ctx.youth ? "checked" : ""}> Youth or younger</label>
      <label class="cs-tog"><input type="checkbox" data-ctx="mini" ${ctx.mini ? "checked" : ""}> Mini</label>
      <label class="cs-tog"><input type="checkbox" data-ctx="junior" ${ctx.junior ? "checked" : ""}> Junior</label>
      <label class="cs-tog">Division <select data-ctx="div"><option value="allstar">All Star</option><option value="prep">Prep</option><option value="novice">Novice</option><option value="cheerab">CheerABILITIES</option></select></label></div>
    <div class="cs-row"><span class="cs-lab">Skill</span><div class="chips">${tp}</div></div>
  </div>
  <div class="cs-main">
    <form class="cs-form" onsubmit="return false"><h3>What you saw <small>${esc(tname)} · Level ${ctx.L}</small></h3>${form}
      <div class="cs-actions"><button type="button" class="btn" id="csReset">Clear this skill</button></div></form>
    <aside class="cs-res" id="csRes" aria-live="polite">${verdict}
      ${ill.length ? `<h4>Rule${ill.length > 1 ? "s" : ""} broken</h4><ul class="cs-list">${ill.map(items).join("")}</ul>` : ""}
      ${chk.length ? `<h4>Check this</h4><ul class="cs-list">${chk.map(items).join("")}</ul>` : ""}
      <h4>Before you call it, confirm</h4><ul class="cs-tips">${E.TIPS[type].map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <button type="button" class="btn pri" id="csCopy">Copy my call</button><span class="cs-copied" id="csCopied" role="status"></span>
    </aside>
  </div>
  <button type="button" class="cs-bar ${ill.length ? "ill" : "ok"}" data-jump="1">${ill.length ? `Illegal · ${ill.length} rule${ill.length > 1 ? "s" : ""}` : "Legal so far"} <span>See details ↓</span></button>`;
  root.querySelector('select[data-ctx="div"]').value = ctx.div;
  root.querySelector("#csCopy").onclick = () => {
    const txt = `Level ${ctx.L} · ${tname}: ${ill.length ? "ILLEGAL" : "LEGAL"}\n` + ill.map(r => `- ${r.ref}: ${r.t}`).join("\n");
    const done = m => { const el = document.getElementById("csCopied"); if (el) el.textContent = m; };
    try { navigator.clipboard.writeText(txt).then(() => done("Copied"), () => done("Copy not available here")); } catch (e) { done("Copy not available here"); }
  };
  root.querySelector("#csReset").onclick = () => { resetObs(); render(); };
}
document.addEventListener("click", e => {
  const root = document.getElementById("callsheet"); if (!root || !root.contains(e.target)) return;
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.jump) { const r = document.getElementById("csRes"); if (r) r.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
  if (b.dataset.lv) { ctx.L = +b.dataset.lv; fields(); render(); }
  else if (b.dataset.type) { type = b.dataset.type; resetObs(); render(); }
  else if (b.dataset.k) { obs[b.dataset.k] = JSON.parse(b.dataset.v); render(); }
  else if (b.dataset.step) { const f = E.FORMS[type](obs, ctx).find(x => x.k === b.dataset.step); const min = f.min || 0, max = f.max || 16; obs[f.k] = Math.max(min, Math.min(max, obs[f.k] + (+b.dataset.d))); render(); }
});
document.addEventListener("change", e => {
  const root = document.getElementById("callsheet"); if (!root || !root.contains(e.target)) return;
  const t = e.target;
  if (t.dataset.ctx) { ctx[t.dataset.ctx] = t.type === "checkbox" ? t.checked : t.value; render(); }
  else if (t.dataset.k) { obs[t.dataset.k] = t.checked; render(); }
});

// ---------------- Watch guide ----------------
const WATCH = [
  { t: "Before every clip", items: [
    ["Set the context", "Note the level and division (Youth and below, Mini, Junior, Prep, Novice). Several rules change with them."],
    ["Name the skill type", "Tumbling, stunt, transition, release, pyramid, dismount or toss. A release that goes too high becomes a toss or dismount, and a multi-based waist level cradle from under the feet is a toss."],
    ["Plan one replay per question", "Use the first viewing for the overall picture; replay for height, then twist count, then catchers. Don't try to see everything at once."]] },
  { t: "Counting twists on video", items: [
    ["Watch the hips, not the arms or head", "Twist is the total rotation of the hips relative to the floor. Pick a fixed reference (the camera or the front of the mat) and count each quarter turn as the hips pass it."],
    ["Know where a twist starts and stops", "A new twisting transition starts with a dip by the bases and/or a change of direction. After a clear stop, walking the stunt around doesn't add to the twist."],
    ["Two axes, two counts", "In stunts, vertical (head to toe) and horizontal (belly button front to back) rotation are counted separately, never added."],
    ["Kick fulls and doubles", "The customary quarter turn during the kick is allowed to start the twist; count the rest from there."]] },
  { t: "Judging height on video", items: [
    ["Find the lowest connection", "Use the bases' bodies as a ruler: waist, shoulders/chin (prep), arms fully overhead (extended)."],
    ["Know the look-alikes", "Chairs, T-lifts, shoulder sits, flat backs, straddle lifts and suspended rolls are prep level. Squatting bases with arms extended are still extended."],
    ["Held or passing through?", "At Levels 1–2 some heights are legal only as an immediate pass-through. Look for any stop or hold."],
    ["Release peak", "Freeze the highest point and compare the top's hips to the bases' extended arms: leg length at Levels 3–4, leg length plus 18 in. at Levels 5–7."]] },
  { t: "Tumbling", items: [
    ["Before", "Standing (no forward momentum, steps back still count) or running (step or hurdle)? Is anyone or any prop in the path?"],
    ["During", "Count flips per skill and twists per flip. Note the entry right before each flip, and any jump connected to a handspring."],
    ["After", "Landing: both feet on a Level 5 full? Anything after a tuck, aerial or full? Twisting out of a double? A step-out stays in the same pass; a new pass needs an extra step."]] },
  { t: "Stunts and transitions", items: [
    ["Before", "Count bases (single or multi, multiple tops?) and find the spotter: on the floor, able to touch the base, torso not under the stunt, only the front hand under the foot."],
    ["During", "Height and legs at every hit; any hold at extended; twist count; does the top ever lose contact with all bases (then it's a release)? Any inversion, and at what height?"],
    ["After", "Where did it land, and was it the original base? Did anything pass over or under?"]] },
  { t: "Release moves and downward inversions", items: [
    ["Release", "Start height, peak, landing height and position, skills and twists in the air, helicopter degrees, catcher count and head/shoulder catcher, spotter if it lands at prep or above from inverted."],
    ["Downward inversion", "Highest point it starts from or passes through, catchers and which two are at the waist-to-shoulders, contact with the original base, and whether it lands, stops or touches the ground inverted."]] },
  { t: "Pyramids", items: [
    ["Structures", "Map each top: height, legs, and who is braced to whom. Check the connection type (hand/arm can't be the shoulder; leg/foot is shin to toe; never hair or uniform)."],
    ["Transitions", "Is it released? If so: same bracer(s) throughout, bracers at prep or below, on separate sides if two, touch a base before letting go of the bracer, catchers/spotters still and watching from the start."]] },
  { t: "Dismounts and tosses", items: [
    ["Dismounts", "Single leg, two legs, or inverted; height; twists and tricks; cradle catchers and the waist-to-shoulder spotter; floor landings assisted unless a small hop from waist or below."],
    ["Tosses", "Count tossing bases (3–4) and the one behind; one top only; count twists and tricks; 3+ original catchers in the cradle with one at the head and shoulders."]] },
  { t: "Common traps", items: [
    ["Spotter vs. base", "In a two-leg stunt, the person under one foot is a base, never the spotter."],
    ["Level 7 spotters", "Plain extended stunts don't need one at Level 7; one-arm stunts above prep (not cupies or liberties) and inverted tops above prep do."],
    ["Level 3 standing", "No standing flips at all; standing tucks start at Level 4."],
    ["Level 4 running", "There's no 'nothing after a tuck' rule at Level 4 running (there is at Level 3 running and Level 4 standing)."],
    ["Level 5 running twists", "Any flip that twists, not just a full, must come right after running, a round off or handsprings."],
    ["Junior 6", "Rewinds are not allowed."]] }
];
function renderWatch() {
  const el = document.getElementById("watchguide"); if (!el) return;
  el.innerHTML = WATCH.map(s => `<section class="wg-sec"><h3>${esc(s.t)}</h3><dl>${s.items.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl></section>`).join("");
}
function init() { resetObs(); render(); renderWatch(); }
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
