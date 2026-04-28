import { useEffect } from "react";

// Extended detail data for each service — customize as needed
const SERVICE_DETAILS = {
  "Full Stack Web Development": {
    icon: "💼",
    tagline: "Where aesthetics meet function",
    features: [
      "Custom responsive layouts for all devices",
      "Performance-optimized HTML/CSS/JS",
      "Accessibility (WCAG 2.1) compliance",
      "Design handoff with full style guides",
    ],
    tools: ["Figma", "Webflow", "React", "GSAP"],
    deliverables: "Wireframes · Hi-fi mockups · Production code · Style guide",
    turnaround: "2 – 6 weeks depending on scope",
  },
  "Frontend Development": {
    icon: "✅",
    tagline: "Research-driven, user-obsessed",
    features: [
      "User research & journey mapping",
      "Information architecture",
      "Interactive prototypes for testing",
      "Design system & component library",
    ],
    tools: ["HTML", "CSS", "Javascript", "Bootstrap","Reactjs"],
    deliverables: "Research report · User flows · Prototype · Design system",
    turnaround: "3 – 8 weeks",
  },
  "Analytics & SEO": {
    icon: "📈",
    tagline: "Data that drives decisions",
    features: [
      "Technical SEO audit & fixes",
      "Keyword strategy & content mapping",
      "GA4 / Search Console setup",
      "Monthly performance reporting",
    ],
    tools: ["GA4", "SEMrush", "Ahrefs", "Looker Studio"],
    deliverables: "SEO audit · Keyword map · Dashboard · Monthly report",
    turnaround: "Ongoing retainer or one-off audit",
  },
  "Brand Strategy": {
    icon: "🔭",
    tagline: "Identity that lasts",
    features: [
      "Brand discovery & positioning workshop",
      "Logo system & visual identity",
      "Brand voice & messaging framework",
      "Full brand guidelines document",
    ],
    tools: ["Figma", "Illustrator", "Notion", "Miro"],
    deliverables: "Brand deck · Logo files · Guidelines PDF · Tone-of-voice doc",
    turnaround: "4 – 10 weeks",
  },
  "Creative Direction": {
    icon: "☀️",
    tagline: "Vision across every touchpoint",
    features: [
      "Campaign concept development",
      "Art direction for shoots & video",
      "Cross-channel visual cohesion",
      "Team briefing & creative oversight",
    ],
    tools: ["Adobe CC", "Figma", "Frame.io", "Notion"],
    deliverables: "Creative brief · Mood boards · Concept deck · Final assets",
    turnaround: "Project-based",
  },
  "Project Management": {
    icon: "📅",
    tagline: "On time. Every time.",
    features: [
      "Scope definition & milestone planning",
      "Cross-functional team coordination",
      "Risk identification & mitigation",
      "Transparent client reporting",
    ],
    tools: ["Linear", "Notion", "Slack", "Loom"],
    deliverables: "Project plan · Weekly status · Final retrospective",
    turnaround: "Scales with your project",
  },
};

export default function ServicesModal({ service, onClose, onPrev, onNext }) {
  const detail = SERVICE_DETAILS[service.title] || {};

  // Keyboard: Escape to close, arrows to navigate
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-modal sm-modal" onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button className="pm-close" onClick={onClose}>✕</button>

        {/* Prev / Next */}
        <button className="pm-nav pm-nav-prev" onClick={onPrev}>‹</button>
        <button className="pm-nav pm-nav-next" onClick={onNext}>›</button>
        <div className="pm-inner">
          <div className="pm-slider sm-icon-panel">
            <div className="sm-icon-display">
              <span className="sm-big-icon">{detail.icon || service.icon}</span>
            </div>
            <div className="sm-tools">
              <div className="sm-tools-label">Tools & Stack</div>
              <div className="sm-tools-list">
                {(detail.tools || []).map((t) => (
                  <span key={t} className="sm-tool-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
          {/* RIGHT — info panel */}
          <div className="pm-info">
            <div className="pm-meta-card">
              <h3 className="pm-meta-title">Service Information</h3>
              <div className="pm-meta-divider" />
              <div className="pm-meta-row">
                <span className="pm-meta-key">Category</span>
                <span className="pm-meta-val">{service.title}</span>
              </div>
              <div className="pm-meta-row">
                <span className="pm-meta-key">Deliverables</span>
                <span className="pm-meta-val" style={{ fontSize: "0.78rem" }}>{detail.deliverables || "—"}</span>
              </div>
              <div className="pm-meta-row">
                <span className="pm-meta-key">Turnaround</span>
                <span className="pm-meta-val">{detail.turnaround || "—"}</span>
              </div>
            </div>
            <h2 className="pm-proj-title">{service.title}</h2>
            <p className="pm-proj-desc" style={{ marginBottom: "1rem" }}>
              {service.desc} — {detail.tagline}
            </p>
            {/* Features list */}
            <ul className="sm-features">
              {(detail.features || []).map((f) => (
                <li key={f}>
                  <span className="sm-check">✓</span> {f}
                </li>
              ))}
            </ul>
            <button className="btn-primary pm-cta" onClick={onClose}>
              Get In Touch →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}