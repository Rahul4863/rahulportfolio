export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <div className="section-label">// 01. about</div>
        <h2 className="section-title">About Me</h2>
        <p className="section-desc">
          A passionate creator who bridges the gap between beautiful design and functional engineering.
        </p>
      </div>

      <div className="about-grid">
        {/* Image */}
        <div className="about-img-wrap">
          <div className="about-img">
            <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="90" r="50" fill="#c8a96e" opacity="0.3" />
              <ellipse cx="100" cy="220" rx="80" ry="50" fill="#c8a96e" opacity="0.2" />
            </svg>
          </div>
          <div className="about-img-accent" />
        </div>

        {/* Content */}
        <div>
          <div className="about-subtitle">UI/UX Designer & Web Developer</div>
          <p className="about-bio">
            With over 5 years of experience crafting digital experiences, I specialize in creating
            interfaces that are not just beautiful, but purposeful. My approach combines rigorous
            design thinking with clean, performant code.
          </p>

          <div className="about-details">
            <div className="detail-item"><strong>Birthday:</strong> 1 May 1995</div>
            <div className="detail-item"><strong>Age:</strong> 30</div>
            <div className="detail-item"><strong>Website:</strong> www.example.com</div>
            <div className="detail-item"><strong>Degree:</strong> Master</div>
            <div className="detail-item"><strong>Phone:</strong> +123 456 7890</div>
            <div className="detail-item"><strong>Email:</strong> email@example.com</div>
            <div className="detail-item"><strong>City:</strong> New York, USA</div>
            <div className="detail-item"><strong>Freelance:</strong> Available ✓</div>
          </div>

          <p className="about-bio">
            I believe that great design is invisible — it guides users effortlessly toward their
            goals while creating moments of genuine delight. Every pixel, every interaction, every
            line of code is crafted with intention.
          </p>

          <button className="btn-primary" style={{ marginTop: 8 }}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
