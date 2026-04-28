import { NAV_ITEMS, socials } from "../data/constants";
import { useState } from "react";
export default function Sidebar({
  activeSection,
  sidebarOpen,
  setSidebarOpen,
  scrollTo,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen((o) => !o)}
      >
        {sidebarOpen ? "✕" : "☰"}
      </button>
      <aside className={`sidebar${sidebarOpen ? " open" : ""}`}>
        <div className="profile-img" onClick={() => setShowModal(true)}>
          <img src="../rahul_image.png" alt="" srcset="" />
          <circle cx="50" cy="38" r="22" fill="#c8a96e" opacity="0.6" />
          <ellipse
            cx="50"
            cy="90"
            rx="34"
            ry="22"
            fill="#c8a96e"
            opacity="0.4"
          />
        </div>
        <div className="site-name">Rahul Soni</div>
        <div className="site-tagline">Full Stack Developer</div>
        <div className="site-tagline">Sr Software Engineer</div>
        <div className="socials">
          {socials.map((item, index) => {
            const Icon = item.icon;
            return (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        <nav>
          {NAV_ITEMS.map(({ id, icon, label }) => (
            <a
              key={id}
              className={activeSection === id ? "active" : ""}
              onClick={() => scrollTo(id)}
            >
              <span className="nav-icon">{icon}</span>
              {label}
            </a>
          ))}
        </nav>
      </aside>
      {showModal && (
        <div
          className="img-modal"
          onClick={() => setShowModal(false)} // click outside close
        >
          <div
            className="img-modal-content"
            onClick={(e) => e.stopPropagation()} // prevent close on image click
          >
            <span className="close-btn" onClick={() => setShowModal(false)}>
              ✕
            </span>
            <h3>Profile Picture</h3>
            <img src="../rahul_image.png" alt="preview" />
          </div>
        </div>
      )}
    </>
  );
}
