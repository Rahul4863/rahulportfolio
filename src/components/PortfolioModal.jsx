import { useState, useEffect } from "react";
import { PORTFOLIO_DETAILS } from "../data/constants";
// Extended data for the modal — add your real images/details here
export default function PortfolioModal({ item, onClose, onPrev, onNext }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const detail = PORTFOLIO_DETAILS[item.id] || {};
  const images = detail.images || [item.emoji];

  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  // Reset slide when item changes
  useEffect(() => setSlideIdx(0), [item.id]);

  return (
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>

        {/* ── Close button */}
        <button className="pm-close" onClick={onClose}>✕</button>

        {/* ── Prev / Next project */}
        <button className="pm-nav pm-nav-prev" onClick={onPrev}>‹</button>
        <button className="pm-nav pm-nav-next" onClick={onNext}>›</button>

        <div className="pm-inner">
          {/* ── LEFT — image slider */}
          <div className="pm-slider">
            <div className="pm-slide">
              <div className="pm-slide-img">
                <span className="pm-slide-emoji">{images[slideIdx]}</span>
                <div className="pm-slide-label">{detail.title}</div>
              </div>
            </div>

            {/* Dots */}
            <div className="pm-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`pm-dot${i === slideIdx ? " active" : ""}`}
                  onClick={() => setSlideIdx(i)}
                />
              ))}
            </div>

            {/* Thumb strip */}
            <div className="pm-thumbs">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`pm-thumb${i === slideIdx ? " active" : ""}`}
                  onClick={() => setSlideIdx(i)}
                >
                  {img}
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT — info panel */}
          <div className="pm-info">
            {/* Project meta card */}
            <div className="pm-meta-card">
              <h3 className="pm-meta-title">Project Information</h3>
              <div className="pm-meta-divider" />
              <div className="pm-meta-row">
                <span className="pm-meta-key">Category</span>
                <span className="pm-meta-val">{item.cat.charAt(0).toUpperCase() + item.cat.slice(1)}</span>
              </div>
              <div className="pm-meta-row">
                <span className="pm-meta-key">Client</span>
                <span className="pm-meta-val">{detail.client || "—"}</span>
              </div>
              <div className="pm-meta-row">
                <span className="pm-meta-key">Project date</span>
                <span className="pm-meta-val">{detail.date || "—"}</span>
              </div>
              <div className="pm-meta-row">
                <span className="pm-meta-key">Project URL</span>
                <a className="pm-meta-link" href="#" onClick={(e) => e.preventDefault()}>
                  {detail.url || "—"}
                </a>
              </div>
            </div>

            {/* Description */}
            <h2 className="pm-proj-title">{detail.title}</h2>
            <p className="pm-proj-desc">{detail.description}</p>

            <button className="btn-primary pm-cta">View Live Project →</button>
          </div>
        </div>

      </div>
    </div>
  );
}
