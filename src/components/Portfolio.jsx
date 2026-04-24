import { useState } from "react";
import { PORTFOLIO_ITEMS } from "../data/constants";
import PortfolioModal from "./PortfolioModal";

const FILTERS = ["all", "app", "product", "branding", "books"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered =
    activeFilter === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.cat === activeFilter);

  const openItem = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const navigate = (dir) => {
    if (!selectedItem) return;
    const idx = PORTFOLIO_ITEMS.findIndex((p) => p.id === selectedItem.id);
    const next = (idx + dir + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setSelectedItem(PORTFOLIO_ITEMS[next]);
  };

  return (
    <>
      <section id="portfolio">
        <div className="section-header">
          <div className="section-label">// 04. portfolio</div>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-desc">
            A curated selection of projects spanning digital products, brand identities, and editorial design.
          </p>
        </div>

        {/* Filters */}
        <div className="portfolio-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {filtered.map((item) => (
            <div
              className="portfolio-card"
              key={item.id}
              onClick={() => openItem(item)}
            >
              <div className="portfolio-img">
                <div className="portfolio-img-placeholder">{item.emoji}</div>
                <div className="portfolio-overlay">🔍</div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-tag">{item.cat}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={closeModal}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
        />
      )}
    </>
  );
}
