import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    alert("Message sent! Thank you.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="section-header">
        <div className="section-label">// 07. contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-desc">
          Have a project in mind? Let's create something remarkable together.
        </p>
      </div>

      <div className="contact-grid">
        {/* Info */}
        <div>
          <div className="contact-info-item">
            <div className="contact-info-icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <p>info@example.com</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Alex Johnson"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="alex@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="form-submit" onClick={handleSubmit}>
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}
