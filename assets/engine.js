// Call-sheet rule engine. Paraphrased from USASF 2025-26 All Star Cheer Rules (pp. 12-20).
// Pure functions: FORMS[type](o, ctx) -> field list; CHECK[type](o, ctx) -> findings.
// ctx = {L, youth, mini, junior, div}. Quarters (q) are counted in 1/4 rotations.
(function (root) {
const fr = q => { const w = Math.floor(q / 4), r = q % 4; return ((w ? w : "") + ["", "¼", "½", "¾"][r]) || "0"; };
const tw = q => fr(q) + (q > 4 ? " twists" : " twist");
const Y = (k, label, extra) => Object.assign({ k, t: "yn", label, d: false }, extra || {});
const S = (k, label, o, d, extra) => Object.assign({ k, t: "seg", label, o, d }, extra || {});
const Q = (k, label, d, extra) => Object.assign({ k, t: "q", label, d: d || 0, max: 16 }, extra || {});
const N = (k, label, d, min, max, extra) => Object.assign({ k, t: "n", label, d, min, max }, extra || {});

function F(rule, sec, L) { const out = []; out.ill = (t) => out.push({ sev: "ill", ref: `${rule} · ${sec} · Level ${L}`, t }); out.chk = (t) => out.push({ sev: "chk", ref: `${rule} · ${sec} · Level ${L}`, t }); return out; }
function mk() { const list = []; return { list, ill(rule, sec, L, t) { list.push({ sev: "ill", ref: `${rule} · ${sec} · Level ${L}`, t }); }, chk(rule, sec, L, t) { list.push({ sev: "chk", ref: `${rule} · ${sec} · Level ${L}`, t }); } }; }

// ---------------- shared tumbling fields ----------------
function tumbGeneral(o, L) {
  return [
    S("dive", "Dive roll", [["none", "None"], ["dive", "Dive roll"], ["swan", "Arched / swan dive roll"]], "none"),
    Y("diveTwist", "The dive roll twists", { when: o.dive !== "none" }),
    Y("over", "Tumbles over, under (any body part) or through a stunt, person or prop"),
    Y("prop", "Holding or touching a prop while tumbling"),
    Y("rebInv", "Rebounds into a stunt transition going to or through inverted"),
    Y("rewind", "It's a cartwheel, round off or standing single back handspring rewind with no tumbling before it", { when: L === 7 && o.rebInv })
  ];
}
function tumbGeneralCheck(o, L, f) {
  const sec = "A. General";
  if (o.over) f.ill("Tumbling", sec, L, "No tumbling over, under or through a stunt, individual or prop.");
  if (o.prop) f.ill("Tumbling", sec, L, "No tumbling while holding or in contact with a prop.");
  if (o.rebInv && !(L === 7 && o.rewind)) f.ill("Tumbling", sec, L, "Rebounding into a stunt transition may not go to or through inverted" + (L === 7 ? " (exception: cartwheel, round off or standing single back handspring rewind with nothing before it)." : "."));
  if (o.dive !== "none") {
    if (L === 1) f.ill("Tumbling", sec, L, "No dive rolls at Level 1.");
    else if (o.dive === "swan" && L <= 5) f.ill("Tumbling", sec, L, "No dive rolls in an arched or swan position (allowed from Level 6).");
    if (o.diveTwist) f.ill("Tumbling", sec, L, "Dive rolls may not twist.");
  }
}

const FORMS = {}, CHECK = {}, TIPS = {};

// ---------------- STANDING TUMBLING ----------------
FORMS.stand = (o, c) => { const L = c.L; return [
  S("flips", "Flips in the pass (per skill)", [[0, "None"], [1, "1 flip"], [2, "A multi-flip skill (2+)"]], 0),
  Q("twist", "Most twist in a single flip", 0, { when: o.flips >= 1, max: 12 }),
  S("hs", "Handsprings", [[0, "None"], [1, "One"], [2, "Two or more"]], 0),
  Y("airLeave", "A skill leaves the floor (other than a blocked cartwheel)", { when: L === 1 }),
  Y("jumpHS", "A jump skill connected to a handspring", { when: L === 2 }),
  Y("stepTwist", "Twisting or turning after a back handspring step out", { when: L === 2 }),
  Y("airTwist", "Airborne twisting in a non-flipping skill (not a round off)", { when: L <= 3 }),
  S("ftype", "Type of flip", [["tuck", "Tuck (standing or from back handspring)"], ["other", "Other (layout, whip, pike…)"]], "tuck", { when: L === 4 && o.flips === 1 }),
  Y("jumpFlip", "Jump directly into the flip (jump flip)", { when: o.flips >= 1 && L === 4 }),
  Y("consec", "Two flips in a row (flip–flip)", { when: o.flips >= 1 && L === 4 }),
  Y("after", "More tumbling after the flip", { when: o.flips >= 1 && L === 4 }),
  S("setup", "Non-twisting, backward-traveling skills immediately before the twisting flip", [[0, "None"], [1, "One"], [2, "Two or more in a row"]], 2, { when: o.flips >= 1 && o.twist > 4 && L >= 6 }),
  Y("setupBHS", "One of them is a back handspring (a back extension roll doesn't count)", { d: true, when: o.flips >= 1 && o.twist > 4 && L === 6 }),
  Y("into", "Flips and twists INTO the double (e.g. a full right into the double)", { when: o.flips >= 1 && o.twist > 4 && L === 6 }),
  Y("outof", "Twists OUT of the double (a twisting skill right after it)", { when: o.flips >= 1 && o.twist > 4 && L >= 6 }),
  ...tumbGeneral(o, L)
]; };
CHECK.stand = (o, c) => { const L = c.L, f = mk(), sec = L === 7 ? "B. Standing" : "B. Standing", R = "Tumbling";
  tumbGeneralCheck(o, L, f);
  if (o.flips === 2) f.ill(R, sec, L, "Standing tumbling is limited to 1 flipping rotation per skill.");
  if (L === 1) { if (o.flips) f.ill(R, sec, L, "No flips: only skills with constant floor contact (blocked cartwheels allowed)."); if (o.hs) f.ill(R, sec, L, "No handsprings: only skills with constant contact with the floor."); if (o.airLeave) f.ill(R, sec, L, "Only skills with constant floor contact; a blocked cartwheel is the only exception."); }
  if (L === 2) { if (o.flips) f.ill(R, sec, L, "No flips at Level 2."); if (o.hs === 2) f.ill(R, sec, L, "Standing: single handspring only (series handsprings start at Level 3)."); if (o.jumpHS) f.ill(R, sec, L, "No jump skills connected to a handspring."); if (o.stepTwist) f.ill(R, sec, L, "No twisting or turning after a back handspring step out."); if (o.airTwist) f.ill(R, sec, L, "No airborne twisting except round offs."); }
  if (L === 3) { if (o.flips) f.ill(R, sec, L, "No flips in standing tumbling at Level 3 (standing tucks start at Level 4)."); if (o.airTwist) f.ill(R, sec, L, "No airborne twisting except round offs."); }
  if (L === 4 && o.flips) { if (o.twist > 0) f.ill(R, sec, L, `1 flip and 0 twisting allowed; this flip had ${tw(o.twist)}.`); if (o.jumpFlip) f.ill(R, sec, L, "No jump flip at Level 4 (allowed from Level 5)."); if (o.consec) f.ill(R, sec, L, "No consecutive flips (flip–flip)."); if (o.after) f.ill(R, sec, L, "No tumbling after a tuck."); if (o.ftype === "other") f.chk(R, sec, L, "Level 4 standing lists standing tucks and tucks from a back handspring (plus aerials and Onodis). Confirm this flip fits."); }
  if (L === 5 && o.flips && o.twist > 0) f.ill(R, sec, L, `Up to 1 flip and 0 twisting; this flip had ${tw(o.twist)}.`);
  if (L >= 6 && o.flips) {
    if (o.twist > 8) f.ill(R, sec, L, `Up to 2 twisting rotations; this flip had ${tw(o.twist)}.`);
    if (o.twist > 4) {
      if (L === 6 && (o.setup < 2 || !o.setupBHS)) f.ill(R, sec, L, "Over 1 twist must be preceded by at least 2 consecutive non-twisting, backward-traveling skills, one a back handspring (a back extension roll doesn't count).");
      if (L === 7 && o.setup < 1) f.ill(R, sec, L, "Over 1 twist must be immediately preceded by at least one backward-traveling, non-twisting skill.");
      if (L === 6 && o.into) f.ill(R, sec, L, "No flipping and twisting into a double twisting skill.");
      if (o.outof) f.ill(R, sec, L, "No twisting out of a double twisting skill.");
    }
  }
  return f.list; };
TIPS.stand = ["Did it start with no forward momentum? Steps backward still count as standing.", "Count twists by the hips against the floor, one skill at a time.", "Watch what comes right after a tuck or a double: that's where most standing calls are made."];

// ---------------- RUNNING TUMBLING ----------------
FORMS.run = (o, c) => { const L = c.L; return [
  S("flips", "Flips in the pass (per skill)", [[0, "None"], [1, "1 flip"], [2, "A multi-flip skill (2+)"]], 0),
  Q("twist", "Most twist in a single flip", 0, { when: o.flips >= 1, max: 12 }),
  S("hs", "Handsprings", [[0, "None"], [1, "One or more"]], 0, { when: L === 1 }),
  Y("airLeave", "An airborne skill other than a blocked cartwheel or round off", { when: L === 1 }),
  Y("afterRO", "Tumbling immediately after a round off or round off rebound", { when: L === 1 }),
  Y("stepTwist", "Twisting or turning after a back handspring step out", { when: L === 2 }),
  Y("airTwist", "Airborne twisting in a non-flipping skill (other than a round off" + (L === 3 ? " or aerial cartwheel)" : ")"), { when: L <= 3 }),
  S("ftype", "Type of flip", [["back", "Back tuck"], ["front", "Front tuck"], ["aerial", "Aerial cartwheel"], ["threeq", "¾ front flip"], ["other", "Other (layout, whip, pike…)"]], "back", { when: L === 3 && o.flips === 1 }),
  S("entry", "Back tuck entry", [["ro", "Round off"], ["robhs", "Round off + back handspring(s)"], ["other", "Something else"]], "robhs", { when: L === 3 && o.flips === 1 && o.ftype === "back" }),
  S("before", "Right before the front tuck", [["none", "Just running"], ["fhs", "Front handspring"], ["other", "Other tumbling"]], "none", { when: L === 3 && o.flips === 1 && o.ftype === "front" }),
  Y("after", "More tumbling after the flip / aerial", { when: (L === 3 && o.flips >= 1) || (L === 5 && o.flips >= 1 && o.twist >= 4) }),
  S("imm", "The twisting flip comes immediately after", [["run", "Running"], ["ro", "Round off"], ["bhs", "Back handspring(s)"], ["fhs", "Front handspring(s)"], ["other", "Something else"]], "bhs", { when: L === 5 && o.flips >= 1 && o.twist > 0 }),
  Y("trick", "A trick added during the full (kick, arm, etc.)", { when: L === 5 && o.flips >= 1 && o.twist >= 4 }),
  Y("feet", "Lands on both feet", { d: true, when: L === 5 && o.flips >= 1 && o.twist >= 4 }),
  Y("into", "Flips and twists INTO the double", { when: L === 6 && o.flips >= 1 && o.twist > 4 }),
  Y("outof", "Twists OUT of the double", { when: L >= 6 && o.flips >= 1 && o.twist > 4 }),
  ...tumbGeneral(o, L)
]; };
CHECK.run = (o, c) => { const L = c.L, f = mk(), sec = "C. Running", R = "Tumbling";
  tumbGeneralCheck(o, L, f);
  if (o.flips === 2) f.ill(R, sec, L, "Running tumbling is limited to 1 flipping rotation per skill.");
  if (L === 1) { if (o.flips) f.ill(R, sec, L, "No flips: constant-contact skills, blocked cartwheels and round offs only."); if (o.hs) f.ill(R, sec, L, "No handsprings at Level 1."); if (o.airLeave) f.ill(R, sec, L, "Only blocked cartwheels and round offs may leave the floor."); if (o.afterRO) f.ill(R, sec, L, "No tumbling immediately after a round off or round off rebound."); }
  if (L === 2) { if (o.flips) f.ill(R, sec, L, "No flips at Level 2."); if (o.stepTwist) f.ill(R, sec, L, "No twisting or turning after a back handspring step out."); if (o.airTwist) f.ill(R, sec, L, "No airborne twisting except round offs."); }
  if (L === 3) {
    if (o.airTwist) f.ill(R, sec, L, "No airborne twisting except round offs and aerial cartwheels.");
    if (o.flips) {
      if (o.twist > 0) f.ill(R, sec, L, `Flips may not twist at Level 3; this one had ${tw(o.twist)}.`);
      if (o.ftype === "other") f.ill(R, sec, L, "Only back tucks (from a round off or round off back handspring), aerial cartwheels, front tucks and ¾ front flips are listed.");
      if (o.ftype === "back" && o.entry === "other") f.ill(R, sec, L, "A back tuck must come from a round off or round off back handspring(s).");
      if (o.ftype === "front" && o.before === "other") f.ill(R, sec, L, "No tumbling before a front tuck except a front handspring.");
      if (o.after) f.ill(R, sec, L, "No tumbling after a tuck or aerial cartwheel.");
    }
  }
  if (L === 4 && o.flips && o.twist > 0) f.ill(R, sec, L, `1 flip and 0 twisting; this flip had ${tw(o.twist)}.`);
  if (L === 5 && o.flips) {
    if (o.twist > 4) f.ill(R, sec, L, `Up to 1 twist; this flip had ${tw(o.twist)}.`);
    if (o.twist > 0 && o.imm === "other") f.ill(R, sec, L, "A flip that twists must be immediately preceded by running, a round off, or back/front handspring(s).");
    if (o.twist >= 4) { if (o.trick) f.ill(R, sec, L, "No trick during full-twisting skills."); if (!o.feet) f.ill(R, sec, L, "Full-twisting skills must land on both feet."); if (o.after) f.ill(R, sec, L, "No tumbling after a full-twisting skill."); }
  }
  if (L >= 6 && o.flips) { if (o.twist > 8) f.ill(R, sec, L, `Up to 2 twisting rotations; this flip had ${tw(o.twist)}.`); if (L === 6 && o.into) f.ill(R, sec, L, "No flipping and twisting into a double twisting skill."); if (o.outof) f.ill(R, sec, L, "No twisting out of a double twisting skill."); }
  return f.list; };
TIPS.run = ["Note the entry: what is right before each flip?", "Count twists by the hips; stop counting when the feet land.", "Watch the landing: both feet? Anything after?"];

// ---------------- STUNT (held / non-released transition) ----------------
function stuntTwistCap(L, land) { // in quarters
  if (L === 1) return 1; if (L === 2) return 2;
  if (L === 3) return land === "ext1" ? 2 : 4; if (L === 4) return land === "ext1" ? 4 : 6; if (L === 5) return land === "ext1" ? 6 : 8; return 9;
}
FORMS.stunt = (o, c) => { const L = c.L; return [
  S("bases", "Bases", [["single", "Single based"], ["multi", "Multi-based"]], "multi"),
  S("tops", "Top persons on that one base", [[1, "One"], [2, "Two or more"]], 1, { when: o.bases === "single" }),
  S("kind", "Stunt type", [["std", "Standard"], ["ss", "Shoulder sit"], ["tlift", "T-lift"], ["floor", "Floor stunt"], ["waist", "Held only at the waist"]], "std"),
  S("height", "Highest level", [["waist", "Waist"], ["prep", "Prep"], ["ext", "Extended"]], "prep"),
  S("held", "At extended it was…", [["held", "Held / stopped"], ["pass", "Only passed through"]], "held", { when: o.height === "ext" }),
  S("legs", "Legs", [["two", "Two-leg"], ["one", "Single leg"]], "two"),
  Y("extra", "An additional base had a hand/arm connection to the top before the single leg started", { when: L === 1 && o.legs === "one" && o.height !== "waist" }),
  Y("oneArm", "One-arm stunt above prep (not a cupie or liberty)", { when: L === 7 && o.height === "ext" }),
  S("spotter", "Spotter", [["yes", "Present"], ["no", "None"]], "yes"),
  Y("spotEach", "A separate spotter for each top", { d: true, when: o.bases === "single" && o.tops === 2 && L >= 3 }),
  Q("twist", "Twist in the transition", 0),
  S("land", "Twisted into", [["prep", "Prep or below"], ["ext2", "Extended two-leg"], ["ext1", "Extended single leg"]], "prep", { when: o.twist > 0 }),
  S("texc", "Twisting exception", L === 1 ? [["none", "None"], ["rebound", "Rebound ½ to prone"], ["wrap", "Wrap around"], ["floorhalf", "½ twist, starts and ends on floor, waist-only support"]] : [["none", "None"], ["logroll", "Full-twisting log roll, cradle to cradle, nothing added"]], "none", { when: L <= 2 && o.twist > 0 }),
  S("inv", "Inverted top?", [["no", "No"], ["ground", "At ground level, straight to non-inverted"], ["groundo", "At ground level, other"], ["prep", "At prep or below"], ["ext", "Above prep / extended"]], "no"),
  Y("susp", "Suspended roll with more than ½ twist that doesn't land in a cradle", { when: L === 3 }),
  Y("backbend", "A base or athlete in a backbend or inverted touches the top"),
  S("ou", "Over / under", [["none", "None"], ["al", "Arms and legs only"], ["ind", "A person under the stunt / stunt over a person"], ["other", "More (stunt over/under another stunt, torso, etc.)"]], "none"),
  Y("leap", "Leap frog or leap frog variation", { when: L === 1 }),
  Y("lose", "The top loses contact with every base during a transition")
]; };
CHECK.stunt = (o, c) => { const L = c.L, f = mk(), R = "Stunts";
  const s7 = (a, b) => L === 7 ? b : a;
  if (o.bases === "single" && o.tops === 2) { if (L <= 2) f.ill(R, "B. Stunt Height", L, "No single based stunts with multiple top persons at Levels 1–2."); else if (!o.spotEach) f.ill(R, s7("A. Spotter", "A. Spotters"), L, "Single based stunts with multiple tops need a separate spotter for each top."); }
  if (c.youth && o.bases === "single" && o.height === "ext" && o.held === "held") f.ill(R, "B. Stunt Height", L, "Youth and below: no single based (or assisted single based) extended stunts; they may only pass through extended if the level allows.");
  if (L === 1) {
    if (o.legs === "one" && o.height === "prep" && !o.extra) f.ill(R, "B. Stunt Height", L, "A prep level single leg needs an additional base holding a hand/arm connection to the top before it starts.");
    if (o.legs === "one" && o.height === "ext") f.ill(R, "B. Stunt Height", L, "Single legs may not go above prep level at Level 1.");
    if (o.legs === "two" && o.height === "ext" && o.held === "held") f.ill(R, "B. Stunt Height", L, "Two-leg stunts may only immediately pass through extended (prep level is the limit).");
  }
  if (L === 2 && o.legs === "one" && o.height === "ext" && o.held === "held") f.ill(R, "B. Stunt Height", L, "Single legs are limited to prep level; they may only immediately pass through extended.");
  let need = false;
  if (L === 1) need = (o.height !== "waist" && !["ss", "tlift", "waist"].includes(o.kind)) || o.kind === "floor";
  else if (L === 2) need = o.height === "ext" || o.kind === "floor";
  else if (L <= 6) need = o.height === "ext";
  else need = !!o.oneArm || o.inv === "ext";
  if (need && o.spotter === "no") f.ill(R, s7("A. Spotter", "A. Spotters"), L, L === 1 ? "Level 1 needs a spotter at prep level and above, and for floor stunts (shoulder sits, T-lifts and waist-only stunts excepted)." : L === 2 ? "A spotter is required above prep level and for floor stunts." : L <= 6 ? "A spotter is required above prep level." : "Level 7 needs a spotter for one-arm stunts above prep (not cupies or liberties) and for inverted tops above prep.");
  if (o.twist > 0) {
    let cap = stuntTwistCap(L, o.land), note = "";
    if (L === 1 && o.texc === "rebound") cap = 2; if (L === 1 && o.texc === "wrap") cap = 16; if (L === 1 && o.texc === "floorhalf") cap = 2; if (L === 2 && o.texc === "logroll") cap = 4;
    if (o.twist > cap) f.ill(R, s7("D. Twisting", "C. Twisting"), L, `Twisting into ${o.land === "ext1" ? "an extended single leg" : o.land === "ext2" ? "an extended two-leg stunt" : "prep or below"} is limited to ${tw(cap)}; this transition had ${tw(o.twist)}.`);
  }
  if (o.inv !== "no") {
    const sec = s7("F. Inversions", "F. Inversions");
    if (L === 1) f.ill(R, sec, L, "Inversions are not allowed (an inverted athlete must keep contact with the floor).");
    else if (L === 2 && o.inv !== "ground") f.ill(R, sec, L, "Only ground level inversions that go directly to non-inverted.");
    else if (L === 3 && o.inv === "ext") f.ill(R, sec, L, "Inversions are limited to prep level or below.");
  }
  if (L === 3 && o.susp) f.ill(R, "F. Inversions", L, "Suspended rolls over ½ twist must land in a cradle.");
  if (o.backbend) f.ill(R, "F. Inversions", L, "A base or athlete in a backbend or inverted may not touch a top person.");
  if (L <= 3 && (o.ou === "ind" || o.ou === "other")) f.ill(R, "H. Over/Under", L, "Only arms and legs may pass over or under at Levels 1–3.");
  if (L === 4 && o.ou === "other") f.ill(R, "H. Over/Under", L, "Level 4 allows only a person under a stunt or a stunt over a person.");
  if (L === 1 && o.leap) f.ill(R, "C. Transition", L, "No leap frogs or leap frog variations.");
  if (o.lose) { if (L <= 2) f.ill(R, "C. Transition", L, "The top must stay in contact with at least one base."); else f.chk(R, "C. Transition", L, "The top lost contact with every base: judge it as a release move (switch to Release move)."); }
  return f.list; };
TIPS.stunt = ["Count bases and find the spotter before it goes up.", "Height: where is the lowest connection? Held or just passing through?", "Count supported feet for one-leg vs two-leg (V-sit, pike, flat back = two-leg)."];

// ---------------- RELEASE MOVE ----------------
FORMS.release = (o, c) => { const L = c.L; return [
  S("bases", "Bases", [["single", "Single based"], ["multi", "Multi-based"]], "multi"),
  S("start", "Starts from", [["ground", "Ground"], ["waist", "Waist"], ["prep", "Prep"], ["ext", "Extended"]], "waist"),
  S("land", "Lands at", [["waist", "Waist or below"], ["prep", "Prep"], ["ext", "Extended"]], "prep"),
  S("legsL", "Lands on", [["two", "Two legs"], ["one", "Single leg"]], "two", { when: o.land === "ext" }),
  S("landpos", "Landing position", [["upright", "Upright"], ["horiz", "Horizontal (cradle, flat back, prone)"], ["inv", "Inverted"]], "upright"),
  S("peak", "Peak (top's hips vs bases' extended arms)", [["arm", "At or below extended arms"], ["p18", "Up to 18 in. above"], ["over", "More than 18 in. above"]], "arm"),
  N("skills", "Skills / tricks in the release", 0, 0, 5),
  Q("twist", "Twist", 0),
  Y("logroll", "It's a log roll", { when: L <= 3 }),
  S("heli", "Helicopter", [["no", "No"], ["le", "Up to 180°"], ["gt", "More than 180°"]], "no", { when: L >= 3 }),
  Y("heliHead", "A catcher at the head and shoulders", { d: true, when: o.heli && o.heli !== "no" }),
  Y("startInv", "Starts inverted and lands non-inverted"),
  S("passInv", "Passes through inverted", [["no", "No"], ["rewind", "Yes: rewind (backward free flip from ground)"], ["flip", "Yes: other free flip"]], "no"),
  S("flips", "Flipping rotation", [[4, "1 or less"], [5, "1¼"], [6, "More than 1¼"]], 4, { when: o.passInv !== "no" }),
  Y("pitch", "Started with a toe pitch, leg pitch or similar toss", { when: o.passInv !== "no" }),
  Y("tumbBefore", "Tumbling right before it", { when: o.passInv !== "no" }),
  S("fromStunt", "The free flip starts from", [["ground", "Ground"], ["stunt", "A stunt"]], "ground", { when: L === 7 && o.passInv !== "no" }),
  Y("fromPrep", "Started from prep level", { d: true, when: L === 7 && o.passInv !== "no" && o.fromStunt === "stunt" }),
  N("catchers", "Catchers", 3, 0, 6),
  N("spotters", "Spotters", 0, 0, 4),
  Y("orig", "Returns to the original base(s)", { d: true }),
  S("newbase", "New-base exception", [["none", "None"], ["coed", "Coed-style toss by one base, caught by a base free of other choreography"], ["multi", "Single based multi-top toss"]], "none", { when: L === 7 && !o.orig }),
  S("l7exc", "Inverted landing exception", [["none", "None"], ["hs", "Ground handstand → hand-to-hand, 0 twist/flip"], ["prep", "Prep or below → prep inverted, 0 twist/flip"]], "none", { when: L === 7 && o.landpos === "inv" }),
  Y("travel", "Bases intentionally travel"),
  Y("touch", "Touches a top in a separate release move")
]; };
CHECK.release = (o, c) => { const L = c.L, f = mk(), R = "Stunts";
  const E = L === 7 ? "D. Release Moves" : "E. Release Moves", RW = L === 7 ? "E. Rewinds/Free Flipping" : "E. Release Moves";
  if (L === 1) { f.ill(R, E, L, "Release moves are not allowed other than dismounts."); return f.list; }
  if (L === 2) { if (!(o.logroll && o.twist <= 4 && o.landpos === "horiz" && o.skills === 0)) f.ill(R, E, L, "Only dismounts, tosses, and a single full-twisting log roll (cradle to cradle, nothing added)."); return f.list; }
  if (L <= 6) {
    if (o.bases === "multi" && o.catchers < 3) f.ill(R, E, L, "Multi-based release moves need 3 catchers.");
    if (o.bases === "single" && o.landpos === "horiz" && o.catchers < 2) f.ill(R, E, L, "Single based releases landing horizontal need 2 catchers.");
    if (o.touch) f.ill(R, E, L, "Top persons in separate release moves may not touch.");
  }
  if (o.landpos === "inv" && !(L === 7 && o.l7exc !== "none")) f.ill(R, E, L, "Release moves may not land inverted" + (L === 7 ? " (two Level 7 exceptions: ground handstand to hand-to-hand, or prep-or-below to prep inverted, both 0 twist and 0 flip)." : "."));
  if (o.travel) f.ill(R, E, L, "Release moves may not intentionally travel.");
  if (!o.orig && !(L === 7 && o.newbase !== "none")) f.ill(R, E, L, "Must return to the original base(s).");
  const capArm = L <= 4;
  if ((capArm && o.peak !== "arm") || o.peak === "over") f.ill(R, E, L, `May not exceed ${capArm ? "the bases' extended arm level" : "18 in./46 cm above extended arm level"}. Past that it is judged as a toss or dismount.`);
  if (o.heli && o.heli !== "no") {
    if (L === 3) f.ill(R, E, L, "No helicopters at Level 3.");
    else { if (o.heli === "gt") f.ill(R, E, L, "Helicopters are limited to 180°.");
      const need = L === 7 ? 2 : 3; if (o.catchers < need || !o.heliHead) f.ill(R, E, L, `Helicopters need ${L === 7 ? "at least 2" : "3"} catchers with one at the head and shoulders.`);
      if (L === 4 && o.twist > 0) f.ill(R, E, L, "Level 4 helicopters may not twist."); }
  }
  if (o.passInv !== "no") {
    if (L <= 5) f.ill(R, E, L, "Release moves may not pass through inverted (no free flips).");
    else if (L === 6) {
      if (o.passInv === "flip") f.ill(R, E, L, "No free flips; the only Level 6 exception is a rewind.");
      else { if (c.junior) f.ill(R, E, L, "Rewinds are not allowed in Junior 6.");
        if (o.flips > 4) f.ill(R, E, L, "Rewinds: 1 flipping rotation only."); if (o.twist > 0) f.ill(R, E, L, "Rewinds: 0 twisting.");
        if (o.pitch) f.ill(R, E, L, "Toe pitch, leg pitch or similar tosses may not start a rewind."); if (o.tumbBefore) f.ill(R, E, L, "No tumbling before a rewind.");
        const okC = o.bases === "single" ? (o.catchers >= 1 && o.spotters >= 1) : (o.catchers >= 2 && o.spotters >= 1);
        if (!okC) f.ill(R, E, L, o.bases === "single" ? "Single based rewinds need at least 1 catcher and 1 spotter." : "Multi-based rewinds need at least 2 catchers and 1 spotter."); }
    } else {
      if (o.fromStunt === "ground") { if (o.flips > 5) f.ill(R, RW, L, "From ground level: up to 1¼ flipping rotations."); if (o.twist > 5) f.ill(R, RW, L, "From ground level: up to 1¼ twisting rotations."); if (o.tumbBefore) f.chk(R, RW, L, "Tumbling rewinds (cartwheel, round off, standing single back handspring) may have no tumbling before them."); }
      else { if (o.flips > 5) f.ill(R, RW, L, "From a stunt: up to 1¼ flipping rotations."); if (o.twist > 2) f.ill(R, RW, L, "From a stunt: up to ½ twist."); if (!o.fromPrep) f.ill(R, RW, L, "Free flips from a stunt must start from prep level only."); if (o.landpos === "upright" && o.land !== "waist") f.chk(R, RW, L, "From a stunt it must land in a cradle, horizontal, or standing on the floor (floor landings follow dismount rules)."); }
      const need = o.flips > 4 ? 3 : 2; if (o.catchers < need) f.ill(R, RW, L, `${o.flips > 4 ? "More than 1 flip needs 3" : "1 flip or less needs 2"} catchers.`);
      if (o.spotters < 1) f.ill(R, "A. Spotters", L, "A free flip requires a spotter.");
    }
  }
  if (L === 3) {
    if (o.start === "prep" || o.start === "ext") f.ill(R, E, L, "Must start at waist level or below.");
    if (o.land === "ext") f.ill(R, E, L, "Must land at prep level or below.");
    if (o.skills > 1) f.ill(R, E, L, "1 skill or trick allowed.");
    if (o.twist > 0 && !(o.logroll && o.twist <= 4 && o.landpos === "horiz")) f.ill(R, E, L, "0 twisting (exception: log rolls up to 1 twist landing in a cradle, flat back or prone).");
    if (o.startInv) f.ill(R, E, L, "Level 3 release moves may not involve inversions.");
  }
  if (L === 4) {
    if (o.land === "ext" && o.start === "ext") f.ill(R, E, L, "A release that lands at extended must start at prep level or below.");
    if (o.skills > 2) f.ill(R, E, L, "2 skills allowed.");
    if (o.twist > 0 && (o.land === "ext" || o.start === "ext")) f.ill(R, E, L, "No twisting to or from an extended stunt.");
    else if (o.twist > stuntTwistCap(4, "prep")) f.ill(R, "D. Twisting", L, `Twisting is limited to ${tw(6)}.`);
  }
  if (L === 5 && o.twist > 0) { const cap = stuntTwistCap(5, o.land === "ext" ? (o.legsL === "one" ? "ext1" : "ext2") : "prep"); if (o.twist > cap) f.ill(R, "D. Twisting", L, `Twisting into this landing is limited to ${tw(cap)}.`); }
  if (L >= 6 && o.twist > 9 && o.passInv === "no") f.ill(R, L === 7 ? "C. Twisting" : "D. Twisting", L, `Twisting is limited to ${tw(9)}.`);
  if (o.startInv && L >= 4 && L <= 6) {
    const cap = L === 6 ? 2 : 0; if (o.twist > cap) f.ill(R, E, L, `Inverted to non-inverted: ${cap ? "up to ½ twist" : "0 twisting"}.`);
    if ((o.land === "prep" || o.land === "ext") && o.spotters < 1) f.ill(R, E, L, "Inverted to non-inverted needs a spotter if it lands at prep level or above.");
  }
  if (o.startInv && L === 7 && (o.land === "prep" || o.land === "ext") && o.spotters < 1) f.ill(R, "A. Spotters", L, "A release to/from inverted landing at prep or above needs a spotter.");
  return f.list; };
TIPS.release = ["Freeze the peak: compare the top's hips to the bases' extended arms.", "Where did it start, where did it land, and was it the same set of bases?", "Count catchers and check one is at the head and shoulders for helicopters."];

// ---------------- DOWNWARD INVERSION ----------------
FORMS.down = (o, c) => { const L = c.L; return [
  S("start", "Starts from", [["waist", "Waist or below"], ["prep", "Prep"], ["above", "Above prep / extended"]], "waist"),
  Y("pass", "Passes above its starting level for a moment"),
  N("catchers", "Catchers", 3, 0, 6),
  N("torso", "Catchers touching between the top's waist and shoulders", 2, 0, 6),
  Y("ground", "Lands, stops or touches the ground while inverted"),
  S("exc", "Matches an exception?", [["none", "None"], ["lower", "Controlled lowering of an extended inverted stunt to prep"], ["pass2", "Passing above prep down to prep"], ["ext2inv", "Extended non-inverted → inverted at prep"]], "none", { when: L >= 4 }),
  S("contact", "Contact with the original base", [["kept", "Kept"], ["cart", "Let go only as needed (cartwheel-style)"], ["lost", "Lost"]], "kept"),
  Y("touch", "Touches another downward inversion", { when: L <= 6 }),
  Y("pancake", "Two-leg pancake", { when: L === 3 })
]; };
CHECK.down = (o, c) => { const L = c.L, f = mk(), R = "Stunts", G = L === 7 ? "F. Inversions" : "G. Downward Inversions";
  if (L <= 2) { f.ill(R, G, L, "Downward inversions are not allowed at Levels 1–2."); return f.list; }
  if (o.contact === "lost") f.ill(R, G, L, "Must keep contact with the original base" + (L === 7 ? " (a base)." : " (it may let go only when necessary, as in a cartwheel-style transition)."));
  if (o.touch && L <= 6) f.ill(R, G, L, "Downward inversions may not touch each other.");
  if (L === 3) {
    if (o.start !== "waist") f.ill(R, G, L, "Must be at waist level or below (it may only immediately pass through prep).");
    if (o.pass && o.start === "waist") f.chk(R, G, L, "Passing through prep must be immediate; it can't stop there.");
    if (o.catchers < 2 || o.torso < 2) f.ill(R, G, L, "Needs 2 catchers in contact between the waist and shoulders of the top's torso.");
    if (o.pancake) f.ill(R, G, L, "No two-leg pancake style stunts.");
  }
  if (L === 4) {
    if (o.start === "above" && o.exc !== "lower") f.ill(R, G, L, "Prep level (it may pass above prep); starting above prep is only allowed as a controlled lowering of an extended inverted stunt to prep.");
    if (o.catchers < 3 || o.torso < 2) f.ill(R, G, L, "Needs 3 catchers, 2 in contact between the top's waist and shoulders.");
    if ((o.pass || o.start === "above") && o.ground && o.exc !== "lower") f.ill(R, G, L, "If it passes above prep, it may not land, stop or touch the ground inverted.");
  }
  if (L === 5 || L === 6) {
    if (o.catchers < 3 || o.torso < 2) f.ill(R, G, L, "Needs 3 catchers, 2 in contact between the top's waist and shoulders.");
    if ((o.pass || o.start === "above") && o.ground && o.exc === "none") f.ill(R, G, L, "From or passing above prep, it may not land, stop or touch the ground inverted (unless one of the three exceptions).");
  }
  if (L === 7 && (o.start === "above" || o.pass) && o.catchers < 2) f.ill(R, G, L, "Downward inversions from above prep need at least 2 catchers.");
  return f.list; };
TIPS.down = ["Where does the inverted top start, and does it rise above that first?", "Count catchers and find the two at the waist-to-shoulder area.", "Does anything inverted touch the ground, stop, or land there?"];

// ---------------- PYRAMID STRUCTURE ----------------
FORMS.pstruct = (o, c) => { const L = c.L; return [
  S("a", "The stunt", [["p2", "Prep two-leg or lower"], ["p1", "Prep single leg"], ["e2", "Extended two-leg"], ["e1", "Extended single leg"]], "e2"),
  S("b", "Connected to", [["low", "A bracer at prep or below"], ["e2", "An extended two-leg"], ["e1", "An extended single leg"]], "low"),
  S("conn", "Connection", [["ha", "Hand/arm"], ["lf", "Leg/foot (shin to toe)"], ["sh", "Shoulder"], ["hu", "Hair or uniform"]], "ha"),
  S("feet", "Prep-level bracer's feet", [["both", "Both feet in the bases' hands"], ["exempt", "Shoulder sit / flat back / straddle lift / shoulder stand"], ["other", "Other"]], "both", { when: L <= 2 && o.b === "low" }),
  Y("single", "The extended stunt is single based (or assisted single based)"),
  Y("init", "Connected by the start of the skill and stayed connected", { d: true })
]; };
CHECK.pstruct = (o, c) => { const L = c.L, f = mk(), R = "Pyramids", B = "B. Structures";
  if (L === 7) { f.chk(R, "A. General", L, "Level 7 pyramids may go up to 2½ high (towers allowed); check the Level 7 spotter rules."); if (o.conn === "hu") f.ill(R, B, L, "Hair and uniform are never legal bracing points."); return f.list; }
  if (o.conn === "hu") f.ill(R, B, L, "Hair and uniform are never legal bracing points.");
  if (!o.init) f.ill(R, B, L, "Required bracers/connections must be connected by the start of the skill and stay connected.");
  if (c.youth && o.single && (o.a === "e1" || o.a === "e2")) f.ill(R, B, L, "Youth and below: no single based or assisted single based extended stunts.");
  const ext = x => x === "e1" || x === "e2";
  if (L === 1) {
    if (o.a === "e1" || o.b === "e1") f.ill(R, B, L, "Extended single legs are not allowed at Level 1.");
    if ((o.a === "p1" || o.a === "e2") && (o.b !== "low" || o.conn !== "ha")) f.ill(R, B, L, `${o.a === "p1" ? "A prep single leg" : "An extended two-leg"} must be connected to a bracer at prep or below with a hand/arm connection (the shoulder doesn't count).`);
  }
  if (L === 2 && o.a === "e1" && (o.b !== "low" || o.conn !== "ha")) f.ill(R, B, L, "An extended single leg must be connected to a bracer at prep or below with a hand/arm connection (the shoulder doesn't count).");
  if (L <= 2 && ext(o.a) && ext(o.b)) f.ill(R, B, L, "No extended stunt connected to an extended stunt.");
  if (L === 3 && ((o.a === "e1" && ext(o.b)) || (o.b === "e1" && ext(o.a)))) f.ill(R, B, L, "No extended single leg connected to an extended stunt.");
  if (L === 4 && o.a === "e1" && o.b === "e1") f.ill(R, B, L, "No extended single leg connected to an extended single leg.");
  if (L <= 2 && o.b === "low" && o.feet === "other") f.ill(R, B, L, "Prep level bracers need both feet in the bases' hands unless in a shoulder sit, flat back, straddle lift or shoulder stand.");
  return f.list; };
TIPS.pstruct = ["Identify each top's height and legs before judging connections.", "Look at what touches what: hand/arm, foot/leg, or shoulder.", "At Levels 1–2 ask: is this height only legal because it's braced?"];

// ---------------- PYRAMID TRANSITION ----------------
FORMS.ptrans = (o, c) => { const L = c.L; const rel = o.kind && o.kind !== "nr"; return [
  S("kind", "Transition type", [["nr", "Non-released"], ["rni", "Released, non-inverted"], ["rtw", "Released, twisting"], ["bf", "Braced inversion / flip"]], "nr"),
  Q("twist", "Twist", 0),
  S("land", "Twists into", [["prep", "Prep or below"], ["ext2", "Extended two-leg"], ["ext1", "Extended single leg"]], "prep", { when: o.kind === "nr" && o.twist > 0 }),
  S("flips", "Flipping rotation", [[3, "¾"], [4, "1"], [5, "1¼"], [6, "More than 1¼"]], 5, { when: o.kind === "bf" }),
  N("bracers", "Bracers", 1, 0, 3),
  S("bh", "Bracer height", [["low", "Prep or below"], ["above", "Above prep"]], "low", { when: o.bracers > 0 }),
  S("c1", "Bracer 1 connection", [["hh", "Hand/arm to hand/arm"], ["hf", "Hand/arm to foot/lower leg"], ["oth", "Other"]], "hh", { when: o.bracers > 0 }),
  S("c2", "Bracer 2 connection", [["hh", "Hand/arm to hand/arm"], ["hf", "Hand/arm to foot/lower leg"], ["oth", "Other"]], "hh", { when: o.bracers > 1 }),
  Y("sides", "The two bracers are on separate sides of the body", { d: true, when: rel && o.bracers > 1 }),
  Y("same", "Same bracer(s) the whole time", { d: true, when: rel }),
  Y("touchBase", "Touched a base on the floor before letting go of the bracer", { d: true, when: rel }),
  N("catchers", "Catchers", 2, 0, 6, { when: rel }),
  N("spotters", "Spotters", 0, 0, 4, { when: rel }),
  Y("upright", "Lands upright at prep level or above", { when: o.kind === "bf" }),
  Y("change", "Changes bases", { when: rel }),
  Y("downInv", "Travels downward while inverted", { when: o.kind === "bf" }),
  Y("invPass", "Passes through inverted", { when: o.kind === "nr" }),
  Y("invOK", "Stays in contact with a base AND a prep-or-below bracer throughout, starting and ending at prep or below", { when: o.kind === "nr" && o.invPass && L === 3 }),
  Y("bInv", "A required bracer goes inverted"),
  Y("assistLog", "Log roll assisted by another top", { when: L === 2 }),
  Y("touchRel", "Touches another release move", { when: rel }),
  Y("legalStunt", "It is also a legal stunt release move (1 bracer is enough)", { when: o.kind === "rni" && (L === 3 || L === 4) }),
  Y("toExt", "Releases to extended", { when: o.kind === "rni" && L === 3 }),
  Y("fromWaist", "Started at waist or below with a hand/arm connection", { when: o.kind === "rni" && L === 3 && o.toExt })
]; };
CHECK.ptrans = (o, c) => { const L = c.L, f = mk(), R = "Pyramids", C = "C. Non-Released Transitions", D = "D. Released Transitions";
  if (o.bInv) f.ill(R, "Glossary: Brace/Bracer", L, "A required bracer may not pass through inverted during a transition.");
  if (L === 2 && o.assistLog) f.ill(R, o.kind === "nr" ? C : D, L, "Log rolls may not be assisted by another top person.");
  if (L === 7) {
    if (o.kind === "bf") { if (o.flips > 5) f.ill(R, "F. Released Braced Inversions/Flips", L, "Up to 1¼ flipping rotations."); if (o.twist > 4) f.ill(R, "F. Released Braced Inversions/Flips", L, "Up to 1 twisting rotation."); if (o.bracers < 1 || o.bh !== "low") f.ill(R, "F. Released Braced Inversions/Flips", L, "Requires 1 bracer at prep level or below.");
      const ok = o.upright ? (o.catchers >= 1 && o.spotters >= 1) || o.catchers >= 2 : o.catchers >= 2; if (!ok) f.ill(R, "F. Released Braced Inversions/Flips", L, "2 catchers (landing upright at prep or above: 1 base + 1 additional spotter)."); }
    else f.chk(R, "C–E", L, "Level 7 transitions follow its free-flying mount, release move and inversion rules (see the Level 7 summary).");
    return f.list;
  }
  if (o.kind === "nr") {
    const caps = { 1: 1, 2: 2, 3: 4, 4: 6, 5: 8, 6: 9 }, th = { 3: 2, 4: 4, 5: 6 };
    if (o.twist > caps[L]) f.ill(R, C, L, `Twisting is limited to ${tw(caps[L])}.`);
    if (o.twist > 0 && o.land === "ext1") {
      if (L === 1) f.ill(R, "B. Structures", L, "Extended single legs are not allowed at Level 1.");
      if (L === 2 && (o.bracers < 1 || o.bh !== "low" || o.c1 !== "hh")) f.ill(R, "B. Structures", L, "An extended single leg must be braced by a prep-or-below bracer with a hand/arm connection.");
      if (th[L] !== undefined && o.twist > th[L] && (o.bracers < 1 || o.bh !== "low" || (L === 3 && o.c1 !== "hh"))) f.ill(R, C, L, `Over ${tw(th[L])} into an extended single leg needs a ${L === 3 ? "hand/arm " : ""}bracer at prep level or below.`);
    }
    if (o.invPass) { if (L === 1) f.ill(R, C, L, "Inversions follow stunt rules: not allowed at Level 1."); else if (L === 2) f.chk(R, C, L, "Inversions follow stunt rules: only ground level inversions going directly to non-inverted."); else if (L === 3 && !o.invOK) f.ill(R, C, L, "The top may pass through inverted only if in contact with a base and a prep-or-below bracer the whole time, starting and ending at prep or below."); }
    return f.list;
  }
  if (L <= 2) { f.ill(R, D, L, L === 1 ? "Released transitions are not allowed other than dismounts." : "Released transitions are not allowed other than dismounts and tosses."); return f.list; }
  if (!o.same) f.ill(R, D, L, "Contact must stay with the same bracer(s) throughout.");
  if (!o.touchBase) f.ill(R, D, L, "Contact with a base on the floor must be made before contact with the bracer(s) is lost.");
  if (o.bracers > 1 && !o.sides) f.ill(R, D, L, "Two required bracers must be on separate sides of the body.");
  if (o.bracers > 0 && o.bh === "above") f.ill(R, D, L, "May not be braced to a top person above prep level.");
  if (o.touchRel) f.ill(R, "A. General", L, "Released transitions may not touch other stunt or pyramid release moves.");
  const c2ok = o.catchers >= 1 && o.catchers + o.spotters >= 2;
  if (o.kind === "rni") {
    if (L === 3) {
      if (o.legalStunt) { if (o.toExt && !o.fromWaist) f.ill(R, D, L, "A release to extended with 1 bracer must start at waist level or below with a hand/arm connection."); }
      else { if (o.bracers < 2) f.ill(R, D, L, "Non-inverted releases need 2 bracers.");
        else if (!(o.c1 === "hh" || o.c2 === "hh") || [o.c1, o.c2].includes("oth")) f.ill(R, D, L, "One bracer must be hand/arm to hand/arm; the other hand/arm, or hand/arm to foot/lower leg."); }
      if (o.catchers < 2) f.ill(R, D, L, "Requires 2 catchers."); if (o.change) f.ill(R, D, L, "May not change bases.");
    } else { if (o.bracers < 1) f.ill(R, D, L, "Requires 1 bracer."); if (!c2ok) f.ill(R, D, L, "2 catchers (minimum 1 catcher and 1 spotter)."); }
  }
  if (o.kind === "rtw") {
    const cap = { 3: 4, 4: 6, 5: 8, 6: 9 }[L]; if (o.twist > cap) f.ill(R, D, L, `Twisting releases are limited to ${tw(cap)}.`);
    if (L === 3) { if (o.bracers < 2 || o.c1 !== "hh" || o.c2 !== "hh") f.ill(R, D, L, "1 twist with 2 hand/arm bracers."); if (o.catchers < 2) f.chk(R, D, L, "The Level 3 rule lists 2 catchers for released transitions."); if (o.change) f.ill(R, D, L, "May not change bases."); }
    else { if (L === 4 && o.bracers < 1) f.ill(R, D, L, "1½ twists with 1 bracer."); if (L > 4 && o.bracers < 1) f.chk(R, D, L, "The twisting rule doesn't restate the bracer; the non-inverted rule requires 1."); if (!c2ok) f.ill(R, D, L, "2 catchers (minimum 1 catcher and 1 spotter)."); }
  }
  if (o.kind === "bf") {
    if (L === 3) { f.ill(R, D, L, "Braced inversions are not allowed at Level 3."); return f.list; }
    if (o.downInv) f.ill(R, D, L, "Braced inversions/flips may not travel downward while inverted.");
    if (L === 4 && o.bracers < 2) f.ill(R, D, L, "Braced inversions/flips need 2 bracers at Level 4."); if (L >= 5 && o.bracers < 1) f.ill(R, D, L, "Requires 1 bracer.");
    if (L === 4 && o.change) f.ill(R, D, L, "May not change bases.");
    if (L <= 5) { if (o.flips > 5) f.ill(R, D, L, "Up to 1¼ flipping rotations."); if (o.twist > 0) f.ill(R, D, L, "0 twisting."); }
    if (L === 6) { const ok = (o.flips <= 5 && o.twist <= 2) || (o.flips <= 3 && o.twist <= 4); if (!ok) f.ill(R, D, L, "1¼ flip with up to ½ twist, or ¾ flip with up to 1 twist."); }
    const altOK = o.upright && (L < 6 || o.twist === 0) && o.catchers >= 1 && o.spotters >= 2;
    if (o.catchers < 3 && !altOK) f.ill(R, D, L, "Requires 3 catchers" + (L < 6 ? " (landing upright at prep or above: minimum 1 catcher + 2 spotters)." : " (non-twisting flips landing upright at prep or above: minimum 1 catcher + 2 spotters)."));
  }
  return f.list; };
TIPS.ptrans = ["Who is the bracer, and is that bracer at prep or below the whole time?", "Is the top ever free of the bases? That makes it a released transition.", "Count catchers and spotters, and check they're still and watching at the start."];

// ---------------- DISMOUNT ----------------
FORMS.dismount = (o, c) => { const L = c.L; return [
  S("from", "Dismounts from", [["two", "Two legs"], ["one", "Single leg"], ["inv", "An inverted position"]], "two"),
  S("height", "From height", [["waist", "Waist or below"], ["prep", "Prep"], ["above", "Above prep"]], "prep"),
  Y("pyr", "From a pyramid", { when: L === 1 }),
  S("to", "Lands in", [["cradle", "Cradle"], ["floor", "Floor (on feet)"]], "cradle"),
  S("kind", "Floor dismount type", [["pop", "Straight drop / small hop off"], ["skill", "With a skill or twist"]], "pop", { when: o.to === "floor" }),
  Q("twist", "Twist", 0),
  N("tricks", "Tricks (kick, toe touch, etc.)", 0, 0, 5),
  S("bases", "Bases", [["single", "Single based"], ["multi", "Multi-based"], ["mtop", "Single base, multiple tops"]], "multi"),
  N("catchers", "Catchers", 2, 0, 6),
  Y("spot", "A spotter supporting the waist-to-shoulder area", { d: true, when: o.to === "cradle" && o.bases !== "mtop" }),
  Y("assisted", "Assisted by the original base or spotter", { d: true, when: o.to === "floor" }),
  Y("under", "Multi-based bases start under the top's feet at waist level", { when: o.height === "waist" && o.to === "cradle" && o.bases === "multi" }),
  Y("orig", "Returns to the original base(s)", { d: true }),
  Y("flip", "The dismount flips"),
  S("ftype", "Flip direction", [["front", "Front"], ["back", "Back"]], "front", { when: L === 7 && o.flip }),
  S("flips", "Flipping rotation", [[4, "1 or less"], [5, "1¼"], [6, "More"]], 4, { when: L === 7 && o.flip }),
  Y("fromPrep", "Started from prep level", { d: true, when: L === 7 && o.flip }),
  Y("extraSpot", "An additional spotter assists the cradle", { when: L === 7 && o.to === "cradle" && o.twist > 5 }),
  Y("travel", "Intentionally travels"), Y("landInv", "Lands inverted"), Y("tension", "Tension drop / roll"),
  Y("over", "Passes over, under or through anything (or something passes over/under it)"),
  Y("touch", "Released tops touch each other", { when: o.bases !== "mtop" })
]; };
CHECK.dismount = (o, c) => { const L = c.L, f = mk(), R = "Dismounts", A = L === 7 ? "Glossary: Dismount" : "A. General Dismounts", B = L === 7 ? "B. Requirements" : "B. Dismounts";
  if (o.under) { f.chk("Glossary", "Release Move / Toss", L, "A multi-based waist level cradle with the bases starting under the feet counts as a TOSS: judge it with the toss rules."); if (L === 1 || c.div !== "allstar") f.ill("Tosses", "B. Tosses", L, "Tosses (including waist level cradles and sponge tosses) aren't allowed here."); }
  if (o.flip && L <= 6) f.ill(R, A, L, "No flipping dismounts.");
  if (o.travel) f.ill(R, A, L, "No intentionally traveling dismounts."); if (o.landInv) f.ill(R, A, L, "No inverted dismounts, including landing inverted."); if (o.tension) f.ill(R, A, L, "No tension drops or rolls."); if (o.over) f.ill(R, A, L, "Nothing may pass over or under a dismount, and a dismount may not go over, under or through anything.");
  if (o.touch && o.bases !== "mtop") f.ill(R, A, L, "Released top persons may not touch (except single based stunts with multiple tops).");
  if (!o.orig && o.bases !== "mtop") f.ill(R, A, L, "Must return to the original base(s) (except single based stunts with multiple tops).");
  if (o.to === "cradle" && L <= 6) {
    if (o.bases === "single" && !o.spot) f.ill(R, A, L, "Single based cradles need a spotter with at least one hand/arm supporting the waist-to-shoulder area.");
    if (o.bases === "multi" && (o.catchers < 2 || !o.spot)) f.ill(R, A, L, "Multi-based cradles need 2 catchers and a spotter supporting the waist-to-shoulder area.");
  }
  if (o.to === "cradle" && o.bases === "mtop" && o.catchers < 2) f.ill(R, L === 7 ? B : A, L, "Single based stunts with multiple tops need 2 stationary catchers for each top.");
  if (o.to === "floor" && (o.height !== "waist" || o.kind === "skill") && !o.assisted) f.ill(R, A, L, "Floor dismounts need help from the original base/spotter unless it's a straight drop or small hop off from waist level or below with no skills.");
  if (L === 1) { if (o.twist > 0 || o.tricks > 0) f.ill(R, B, L, "Only straight pop downs and basic straight cradles."); if (o.height === "waist" && o.to === "cradle") f.ill(R, B, L, "No waist level cradles."); if (o.pyr && o.height === "above") f.ill(R, B, L, "No dismounts from above prep level in pyramids."); if (o.from === "inv") f.ill(R, B, L, "No dismounts from inverted positions."); }
  if (L === 2) { if (o.twist > 1) f.ill(R, B, L, "Up to a ¼ turn cradle."); if (o.tricks > 0) f.ill(R, B, L, "Only straight pop downs, straight cradles and ¼ turn cradles."); if (c.mini && o.height === "waist" && o.to === "cradle") f.ill(R, B, L, "No waist level cradles in the Mini division."); if (o.from === "inv") f.ill(R, B, L, "No dismounts from inverted positions."); }
  if (L === 3) {
    if (o.from === "inv") f.ill(R, B, L, "No dismounts from an inverted position.");
    if (o.from === "two") { if (o.twist > 5) f.ill(R, B, L, "From two legs: up to 1¼ twists."); if (o.twist > 0 && o.tricks > 0) f.ill(R, B, L, "From two legs: 1¼ twist OR 1 trick, not both."); if (o.tricks > 1) f.ill(R, B, L, "1 trick at most."); }
    if (o.from === "one") { if (o.twist > 1) f.ill(R, B, L, "From a single leg: ¼ twist cradles only."); if (o.tricks > 0) f.ill(R, B, L, "From a single leg: ¼ twist cradles only."); }
    if (o.tricks > 0 && o.height !== "waist" && o.to !== "cradle") f.ill(R, B, L, "Any trick from prep level or above must land in a cradle.");
  }
  if (L === 4) { const cap = o.from === "one" ? 5 : 9; if (o.twist > cap) f.ill(R, B, L, `Up to ${tw(cap)} from ${o.from === "one" ? "a single leg" : "two legs"}.`); if (o.tricks > 2) f.ill(R, B, L, "Up to 2 tricks."); if (o.from === "inv" && o.twist > 0) f.ill(R, B, L, "Dismounts from an inverted position may not twist."); }
  if (L === 5) { if (o.twist > 9) f.ill(R, B, L, "Up to 2¼ twists."); if (o.tricks > 3) f.ill(R, B, L, "Up to 3 tricks."); if (o.twist > 6 && o.tricks > 0) f.ill(R, B, L, "Over 1½ twists: no skill other than the twist."); if (o.from === "inv" && o.twist > 0) f.ill(R, B, L, "Dismounts from an inverted position may not twist."); }
  if (L === 6) { if (o.twist > 9) f.ill(R, B, L, "Up to 2¼ twists."); if (o.from === "inv" && o.twist > 2) f.ill(R, B, L, "Dismounts from an inverted position may twist up to ½."); }
  if (L === 7) {
    if (o.twist > 9) f.ill(R, B, L, "Up to 2¼ twists.");
    if (o.to === "cradle" && o.twist > 5 && !o.extraSpot) f.ill(R, B, L, "Over 1¼ twists to cradle needs an additional spotter assisting the cradle.");
    if (o.to === "floor" && o.twist > 5 && o.catchers < 2) f.chk(R, B, L, "Over 1¼ twists to the floor needs 2 catchers or 1 catcher with a spotter.");
    if (o.flip) { if (!o.fromPrep) f.ill(R, B, L, "Free flipping dismounts must start from prep level.");
      if (o.to === "floor") { if (o.ftype === "back") f.ill(R, B, L, "Back flipping dismounts must go to cradle."); if (o.flips > 4) f.ill(R, B, L, "To the floor: up to 1 front flip."); if (o.twist > 0) f.ill(R, B, L, "To the floor: 0 twisting."); }
      else { if (o.flips > 5) f.ill(R, B, L, "To cradle: up to 1¼ flips."); if (o.twist > 2) f.ill(R, B, L, "To cradle: up to ½ twist."); if (o.catchers < 2) f.ill(R, B, L, "Free flipping dismounts to cradle need at least 2 catchers, one an original base."); } }
  }
  return f.list; };
TIPS.dismount = ["Single or multi-based, and who is at the waist-to-shoulders on the cradle?", "Count twists from release to catch; note any trick.", "Floor landing from above waist? Look for the assist."];

// ---------------- TOSS ----------------
FORMS.toss = (o, c) => { const L = c.L; return [
  N("bases", "Tossing bases", 4, 1, 6), Y("behind", "One base is behind the top", { d: true }),
  N("catchers", "Catchers in the cradle", 3, 0, 6), Y("origC", "Catchers are the original bases", { d: true, when: L <= 6 }), Y("head", "One catcher at the head and shoulders", { d: true }),
  N("tops", "Top persons", 1, 1, 3), Q("twist", "Twist", 0), N("tricks", "Tricks (kick, toe touch, X, etc.)", 0, 0, 5),
  Y("ballx", "The trick is a Ball X", { when: L === 3 && o.tricks > 0 }),
  Y("flip", "Flips"), S("flips", "Flipping rotation", [[5, "1¼ or less"], [6, "More"]], 5, { when: L === 7 && o.flip }),
  Y("inv", "Inverted at any point (other than a legal flip)"), Y("travel", "Intentionally travels"), Y("over", "Passes over, under or through anything"),
  Y("ground", "Thrown from ground level", { d: true, when: L === 7 })
]; };
CHECK.toss = (o, c) => { const L = c.L, f = mk(), R = "Tosses", A = "A. General" + (L <= 6 ? " Tosses" : ""), B = L === 7 ? "B. Requirements" : "B. Tosses";
  if (c.div !== "allstar") { f.ill(c.div === "cheerab" ? "CheerABILITIES" : c.div === "prep" ? "Prep Divisions" : "Novice Divisions", "Division rules", L, "Tosses are not permitted in this division."); return f.list; }
  if (L === 1) { f.ill(R, B, L, "Tosses are not allowed at Level 1, including waist level cradles and sponge tosses."); return f.list; }
  if (L === 2 && c.mini) { f.ill(R, B, L, "No tosses in the Mini division."); return f.list; }
  if (o.bases < 3 || o.bases > 4) f.ill(R, A, L, "3 to 4 tossing bases.");
  if (!o.behind) f.ill(R, A, L, "One base must be behind the top person" + (L === 7 ? " (exceptions: tosses to another set of bases, Arabians)." : "."));
  if (o.catchers < 3 || (L <= 6 && !o.origC) || !o.head) f.ill(R, A, L, `Caught in a cradle by at least 3 ${L <= 6 ? "original " : ""}bases, one at the head and shoulders.`);
  if (o.tops > 1) f.ill(R, A, L, "Only one top person."); if (o.inv) f.ill(R, A, L, "No inverted tosses."); if (o.travel) f.ill(R, A, L, "No intentionally traveling tosses."); if (o.over) f.ill(R, A, L, "Nothing may move over or under a toss, and a toss may not go over, under or through anything.");
  if (o.flip && L <= 6) f.ill(R, A, L, "No flipping tosses.");
  if (L === 2 && (o.twist > 0 || o.tricks > 0)) f.ill(R, B, L, "Straight ride only.");
  if (L === 3) { if (o.twist > 5) f.ill(R, B, L, "Up to 1¼ twists."); if (o.tricks > 1 && !(o.ballx && o.tricks <= 2)) f.ill(R, B, L, "1 trick at most (Ball X is allowed; an arch doesn't count)."); }
  if (L === 4) { if (o.twist > 9) f.ill(R, B, L, "Up to 2¼ twists."); if (o.tricks > 2) f.ill(R, B, L, "Up to 2 tricks."); }
  if (L === 5) { if (o.twist > 10) f.ill(R, B, L, "Up to 2½ twists."); if (o.tricks > 3) f.ill(R, B, L, "Up to 3 tricks."); if (o.twist > 6 && o.tricks > 0) f.ill(R, B, L, "Over 1½ twists: no skill other than the twist."); }
  if (L === 6 && o.twist > 10) f.ill(R, B, L, "Up to 2½ twists.");
  if (L === 7) { if (!o.ground) f.ill(R, A, L, "Must be performed from ground level."); if (!o.flip && o.twist > 14) f.ill(R, B, L, "Non-flipping tosses: up to 3½ twists."); if (o.flip) { if (o.flips > 5) f.ill(R, B, L, "Flipping tosses: up to 1¼ flipping rotations."); if (o.tricks > 2) f.ill(R, B, L, "Flipping tosses: up to 2 additional skills (tuck, pike and layout don't count)."); } }
  return f.list; };
TIPS.toss = ["Count tossing bases and find the one behind.", "Count twists from release to catch; list every trick.", "Count catchers in the cradle and find head and shoulders."];

const TYPES = [["stand", "Standing tumbling"], ["run", "Running tumbling"], ["stunt", "Stunt"], ["release", "Release move"], ["down", "Downward inversion"], ["pstruct", "Pyramid structure"], ["ptrans", "Pyramid transition"], ["dismount", "Dismount"], ["toss", "Toss"]];
root.CallEngine = { FORMS, CHECK, TIPS, TYPES, fr, tw };
})(typeof window !== "undefined" ? window : globalThis);
