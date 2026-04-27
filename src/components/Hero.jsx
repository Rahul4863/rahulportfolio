import { useState, useEffect } from "react";
function TypedText({ words }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx, words]);

  return (
    <span>
      <span className="typed-word">{displayed}</span>
      <span className="cursor">|</span>
    </span>
  );
}
export default function Hero({ scrollTo }) {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-greeting">// Think. Code. Repeat.</div>
        <h1 className="hero-name">
          Rahul <span>Soni</span>
        </h1>
        <div className="hero-typed">
          I'm a&nbsp;
      <TypedText words={[
  "Full Stack Developer",
  "MERN & Next.js Developer","PHP Laravel Developer","React Native App Developer"]} />
        </div>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => scrollTo("portfolio")}>
            View Portfolio
          </button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
