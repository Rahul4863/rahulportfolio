import { useState, useEffect } from "react";
import "./index.css";

import Sidebar      from "./components/Sidebar";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Stats        from "./components/Stats";
import Skills       from "./components/Skills";
import Resume       from "./components/Resume";
import Portfolio    from "./components/Portfolio";
import Services     from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

import { NAV_ITEMS } from "./data/constants";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [sidebarOpen, setSidebarOpen]     = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  // Highlight active nav link on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="app">
        <Sidebar
          activeSection={activeSection}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          scrollTo={scrollTo}
        />

        <main className="main-content">
          <Hero         scrollTo={scrollTo} />
          <About />
          <Stats />
          <Skills />
          <Resume />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
        </main>
      </div>

      <Footer />
    </>
  );
}
