export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <div className="section-label">// 01. about</div>
        <h2 className="section-title">About Me</h2>
        <p className="section-desc">
          A passionate creator who bridges the gap between beautiful design and
          functional engineering.
        </p>
      </div>

      <div className="about-grid">
        {/* Image */}
        <div className="about-img-wrap">
          <div className="about-img">
            <svg
              viewBox="0 0 200 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="90" r="50" fill="#c8a96e" opacity="0.3" />
              <ellipse
                cx="100"
                cy="220"
                rx="80"
                ry="50"
                fill="#c8a96e"
                opacity="0.2"
              />
            </svg>
          </div>
          <div className="about-img-accent" />
        </div>

        {/* Content */}
        <div>
          <div className="about-subtitle">
            {" "}
            Full Stack Developer (MERN, Next.js, Laravel, React Native)
          </div>
          <p className="about-bio">
            I am a passionate Full Stack Developer specializing in building
            high-performance web and mobile applications using the MERN stack,
            Next.js, PHP Laravel, and React Native. I focus on writing clean,
            scalable code and creating seamless user experiences.
          </p>

          <div className="about-details">
            <div className="detail-item">
              <strong>Birthday:</strong> 17 Jan 1999
            </div>
            <div className="detail-item">
              <strong>Age:</strong> 26
            </div>
            <div className="detail-item">
              <strong>Website:</strong> www.example.com
            </div>
            <div className="detail-item">
              <strong>Degree:</strong> Master
            </div>
            <div className="detail-item">
              <strong>Phone:</strong> +91 7982972151
            </div>
            <div className="detail-item">
              <strong>Email:</strong> rahulsoni7982@gmail.com
            </div>
            <div className="detail-item">
              <strong>City:</strong> Gurgaon, India
            </div>
            <div className="detail-item">
              <strong>Freelance:</strong> Available ✓
            </div>
          </div>
          <p className="about-bio">
            I am continuously learning and improving my skills to stay updated
            with the latest technologies and best practices in modern web
            development.
          </p>
          <a href="rahul_soni.pdf" target="_blank">
            <button className="btn-primary" style={{ marginTop: 8 }}>
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
