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
            <div className="resume-item-place">
              Government P G College , Gurgaon
            </div>
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
            <div className="resume-item-place">
              Dronacharya Government Collage
            </div>
            <div className="resume-item-desc">
              Built a strong foundation in programming, data structures, and web
              development. Worked on academic projects involving PHP, MySQL, and
              front-end technologies.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-title">Senior Secondary</div>
            <span className="resume-item-period">2016 – 2017</span>
            <div className="resume-item-place">
              Sheetla Vidya Peeth Sr Sec School
            </div>
            <div className="resume-item-desc">
              Completed higher secondary education with a focus on computer
              science and mathematics, developing analytical and problem-solving
              skills.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-title">Secondary</div>
            <span className="resume-item-period">2014 – 2015</span>
            <div className="resume-item-place">H.M Sr Sec School</div>
            <div className="resume-item-desc">
              Completed foundational education with emphasis on core subjects
              and early exposure to computers.
            </div>
          </div>
        </div>
        <div>
          <div className="resume-col-title">Professional Experience</div>

          <div className="resume-item">
            <div className="resume-item-title">Senior Software Engineer</div>
            <span className="resume-item-period">Apr 2026 – Present</span>
            <div className="resume-item-place">Delta IT Network</div>
            <div className="resume-item-desc">
              <ul>
                <li>
                  Leading development of scalable web and mobile applications
                  using MERN stack, Next.js, and Laravel
                </li>
                <li>
                  Designing system architecture and optimizing performance for
                  high-traffic applications
                </li>
                <li>
                  Mentoring junior developers and conducting code reviews to
                  maintain code quality
                </li>
                <li>
                  Collaborating with cross-functional teams to deliver robust
                  and user-centric solutions
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-title">Software Developer</div>
            <span className="resume-item-period">Aug 2023 – Apr 2026</span>
            <div className="resume-item-place">Delta IT Network</div>
            <div className="resume-item-desc">
              <ul>
                <li>
                  Developed full stack web applications using React.js, Node.js,
                  Express, and MongoDB
                </li>
                <li>
                  Built RESTful APIs and integrated backend services using PHP
                  Laravel
                </li>
                <li>
                  Created responsive UI components and improved user experience
                  across devices
                </li>
                <li>
                  Worked with Git and GitHub for version control and team
                  collaboration
                </li>
                <li>
                  Deployed applications on VPS and managed production
                  environments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
