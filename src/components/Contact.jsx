"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // ✅ added
  const [errors, setErrors] = useState({}); // ✅ added

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

    // remove error while typing
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    let err = {};

    if (!formData.name) err.name = "Name is required";
    if (!formData.email) err.email = "Email is required";
    if (!formData.subject) err.subject = "Subject is required";
    if (!formData.message) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch(
        "https://deltawebservice.com/deltaview-lms/controller/email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("❌ " + (data.message || "Something went wrong"));
      }
    } catch (error) {
      console.error(error);
      alert("🚨 Server error, please try again");
    } finally {
      setLoading(false);
    }
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
              <p>Subhash Nagar Gurgaon,Haryana 122001</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+91 7982 9721 51</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <p>rahulsoni6352@gmail.com</p>
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
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
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
            {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          </div>

          <button className="form-submit" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </div>
      </div>
    </section>
  );
}