export default function Resume() {
  return (
    <section id="resume">
      <div className="section-header">
        <div className="section-label">// 03. resume</div>
        <h2 className="section-title">Resume</h2>
        <p className="section-desc">
          A track record of delivering impactful work across design,
          development, and creative direction.
        </p>
      </div>

      <div className="resume-grid">
        {/* Education */}
        <div>
          <div className="resume-col-title">Education</div>

          <div className="resume-item">
            <div className="resume-item-title">
              Master of Computer Applications (MCA)
            </div>
            <span className="resume-item-period">2020 – 2022</span>
            <div className="resume-item-place">Government P G College , Gurgaon</div>
            <div className="resume-item-desc">
              Focused on advanced software development, web technologies, and
              database management. Gained hands-on experience in building
              scalable applications using modern frameworks.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-title">
              Bachelor of Computer Applications (BCA)
            </div>
            <span className="resume-item-period">2017 – 2020</span>
            <div className="resume-item-place">Dronacharya Government Collage</div>
            <div className="resume-item-desc">
              Built a strong foundation in programming, data structures, and web
              development. Worked on academic projects involving PHP, MySQL, and
              front-end technologies.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-title">Senior Secondary (12th)</div>
            <span className="resume-item-period">2016 – 2017</span>
            <div className="resume-item-place">[Your School Name]</div>
            <div className="resume-item-desc">
              Completed higher secondary education with a focus on computer
              science and mathematics, developing analytical and problem-solving
              skills.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-title">Secondary (10th)</div>
            <span className="resume-item-period">2014 – 2015</span>
            <div className="resume-item-place">[Your School Name]</div>
            <div className="resume-item-desc">
              Completed foundational education with emphasis on core subjects
              and early exposure to computers.
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="resume-col-title">Professional Experience</div>

          <div className="resume-item">
            <div className="resume-item-title">
              Senior Graphic Design Specialist
            </div>
            <span className="resume-item-period">2019 – Present</span>
            <div className="resume-item-place">Experion, New York, NY</div>
            <div className="resume-item-desc">
              <ul>
                <li>
                  Lead design, development & implementation of all visual
                  communication materials
                </li>
                <li>
                  Delegate tasks across a 7-member design team with full
                  creative oversight
                </li>
                <li>
                  Supervise quality assurance for all graphic outputs and brand
                  assets
                </li>
                <li>
                  Manage production budgets ranging from $2,000 to $25,000 per
                  project
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-title">Graphic Design Specialist</div>
            <span className="resume-item-period">2017 – 2018</span>
            <div className="resume-item-place">
              Stepping Stone Advertising, New York, NY
            </div>
            <div className="resume-item-desc">
              <ul>
                <li>
                  Developed logos, brochures, infographics, and marketing
                  campaigns
                </li>
                <li>
                  Managed up to 5 concurrent client projects under tight
                  deadlines
                </li>
                <li>
                  Created 4+ design presentations monthly for clients and
                  account teams
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
