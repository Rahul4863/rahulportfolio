import { useState, useEffect, useRef } from "react";
import { SKILLS } from "../data/constants";

function SkillBar({ name, val }) {
  const ref = useRef();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span>{name}</span>
        <span className="skill-pct">{val}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-fill${animated ? " animated" : ""}`}
          style={{ "--w": `${val}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <div className="section-label">// 02. skills</div>
        <h2 className="section-title">My Skills</h2>
        <p className="section-desc">
          A toolkit refined over years of building across disciplines — from concept to deployment.
        </p>
      </div>
      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <SkillBar key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
