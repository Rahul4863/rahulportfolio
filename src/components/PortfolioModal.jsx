import { useState, useEffect } from "react";

// Extended data for the modal — add your real images/details here
const PORTFOLIO_DETAILS = {
  1: {
    title: "App 1",
    cat: "app",
    client: "TechCorp Inc.",
    date: "15 March, 2024",
    url: "www.example.com",
    description:
      "A full-featured mobile application designed to streamline daily workflows. The project involved end-to-end UI/UX research, prototyping, and pixel-perfect implementation across iOS and Android. Special attention was paid to micro-interactions and accessibility standards.",
    images: ["📱", "🎨", "⚙️", "📊"],
  },
  2: {
    title: "Product 1",
    cat: "product",
    client: "Luxe Brands",
    date: "01 July, 2023",
    url: "www.luxebrands.com",
    description:
      "A premium product identity crafted for a luxury goods brand. The project encompassed packaging design, photography art direction, and e-commerce visual storytelling — resulting in a 28% uplift in online conversions.",
    images: ["🛍", "✨", "🎁", "📦"],
  },
  3: {
    title: "Branding 1",
    cat: "branding",
    client: "Nova Studio",
    date: "22 Jan, 2024",
    url: "www.novastudio.io",
    description:
      "Complete corporate identity from the ground up — logo system, color palette, typography hierarchy, brand voice guidelines, and a comprehensive style guide delivered for cross-team consistency.",
    images: ["✨", "🎨", "📐", "🖌"],
  },
  4: {
    title: "Books 1",
    cat: "books",
    client: "Meridian Press",
    date: "10 Sep, 2023",
    url: "www.meridianpress.com",
    description:
      "Editorial design for a series of three books — typesetting, grid systems, chapter openers, and cover design. The final layouts balanced readability with strong visual character unique to each title.",
    images: ["📚", "📖", "🖊", "📝"],
  },
  5: {
    title: "App 2",
    cat: "app",
    client: "FinPay",
    date: "03 Feb, 2024",
    url: "www.finpay.app",
    description:
      "UI/UX redesign for a fintech payment application handling millions of daily transactions. Focus areas included trust-building design patterns, simplified onboarding flows, and a robust design system scalable across 12 product teams.",
    images: ["💳", "📈", "🔐", "💰"],
  },
  6: {
    title: "Product 2",
    cat: "product",
    client: "GiftBox Co.",
    date: "20 Nov, 2023",
    url: "www.giftbox.co",
    description:
      "E-commerce product page redesign increasing average session duration by 45%. Custom illustrations, 3D render integration, and mobile-first interaction design were key deliverables.",
    images: ["🎁", "🛒", "📦", "🎀"],
  },
  7: {
    title: "Branding 2",
    cat: "branding",
    client: "Apexion",
    date: "14 Apr, 2024",
    url: "www.apexion.com",
    description:
      "Brand refresh for a growing SaaS company entering enterprise markets. Updated visual language to convey authority and innovation while retaining brand equity built over 6 years.",
    images: ["🎨", "🏢", "💼", "🔵"],
  },
  8: {
    title: "Books 2",
    cat: "books",
    client: "Atelier Publishing",
    date: "30 Jun, 2023",
    url: "www.atelierpub.com",
    description:
      "A coffee-table photobook celebrating contemporary architecture. The design language mirrors the subject — clean geometry, generous white space, and a monochromatic palette punctuated by bold image crops.",
    images: ["📖", "🏛", "📷", "🖼"],
  },
  9: {
    title: "App 3",
    cat: "app",
    client: "DataViz Labs",
    date: "08 Aug, 2024",
    url: "www.datavizlabs.com",
    description:
      "Dashboard interface for a B2B analytics platform. Complex data hierarchies were translated into intuitive, at-a-glance visualisations. Delivered as a fully documented Figma component library + React implementation.",
    images: ["📊", "📉", "🔭", "💡"],
  },
};

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
