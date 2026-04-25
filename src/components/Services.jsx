import { useState } from "react";
import { SERVICES } from "../data/constants";
import ServicesModal from "./Servicesmodal";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const openService = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  const navigate = (dir) => {
    if (!selectedService) return;
    const idx = SERVICES.findIndex((s) => s.title === selectedService.title);
    const next = (idx + dir + SERVICES.length) % SERVICES.length;
    setSelectedService(SERVICES[next]);
  };

  return (
    <>
      <section id="services">
        <div className="section-header">
          <div className="section-label">// 05. services</div>
          <h2 className="section-title">Services</h2>
          <p className="section-desc">
            End-to-end creative solutions — from initial concept to pixel-perfect, production-ready delivery.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              className="service-card"
              key={i}
              onClick={() => openService(s)}
              style={{ cursor: "pointer" }}
            >
              <div className="service-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              {/* "More details" hint */}
              <div className="service-card-hint">View Details →</div>
            </div>
          ))}
        </div>
      </section>

      {selectedService && (
        <ServicesModal
          service={selectedService}
          onClose={closeModal}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
        />
      )}
    </>
  );
}
