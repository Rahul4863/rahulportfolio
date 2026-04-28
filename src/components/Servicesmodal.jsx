import { useEffect } from "react";
import { FaGlobe, FaServer } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiLaravel } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { GiRocket } from "react-icons/gi";
// Extended detail data for each service — customize as needed
export const SERVICE_DETAILS = {
  "Full Stack Web Development": {
    icon: FaGlobe,
    tagline: "End-to-end scalable web solutions",
    features: [
      "Complete MERN / Next.js / Laravel development",
      "Responsive & high-performance applications",
      "Secure authentication (JWT / Role-based access)",
      "Real-time features (Socket.io integration)",
    ],
    tools: ["React", "Next.js", "Node.js", "Laravel", "MongoDB", "MySQL"],
    deliverables: "Full web app · Admin panel · API integration · Deployment",
    turnaround: "2 – 6 weeks depending on scope",
  },

  "Frontend Development": {
    icon: SiReact,
    tagline: "Modern, fast & responsive UI",
    features: [
      "Pixel-perfect responsive UI design",
      "Component-based architecture",
      "Performance optimization & lazy loading",
      "Clean UI with Tailwind / Bootstrap",
    ],
    tools: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    deliverables: "UI screens · Reusable components · Optimized frontend",
    turnaround: "1 – 3 weeks",
  },

  "Backend Development": {
    icon: FaServer,
    tagline: "Secure & scalable server-side systems",
    features: [
      "REST API development",
      "JWT authentication & role-based access",
      "Database design & optimization",
      "Secure API routing & validation",
    ],
    tools: ["Node.js", "Express.js", "Laravel", "MongoDB", "MySQL"],
    deliverables: "APIs · Database schema · Admin backend",
    turnaround: "2 – 5 weeks",
  },

  "Mobile App Development": {
    icon: MdPhoneIphone,
    tagline: "Cross-platform mobile apps",
    features: [
      "React Native app development",
      "API integration with backend",
      "Smooth UI/UX & performance optimization",
      "Android-ready builds",
    ],
    tools: ["React Native", "Expo", "Firebase"],
    deliverables: "Mobile app · API integration · APK build",
    turnaround: "3 – 6 weeks",
  },

  "API Integration": {
    icon: BiLinkAlt,
    tagline: "Seamless third-party integrations",
    features: [
      "Payment gateway integration (Razorpay, Stripe)",
      "External API integration",
      "Webhook & automation setup",
      "Error handling & security",
    ],
    tools: ["REST APIs", "Razorpay", "Stripe", "Postman"],
    deliverables: "Integrated services · Secure endpoints",
    turnaround: "1 – 2 weeks",
  },

  "Deployment & DevOps": {
    icon: GiRocket,
    tagline: "Reliable deployment & scaling",
    features: [
      "VPS / cloud deployment",
      "CI/CD setup",
      "Server optimization & monitoring",
      "Domain & SSL configuration",
    ],
    tools: ["AWS", "VPS", "Docker", "Nginx", "PM2"],
    deliverables: "Live deployment · CI/CD pipeline · Monitoring setup",
    turnaround: "1 – 2 weeks",
  },
};

export default function ServicesModal({ service, onClose, onPrev, onNext }) {
  const detail = SERVICE_DETAILS[service.title] || {};
    const Icon = detail.icon || service.icon;

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
              <span className="sm-big-icon">  {Icon && <Icon size={60} />}</span>
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