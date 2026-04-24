import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i) => {
    setCurrent(i);
    setPaused(true); // pause auto-play when user interacts
    setTimeout(() => setPaused(false), 8000); // resume after 8s
  };

  const prev = () => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => goTo((current + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials">
      <div className="section-header">
        <div className="section-label">// 06. testimonials</div>
        <h2 className="section-title">What Clients Say</h2>
      </div>

      <div className="testi-carousel">
        {/* Card */}
        <div className="testi-card" key={current}>
          <div className="testimonial-quote">"</div>
          <p className="testimonial-text">{t.text}</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{t.initials}</div>
            <div>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button className="testi-arrow testi-prev" onClick={prev}>‹</button>
        <button className="testi-arrow testi-next" onClick={next}>›</button>

        {/* Dot indicators */}
        <div className="testi-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}