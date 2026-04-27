import { NAV_ITEMS, socials } from "../data/constants";
export default function Sidebar({
  activeSection,
  sidebarOpen,
  setSidebarOpen,
  scrollTo,
}) {
  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen((o) => !o)}
      >
        {sidebarOpen ? "✕" : "☰"}
      </button>
      <aside className={`sidebar${sidebarOpen ? " open" : ""}`}>
        <div className="profile-img">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="38" r="22" fill="#c8a96e" opacity="0.6" />
            <ellipse
              cx="50"
              cy="90"
              rx="34"
              ry="22"
              fill="#c8a96e"
              opacity="0.4"
            />
          </svg>
        </div>
        <div className="site-name">Rahul Soni</div>
        <div className="site-tagline">Creative Professional</div>
        <div className="site-tagline">Sr Software Engineer</div>
        <div className="social-links">
          {socials.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noopener noreferrer">
              {s.name}
            </a>
          ))}
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
    </>
  );
}
