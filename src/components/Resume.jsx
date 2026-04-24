export default function Resume() {
  return (
    <section id="resume">
      <div className="section-header">
        <div className="section-label">// 03. resume</div>
        <h2 className="section-title">Resume</h2>
        <p className="section-desc">
          A track record of delivering impactful work across design, development, and creative direction.
        </p>
      </div>

      <div className="resume-grid">
        {/* Education */}
        <div>
          <div className="resume-col-title">Education</div>

          <div className="resume-item">
            <div className="resume-item-title">Master of Fine Arts & Graphic Design</div>
            <span className="resume-item-period">2015 – 2016</span>
            <div className="resume-item-place">Rochester Institute of Technology, Rochester, NY</div>
            <div className="resume-item-desc">
              Advanced study in visual communication, branding, and interactive media design.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-title">Bachelor of Fine Arts & Graphic Design</div>
            <span className="resume-item-period">2010 – 2014</span>
            <div className="resume-item-place">Rochester Institute of Technology, Rochester, NY</div>
            <div className="resume-item-desc">
              Foundation in design principles, typography, color theory, and digital tools.
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="resume-col-title">Professional Experience</div>

          <div className="resume-item">
            <div className="resume-item-title">Senior Graphic Design Specialist</div>
            <span className="resume-item-period">2019 – Present</span>
            <div className="resume-item-place">Experion, New York, NY</div>
            <div className="resume-item-desc">
              <ul>
                <li>Lead design, development & implementation of all visual communication materials</li>
                <li>Delegate tasks across a 7-member design team with full creative oversight</li>
                <li>Supervise quality assurance for all graphic outputs and brand assets</li>
                <li>Manage production budgets ranging from $2,000 to $25,000 per project</li>
              </ul>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-title">Graphic Design Specialist</div>
            <span className="resume-item-period">2017 – 2018</span>
            <div className="resume-item-place">Stepping Stone Advertising, New York, NY</div>
            <div className="resume-item-desc">
              <ul>
                <li>Developed logos, brochures, infographics, and marketing campaigns</li>
                <li>Managed up to 5 concurrent client projects under tight deadlines</li>
                <li>Created 4+ design presentations monthly for clients and account teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
