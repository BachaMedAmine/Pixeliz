import React from "react";
import { motion } from "framer-motion";
import "../styles/Services.css"; // Make sure you create this file

const services = [
  { id: 1, title: "LED Display Installation", icon: "⚡" },
  { id: 2, title: "3D Billboard Design", icon: "🎨" },
  { id: 3, title: "Projection Mapping", icon: "🌎" },
  { id: 4, title: "Custom LED Animations", icon: "💡" },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;