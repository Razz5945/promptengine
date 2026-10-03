"use client";

import { useState } from "react";
import { ArrowRight, Braces, Check, ChevronDown, Copy, Layers3, Sparkles, WandSparkles } from "lucide-react";

const features = [
  { icon: WandSparkles, title: "Prompt Builder", text: "Turn a rough idea into a structured, model-ready prompt." },
  { icon: Sparkles, title: "Prompt Enhancer", text: "Improve clarity, context, constraints and output quality." },
  { icon: Layers3, title: "Template Library", text: "Start faster with reusable prompts for real workflows." },
];

export default function Home() {
  const [goal, setGoal] = useState("");
  const [generated, setGenerated] = useState(false);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#"><span className="brandMark"><Braces size={18}/></span>PromptEngine</a>
        <div className="navLinks"><a href="#features">Product</a><a href="#templates">Templates</a><a href="#pricing">Pricing</a></div>
        <div className="navActions"><button className="textBtn">Sign in</button><button className="smallPrimary">Get started <ArrowRight size={15}/></button></div>
      </nav>

      <section className="hero shell">
        <div className="eyebrow"><span></span> PROFESSIONAL PROMPT ENGINEERING</div>
        <h1>Build better prompts.<br/><em>Get better results.</em></h1>
        <p className="heroCopy">Transform a simple idea into a precise, structured prompt engineered for the AI model you use.</p>

        <div className="builder">
          <div className="builderTop"><span><Sparkles size={17}/> Prompt Builder</span><span className="status"><i></i> Engine ready</span></div>
          <textarea value={goal} onChange={(e)=>setGoal(e.target.value)} placeholder="What do you want AI to accomplish? Describe your goal in plain language..." />
          <div className="controls">
            <button>ChatGPT <ChevronDown size={14}/></button><button>General <ChevronDown size={14}/></button><button>Professional <ChevronDown size={14}/></button>
            <button className="generate" onClick={()=>setGenerated(true)} disabled={!goal.trim()}><WandSparkles size={16}/> Generate prompt</button>
          </div>
          {generated && <div className="result"><div className="resultHead"><span>ENGINEERED PROMPT</span><button onClick={()=>navigator.clipboard?.writeText(`Act as an expert assistant. Your objective is: ${goal}`)}><Copy size={14}/> Copy</button></div><p><b>Role:</b> Act as an expert assistant with deep domain knowledge.</p><p><b>Objective:</b> {goal}</p><p><b>Requirements:</b> Provide a precise, practical response. State assumptions, organize the output clearly, and prioritize actionable information.</p></div>}
        </div>
        <p className="trust"><Check size={14}/> Structured for clarity <Check size={14}/> Model-aware <Check size={14}/> Reusable</p>
      </section>

      <section className="featureSection shell" id="features">
        <div className="sectionLabel">BUILT FOR BETTER OUTPUT</div>
        <h2>From idea to engineered prompt.</h2>
        <div className="featureGrid">{features.map(({icon:Icon,title,text})=><article key={title}><div className="iconBox"><Icon size={20}/></div><h3>{title}</h3><p>{text}</p><a href="#">Explore <ArrowRight size={14}/></a></article>)}</div>
      </section>

      <footer className="shell"><a className="brand" href="#"><span className="brandMark"><Braces size={16}/></span>PromptEngine</a><span>Engineering better conversations with AI.</span><span>© 2026 PromptEngine</span></footer>
    </main>
  );
}
