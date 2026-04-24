import { useState, useEffect, useRef } from "react";
import { STATS } from "../data/constants";

function useCountUp(target, trigger) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target]);

  return count;
}

function StatItem({ icon, num, label }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const count = useCountUp(num, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-icon">{icon}</span>
      <div className="stat-number">{count}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <StatItem key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
