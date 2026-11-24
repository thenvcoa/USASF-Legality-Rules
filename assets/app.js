(function(){
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
function frac(v){ if(v==null) return "—"; const w=Math.floor(v+1e-9), r=Math.round((v-w)*4); const f=["","¼","½","¾"][r]; return (w?w:"")+f || "0"; }
const TAG={ok:"Allowed",no:"No",exc:"Exception",req:"Limit"};

/* ---------- rule maps ---------- */
let curRule="stunts", curLvl=0;
function items(arr){return arr.map(([t,x])=>`<div class="it ${t}"><span class="tg">${TAG[t]}</span>${esc(x)}</div>`).join("")}
function renderMap(){
  const R=RULES[curRule];
  let h=`<div class="rootnode">${esc(R.name)} <small>Levels 1–6 · ${esc(R.page)}</small></div>`;
  R.sections.forEach(sec=>{
    h+=`<div class="sec"><div class="sechead"><span class="letter">${sec.id}</span><h3>${esc(sec.title)}</h3></div>`;
    if(sec.all) h+=`<div class="allbox"><b class="t">Applies to every level</b><div style="display:flex;flex-direction:column;gap:4px">${items(sec.all)}</div></div>`;
    const lv=sec.levels||{};
    if(Object.keys(lv).length){
      h+=`<div class="lvrow">`;
      for(let L=1;L<=6;L++){
        const cur=lv[L]||[], prev=lv[L-1];
        if(L>1) h+=`<div class="arrow" aria-hidden="true"><svg width="18" height="12" viewBox="0 0 18 12"><path d="M0 6h14M10 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>`;
        if(prev && JSON.stringify(prev)===JSON.stringify(cur)) h+=`<div class="node same" data-l="${L}"><div class="nh"><span class="lv l${L}">L${L}</span><span class="full">Level ${L}</span></div><div class="nb sm">Same as Level ${L-1}</div><div class="nb full">${items(cur)}</div></div>`;
        else h+=`<div class="node" data-l="${L}"><div class="nh"><span class="lv l${L}">L${L}</span>Level ${L}</div><div class="nb">${items(cur)}</div></div>`;
      }
      h+=`</div>`;
    }
    h+=`</div>`;
  });
  h+=`<div class="l7panel" data-l="7"><h3>Level 7 · ${esc(R.name)} (separate lettered sections)</h3><div class="l7grid">`+
     R.l7.map(s=>`<div class="l7card"><h4><span class="letter">${s.id}</span>${esc(s.title)}</h4><div class="nb">${items(s.items)}</div></div>`).join("")+`</div></div>`;
  $("#flow").innerHTML=h;
  applyLvl();
}
function applyLvl(){
  $$("#flow [data-l]").forEach(n=>n.classList.toggle("dim",curLvl!==0 && +n.dataset.l!==curLvl));
  $$("#flow .allbox").forEach(n=>n.classList.toggle("dim",curLvl===7));
  $("#flow").classList.toggle("lvfocus",curLvl!==0);
  if(curLvl && window.innerWidth>700){const t=$(`#flow .node[data-l="${curLvl}"]`); if(t) t.scrollIntoView({block:"nearest",inline:"center"});}
}
function setupMaps(){
  $("#ruleChips").innerHTML=Object.entries(RULES).map(([k,r])=>`<button class="chip" data-r="${k}" aria-pressed="${k===curRule}">${r.name}</button>`).join("");
  $("#lvlChips").innerHTML=`<button class="chip" data-v="0" aria-pressed="true">All levels</button>`+[1,2,3,4,5,6,7].map(l=>`<button class="chip" data-v="${l}" aria-pressed="false">Level ${l}</button>`).join("");
  $("#ruleChips").addEventListener("click",e=>{const b=e.target.closest("[data-r]");if(!b)return;curRule=b.dataset.r;$$("#ruleChips .chip").forEach(c=>c.setAttribute("aria-pressed",c===b));renderMap();});
  $("#lvlChips").addEventListener("click",e=>{const b=e.target.closest("[data-v]");if(!b)return;curLvl=+b.dataset.v;$$("#lvlChips .chip").forEach(c=>c.setAttribute("aria-pressed",c===b));applyLvl();});
  renderMap();
}

/* ---------- flashcards ---------- */
const CATN={tumbling:"Tumbling",stunt:"Stunts",pyramid:"Pyramids",toss:"Tosses",dismount:"Dismounts",position:"Positions & levels",people:"People & roles",general:"General",stunts:"Stunts",pyramids:"Pyramids",tosses:"Tosses",dismounts:"Dismounts",divisions:"Divisions"};
let deck="g", list=[], idx=0;
function deckData(){return deck==="g"?GLOSSARY:RULECARDS}
function marks(){return store.get("fc-"+deck,{})}
function fcFilters(){
  const cats=[...new Set(deckData().map(c=>c[2]))];
  $("#fcFilter").innerHTML=`<option value="">All categories</option>`+cats.map(c=>`<option value="${c}">${CATN[c]||c}</option>`).join("");
}
function buildList(keep){
  const cat=$("#fcFilter").value, q=$("#fcSearch").value.trim().toLowerCase(), pile=$("#fcPile").value, m=marks();
  const cur=list[idx]&&list[idx][0];
  list=deckData().filter(c=>(!cat||c[2]===cat)&&(!q||(c[0]+" "+c[1]).toLowerCase().includes(q))&&(pile==="all"||(pile==="review"?m[c[0]]==="rev":!m[c[0]])));
  if(keep&&cur){const j=list.findIndex(c=>c[0]===cur); idx=j>=0?j:0;} else idx=0;
  showCard();
}
function showCard(){
  const c=list[idx], card=$("#card"); card.classList.remove("flip");
  const m=marks(), d=deckData();
  const got=d.filter(x=>m[x[0]]==="got").length, rev=d.filter(x=>m[x[0]]==="rev").length;
  $("#fcBar").style.width=(got/d.length*100)+"%"; $("#fcGot").textContent=got+" got it"; $("#fcRev").textContent=rev+" to review";
  if(!c){$("#fcFront").textContent="No cards match";$("#fcBack").textContent="Change the filters to see cards.";$("#fcCount").textContent="0 / 0";$("#fcCat").textContent=$("#fcCat2").textContent="";return;}
  const termFirst=$("#fcSide").value==="term";
  const [a,b]=termFirst?[c[0],c[1]]:[c[1],c[0]];
  const fr=$("#fcFront"), bk=$("#fcBack");
  fr.textContent=a; bk.textContent=b;
  fr.className=termFirst?"term":"def"; bk.className=termFirst?"def":"term";
  const st=m[c[0]]==="got"?" · got it":m[c[0]]==="rev"?" · review":"";
  $("#fcCat").textContent=$("#fcCat2").textContent=(CATN[c[2]]||c[2])+st;
  $("#fcCount").textContent=`${idx+1} / ${list.length}`;
}
function mark(v){const c=list[idx]; if(!c) return; const m=marks(); m[c[0]]=v; store.set("fc-"+deck,m); if($("#fcPile").value!=="all"){buildList(false);} else {idx=Math.min(idx+1,list.length-1);showCard();}}
function setupCards(){
  fcFilters(); buildList();
  let sx=null,sy=0,swiped=false;
  $("#card").addEventListener("touchstart",e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY;swiped=false;},{passive:true});
  $("#card").addEventListener("touchend",e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;
    if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){swiped=true;(dx<0?$("#fcNext"):$("#fcPrev")).click();}sx=null;});
  $("#card").addEventListener("click",()=>{if(swiped){swiped=false;return;}$("#card").classList.toggle("flip");});
  $("#fcNext").onclick=()=>{if(list.length){idx=(idx+1)%list.length;showCard();}};
  $("#fcPrev").onclick=()=>{if(list.length){idx=(idx-1+list.length)%list.length;showCard();}};
  $("#fcGood").onclick=()=>mark("got"); $("#fcAgain").onclick=()=>mark("rev");
  $("#fcShuffle").onclick=()=>{for(let i=list.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[list[i],list[j]]=[list[j],list[i]];}idx=0;showCard();};
  $("#fcReset").onclick=()=>{store.set("fc-"+deck,{});buildList(false);};
  $("#fcDeck").onchange=e=>{deck=e.target.value;fcFilters();buildList();};
  ["#fcFilter","#fcPile"].forEach(s=>$(s).onchange=()=>buildList());
  $("#fcSide").onchange=()=>showCard();
  $("#fcSearch").oninput=()=>buildList();
  document.addEventListener("keydown",e=>{
    if(e.target.matches("input,select,textarea")) return;
    if(e.key===" "||e.key==="Enter"){e.preventDefault();$("#card").classList.toggle("flip");}
    else if(e.key==="ArrowRight") $("#fcNext").click(); else if(e.key==="ArrowLeft") $("#fcPrev").click();
  });
}

/* ---------- quiz ---------- */
const QT={core:"Core concepts",tumbling:"Tumbling",stunts:"Stunts",pyramids:"Pyramids",dismounts:"Dismounts",tosses:"Tosses",divisions:"Divisions",l7:"Level 7"};
let qs=[],qi=0,score=0,missed=[],answered=false,sel=new Set(Object.keys(QT)),qlen="20";
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function quizSetup(){
  const n=QUIZ.filter(q=>sel.has(q.t)).length;
  $("#quizBox").innerHTML=`<div class="setup"><h3 style="font-size:22px">Build a quiz</h3>
  <div><div class="lbl" style="font:800 11px var(--display);letter-spacing:.8px;text-transform:uppercase;color:var(--muted);margin-bottom:6px">Topics</div><div class="chips" id="qTopics">${Object.entries(QT).map(([k,v])=>`<button class="chip" data-t="${k}" aria-pressed="${sel.has(k)}">${v} (${QUIZ.filter(q=>q.t===k).length})</button>`).join("")}</div></div>
  <div><div class="lbl" style="font:800 11px var(--display);letter-spacing:.8px;text-transform:uppercase;color:var(--muted);margin-bottom:6px">Length</div><div class="chips" id="qLen">${["10","20","all"].map(v=>`<button class="chip" data-n="${v}" aria-pressed="${qlen===v}">${v==="all"?"All matching ("+n+")":v+" questions"}</button>`).join("")}</div></div>
  <div><button class="btn pri" id="qStart" ${n?"":"disabled"}>Start quiz</button></div></div>`;
  $("#qTopics").onclick=e=>{const b=e.target.closest("[data-t]");if(!b)return;sel.has(b.dataset.t)?sel.delete(b.dataset.t):sel.add(b.dataset.t);quizSetup();};
  $("#qLen").onclick=e=>{const b=e.target.closest("[data-n]");if(!b)return;qlen=b.dataset.n;quizSetup();};
  $("#qStart").onclick=()=>{let pool=shuffle(QUIZ.filter(q=>sel.has(q.t)));if(qlen!=="all")pool=pool.slice(0,+qlen);startQuiz(pool);};
}
function startQuiz(pool){qs=pool.map(q=>{const order=shuffle(q.o.map((_,i)=>i));return {...q,o:order.map(i=>q.o[i]),a:order.indexOf(q.a)};});qi=0;score=0;missed=[];showQ();}
function showQ(){
  const q=qs[qi]; answered=false;
  $("#quizBox").innerHTML=`<div class="qmeta"><span>Question ${qi+1} of ${qs.length} · ${QT[q.t]}</span><span>Score ${score}</span></div>
  <div class="qtext">${esc(q.q)}</div><div class="opts">${q.o.map((o,i)=>`<button class="opt" data-i="${i}"><span class="ltr">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div><div id="qx"></div>`;
  $$(".opt").forEach(b=>b.onclick=()=>answer(+b.dataset.i));
}
function answer(i){
  if(answered) return; answered=true; const q=qs[qi], ok=i===q.a;
  if(ok) score++; else missed.push(q);
  $$(".opt").forEach((b,j)=>{b.disabled=true;if(j===q.a)b.classList.add("right");else if(j===i)b.classList.add("wrong");});
  $("#qx").innerHTML=`<div class="expl"><b style="color:${ok?"var(--ok)":"var(--no)"}">${ok?"Correct.":"Not quite. Answer: "+esc(q.o[q.a])}</b>${esc(q.e)}</div><div class="qnav"><button class="btn pri" id="qNext">${qi+1<qs.length?"Next question →":"See results"}</button></div>`;
  $("#qNext").onclick=()=>{qi++; qi<qs.length?showQ():results();}; $("#qNext").focus();
}
function results(){
  const pct=Math.round(score/qs.length*100);
  $("#quizBox").innerHTML=`<div class="score">${score}/${qs.length}</div><p>${pct}% correct. ${pct>=90?"Ready for the floor.":pct>=70?"Solid. Review the misses below.":"Worth another pass through the study guide and rule maps."}</p>
  ${missed.length?`<h3 style="font-size:17px;margin-top:10px">Review these</h3><div class="missed">${missed.map(q=>`<div><b>${esc(q.q)}</b><br>Answer: ${esc(q.o[q.a])}. ${esc(q.e)}</div>`).join("")}</div>`:""}
  <div class="qnav" style="justify-content:flex-start">${missed.length?`<button class="btn pri" id="qRetry">Retake missed (${missed.length})</button>`:""}<button class="btn" id="qNew">New quiz</button></div>`;
  if(missed.length) $("#qRetry").onclick=()=>startQuiz(missed.map(m=>QUIZ.find(q=>q.q===m.q)));
  $("#qNew").onclick=quizSetup;
}

if($("#flow")) setupMaps(); if($("#card")) setupCards(); if($("#quizBox")) quizSetup();
})();
