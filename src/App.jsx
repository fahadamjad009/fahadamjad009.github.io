// Portfolio V2 â€” Black/Mint aesthetic matching fahadamjad009.github.io
// Drop this into your src/App.jsx and add JetBrains Mono + Inter to index.html
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  { id:"ml2", code:"// 01", name:"LLM Regulatory Agent", cat:"AI Engineering", desc:"LangGraph agent for regulatory Q&A and SAR narrative generation. Hybrid FAISS+BM25 retrieval with RRF fusion, local llama3.2:3b via Ollama, FastAPI service. 40/40 tests passing.", stack:["Python","LangGraph","Ollama","FAISS","BM25","FastAPI","Streamlit"], status:"Complete", sc:"#64FFDA", r:true, e:true },
  { id:"ml1", code:"// 02", name:"Credit Risk Scorer", cat:"Deep Learning", desc:"PyTorch neural network for financial credit risk classification with class-imbalance handling, threshold calibration, and SHAP explainability on every prediction.", stack:["PyTorch","SHAP","Scikit-learn","Python"], status:"Complete", sc:"#64FFDA", r:true, e:true },
  { id:"jamid", code:"// 03", name:"JAMID Identity Wallet", cat:"Decentralised Identity", desc:"Open-source Android identity wallet implementing OID4VCI/OID4VP credential flows with Keycloak-backed issuer portal, verifier gateway, and policy engine.", stack:["Android","Keycloak","OID4VCI","Next.js","PostgreSQL"], status:"In Progress", sc:"#F59E0B", r:true, e:true },
  { id:"t1", code:"// 04", name:"RegTech RAG Engine", cat:"RAG Â· NLP", desc:"Retrieval-augmented generation pipeline for regulatory document Q&A with chunk-level retrieval, reranking, and citation-grounded answers with hallucination guardrails.", stack:["LlamaIndex","FAISS","OpenAI","Python"], status:"Complete", sc:"#64FFDA", r:true, e:true },
  { id:"asx", code:"// 05", name:"ASX/ABS Early Warning", cat:"FinTech Analytics", desc:"Live financial risk platform combining ASX market data with ABS macroeconomic indicators. Anomaly detection, stress-testing and risk scoring across the AU market.", stack:["Streamlit","PySpark","Pandas","Plotly","AWS"], status:"Deployed", sc:"#64FFDA", r:true, e:false },
  { id:"churn", code:"// 06", name:"Churn ML Benchmark", cat:"Machine Learning", desc:"Multi-model customer churn benchmark across XGBoost, Random Forest and Logistic Regression with full ROC/AUC comparison, SHAP importance and threshold analysis.", stack:["XGBoost","Scikit-learn","SHAP","Python"], status:"Complete", sc:"#64FFDA", r:false, e:true },
  { id:"tableau", code:"// 07", name:"ASX Tableau Intelligence", cat:"BI Â· Visualisation", desc:"Nine-sheet Tableau dashboard and published story on ASX sector performance, correlation matrices, and earnings seasonality. Live on Tableau Public.", stack:["Tableau","Python","SQL","yfinance"], status:"Deployed", sc:"#64FFDA", r:true, e:false },
];

const STACK = ["Python","PyTorch","LangChain","LlamaIndex","FastAPI","Android","Kotlin","Keycloak","OID4VCI","PySpark","Streamlit","Tableau","Power BI","AWS","Docker","SHAP","Plotly","React","Next.js","SQL","dbt","Airflow"];
const ROLES = ["Analytics Engineer.","Data Scientist.","AI Engineer.","RegTech Specialist.","ML Engineer."];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useCounter(target, active, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);
  return count;
}

function Reveal({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : "translateY(28px)",
      transition: `opacity .9s cubic-bezier(.16,1,.3,1) ${delay}s, transform .9s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

function StatCard({ value, label, suffix = "", active }) {
  const count = useCounter(value, active);
  return (
    <div style={{ textAlign:"center", padding:"32px 16px" }}>
      <div style={{ fontSize:"clamp(2.2rem,4.5vw,3.2rem)", fontWeight:800, color:"#fff", letterSpacing:"-.03em", lineHeight:1 }}>{count}{suffix}</div>
      <div style={{ marginTop:8, fontFamily:"'JetBrains Mono',monospace", fontSize:".65rem", color:"#333", letterSpacing:".1em", textTransform:"uppercase" }}>{label}</div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [hov, setHov] = useState(false);
  const [ref, inView] = useInView(0.07);
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background:"#0f0f0f", border: hov ? "1px solid rgba(100,255,218,.3)" : "1px solid #1a1a1a",
      borderRadius:10, padding:"26px 26px 22px", display:"flex", flexDirection:"column", gap:14,
      boxShadow: hov ? "0 0 32px rgba(100,255,218,.06),0 16px 48px rgba(0,0,0,.6)" : "none",
      transform: inView ? (hov ? "translateY(-5px)" : "none") : "translateY(36px)",
      opacity: inView ? 1 : 0,
      transition: inView
        ? "border-color .3s,box-shadow .3s,transform .3s cubic-bezier(.16,1,.3,1),opacity .8s"
        : `opacity .8s cubic-bezier(.16,1,.3,1) ${index*.07}s,transform .8s cubic-bezier(.16,1,.3,1) ${index*.07}s`,
      cursor:"default",
    }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".62rem", color:"#64FFDA", letterSpacing:".1em", textTransform:"uppercase" }}>{project.cat}</span>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".62rem", color:project.sc, background:`${project.sc}12`, border:`1px solid ${project.sc}30`, borderRadius:3, padding:"2px 8px" }}>{project.status}</span>
      </div>
      <div>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".62rem", color:"#222", marginBottom:6 }}>{project.code}</div>
        <div style={{ fontSize:"clamp(.98rem,1.8vw,1.1rem)", fontWeight:700, color:"#e6e6e6", letterSpacing:"-.01em", lineHeight:1.3 }}>{project.name}</div>
      </div>
      <div style={{ fontSize:".78rem", color:"#444", lineHeight:1.65, flexGrow:1 }}>{project.desc}</div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
        {project.stack.map(s => <span key={s} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".6rem", color: hov ? "#555" : "#333", background:"#111", border:"1px solid " + (hov?"#2a2a2a":"#1e1e1e"), borderRadius:3, padding:"3px 8px", transition:"color .2s,border-color .2s" }}>{s}</span>)}
      </div>
      <a href="https://github.com/fahadamjad009" target="_blank" rel="noreferrer" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".68rem", color: hov ? "#64FFDA" : "#2a2a2a", textDecoration:"none", letterSpacing:".04em", transition:"color .2s", display:"flex", alignItems:"center", gap:5, marginTop:2 }}>
        â†— view on github
      </a>
    </div>
  );
}

export default function Portfolio() {
  const [view, setView] = useState("recruiter");
  const [scrollY, setScrollY] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  const [roleText, setRoleText] = useState("");
  const [statsRef, statsInView] = useInView(0.3);
  const roleRef = useRef({ idx:0, char:0, del:false });

  useEffect(() => {
    setTimeout(() => setHeroReady(true), 200);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Typewriter
  useEffect(() => {
    if (!heroReady) return;
    const type = () => {
      const r = roleRef.current;
      const word = ROLES[r.idx];
      if (!r.del) {
        setRoleText(word.slice(0, r.char + 1));
        r.char++;
        if (r.char === word.length) { r.del = true; return setTimeout(type, 2000); }
      } else {
        setRoleText(word.slice(0, r.char - 1));
        r.char--;
        if (r.char === 0) { r.del = false; r.idx = (r.idx + 1) % ROLES.length; }
      }
      setTimeout(type, r.del ? 60 : 90);
    };
    const t = setTimeout(type, 600);
    return () => clearTimeout(t);
  }, [heroReady]);

  const filtered = PROJECTS.filter(p => view === "recruiter" ? p.r : p.e);

  const MINT = "#64FFDA";
  const show = (delay) => ({
    opacity: heroReady ? 1 : 0,
    transform: heroReady ? "none" : "translateY(14px)",
    transition: `opacity .8s ease ${delay}s, transform .8s ease ${delay}s`,
  });

  return (
    <div style={{ fontFamily:"'Inter',-apple-system,sans-serif", background:"#0a0a0a", color:"#e6e6e6", minHeight:"100vh", overflowX:"hidden" }}>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, padding:"0 clamp(24px,5vw,64px)", height:64, display:"flex", alignItems:"center", justifyContent:"space-between", background: scrollY>60 ? "rgba(10,10,10,.92)" : "transparent", backdropFilter: scrollY>60 ? "blur(20px)" : "none", borderBottom: scrollY>60 ? "1px solid rgba(100,255,218,.07)" : "none", transition:"all .4s" }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".82rem", fontWeight:600, color:MINT, letterSpacing:".08em" }}>FAHAD</span>
        <div style={{ display:"flex", background:"rgba(100,255,218,.04)", border:"1px solid rgba(100,255,218,.12)", borderRadius:40, padding:3, gap:2 }}>
          {["recruiter","engineer"].map(v => (
            <button key={v} onClick={() => setView(v)} style={{ background: view===v ? "rgba(100,255,218,.12)" : "transparent", color: view===v ? MINT : "#555", border: view===v ? "1px solid rgba(100,255,218,.25)" : "1px solid transparent", cursor:"pointer", borderRadius:36, padding:"5px 14px", fontSize:".68rem", fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", transition:"all .25s", fontFamily:"'JetBrains Mono',monospace" }}>{v}</button>
          ))}
        </div>
        <a href="https://github.com/fahadamjad009" target="_blank" rel="noreferrer" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".72rem", color:"#333", textDecoration:"none", letterSpacing:".04em", transition:"color .2s" }} onMouseEnter={e=>e.target.style.color=MINT} onMouseLeave={e=>e.target.style.color="#333"}>github â†—</a>
      </nav>

      {/* HERO */}
      <section style={{ position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"100px clamp(24px,6vw,80px) 80px", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-10%", left:"-5%", width:"min(600px,60vw)", height:"min(600px,60vw)", background:"radial-gradient(circle,rgba(100,255,218,.04) 0%,transparent 65%)", borderRadius:"50%", animation:"bA 20s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-10%", right:"-5%", width:"min(500px,50vw)", height:"min(500px,50vw)", background:"radial-gradient(circle,rgba(100,255,218,.025) 0%,transparent 65%)", borderRadius:"50%", animation:"bB 26s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1, maxWidth:800 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".82rem", color:MINT, marginBottom:20, ...show(.1) }}>Hello, my name is</div>
          <h1 style={{ fontSize:"clamp(3rem,9vw,7.5rem)", fontWeight:900, lineHeight:.95, letterSpacing:"-.04em", color:"#fff", margin:"0 0 28px", ...show(.2) }}>FAHAD<br/>AMJAD</h1>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"clamp(.9rem,2vw,1.15rem)", color:MINT, marginBottom:28, minHeight:"1.6em", ...show(.45) }}>
            {roleText}<span style={{ display:"inline-block", width:2, height:"1.1em", background:MINT, marginLeft:2, verticalAlign:"text-bottom", animation:"blink 1s step-end infinite" }} />
          </div>
          <p style={{ fontSize:"clamp(.85rem,1.6vw,.95rem)", color:"#555", lineHeight:1.8, maxWidth:520, margin:"0 0 12px", ...show(.6) }}>Building ML systems, data pipelines, and regulatory AI platforms.<br/>Combining financial domain expertise with production-grade data science.</p>
          <div style={{ fontSize:".82rem", fontWeight:600, color:"#888", marginBottom:40, ...show(.7) }}><span style={{ color:"#aaa" }}>Data Scientist &amp; Analytics Engineer</span> â€” Sydney, NSW<br/>UTS Master of Data Science (Distinction) + Master of Professional Accounting</div>
          <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:48, ...show(.8) }}>
            {[["View Resume","primary"],["See Projects","ghost"]].map(([label,type]) => (
              <a key={label} href="#" onClick={e=>{e.preventDefault();if(label==="See Projects")document.getElementById("projects")?.scrollIntoView({behavior:"smooth"});}} style={{ fontFamily:"'Inter',sans-serif", fontSize:".78rem", fontWeight:600, letterSpacing:".06em", borderRadius:4, padding:"12px 28px", textDecoration:"none", cursor:"pointer", transition:"all .25s", display:"inline-block", ...(type==="primary" ? { color:MINT, background:"transparent", border:"1px solid rgba(100,255,218,.35)" } : { color:"#555", background:"transparent", border:"1px solid rgba(255,255,255,.1)" }) }} onMouseEnter={e=>{if(type==="primary"){e.target.style.background="rgba(100,255,218,.07)";e.target.style.borderColor="rgba(100,255,218,.7)";e.target.style.boxShadow="0 0 20px rgba(100,255,218,.12)";e.target.style.transform="translateY(-2px)"}else{e.target.style.color="#aaa";e.target.style.borderColor="rgba(255,255,255,.22)";e.target.style.transform="translateY(-2px)"}}} onMouseLeave={e=>{e.target.style.background="transparent";e.target.style.borderColor=type==="primary"?"rgba(100,255,218,.35)":"rgba(255,255,255,.1)";e.target.style.boxShadow="none";e.target.style.transform="none";e.target.style.color=type==="primary"?MINT:"#555"}}>{label}</a>
            ))}
          </div>
          <div style={{ display:"flex", gap:24, flexWrap:"wrap", ...show(.95) }}>
            {[["linkedin.com/in/fahad-amjad009","https://linkedin.com/in/fahad-amjad009"],["github.com/fahadamjad009","https://github.com/fahadamjad009"]].map(([label,url]) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".72rem", color:"#333", textDecoration:"none", letterSpacing:".04em", transition:"color .2s" }} onMouseEnter={e=>e.target.style.color=MINT} onMouseLeave={e=>e.target.style.color="#333"}>{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} style={{ borderTop:"1px solid #111", borderBottom:"1px solid #111", padding:"0 clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth:1060, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))" }}>
          {[{value:7,label:"Portfolio Systems"},{value:2,label:"Graduate Degrees"},{value:15,label:"GitHub Repos",suffix:"+"},{value:3,label:"Deployed Apps"}].map((s,i)=>(
            <Reveal key={s.label} delay={i*.08}><StatCard {...s} active={statsInView} /></Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding:"96px clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth:1060, margin:"0 auto" }}>
          <Reveal>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".68rem", color:MINT, letterSpacing:".14em", textTransform:"uppercase", marginBottom:20 }}>// projects â€” {view==="recruiter"?"business view":"engineering view"}</div>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:800, letterSpacing:"-.025em", color:"#fff", margin:"0 0 12px", lineHeight:1.15 }}>Seven end-to-end<br/><span style={{ color:"#222" }}>systems.</span></h2>
            <p style={{ fontSize:".86rem", color:"#444", lineHeight:1.7, maxWidth:480 }}>Each spans data ingestion, modelling, and deployment. Toggle view to filter by audience.</p>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,320px),1fr))", gap:16, marginTop:56 }}>
            {filtered.map((p,i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section style={{ padding:"80px clamp(24px,5vw,64px)", borderTop:"1px solid #111" }}>
        <div style={{ maxWidth:1060, margin:"0 auto" }}>
          <Reveal><div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".68rem", color:"#1a1a1a", letterSpacing:".14em", textTransform:"uppercase", marginBottom:32 }}>// stack</div></Reveal>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {STACK.map((s,i) => (
              <Reveal key={s} delay={i*.025}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".72rem", color:"#2a2a2a", border:"1px solid #161616", borderRadius:4, padding:"7px 14px", background:"#0d0d0d", transition:"color .2s,border-color .2s", cursor:"default" }} onMouseEnter={e=>{e.target.style.color=MINT;e.target.style.borderColor="rgba(100,255,218,.25)"}} onMouseLeave={e=>{e.target.style.color="#2a2a2a";e.target.style.borderColor="#161616"}}>{s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding:"100px clamp(24px,5vw,64px) 80px", borderTop:"1px solid #111" }}>
        <div style={{ maxWidth:1060, margin:"0 auto" }}>
          <Reveal>
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:48 }}>
              <div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".68rem", color:MINT, letterSpacing:".14em", textTransform:"uppercase", marginBottom:20 }}>// available for remote roles</div>
                <h2 style={{ fontSize:"clamp(2.4rem,6vw,4.5rem)", fontWeight:900, letterSpacing:"-.04em", color:"#fff", lineHeight:1 }}>Let's build<br/><span style={{ color:MINT }}>something real.</span></h2>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[["github.com/fahadamjad009","https://github.com/fahadamjad009"],["tableau public","https://public.tableau.com/app/profile/fahad.amjad2750"],["linkedin","https://linkedin.com/in/fahad-amjad009"]].map(([label,url])=>(
                  <a key={label} href={url} target="_blank" rel="noreferrer" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".75rem", color:"#2a2a2a", textDecoration:"none", letterSpacing:".04em", transition:"color .2s" }} onMouseEnter={e=>e.target.style.color=MINT} onMouseLeave={e=>e.target.style.color="#2a2a2a"}>{label} â†—</a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ padding:"20px clamp(24px,5vw,64px)", borderTop:"1px solid #0f0f0f", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:6 }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".65rem", color:"#1a1a1a" }}>FAHAD AMJAD Â· SYDNEY</span>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".65rem", color:"#1a1a1a" }}>DATA SCIENTIST Â· AI ENGINEER Â· 2026</span>
      </footer>

      <style>{`
        @keyframes bA{0%,100%{transform:translate(0,0) scale(1)}40%{transform:translate(40px,-30px) scale(1.05)}70%{transform:translate(-20px,30px) scale(.96)}}
        @keyframes bB{0%,100%{transform:translate(0,0) scale(1)}35%{transform:translate(-35px,20px) scale(1.04)}65%{transform:translate(20px,-25px) scale(.97)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        *{box-sizing:border-box}html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:#0a0a0a}::-webkit-scrollbar-thumb{background:#1a1a1a;border-radius:2px}
      `}</style>
    </div>
  );
}

