import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Services.css";

const services = [
  {
    id: 1,
    title: "LED Display Installation",
    description:
      "Professional installation of LED displays for various applications, ensuring high performance and longevity.",
    image: "/service1.png", // Directly referencing from public folder
    features: [
      "High-resolution LED displays",
      "Seamless integration",
      "Energy-efficient solutions",
      "Customizable display sizes",
    ],
  },
  {
    id: 2,
    title: "3D Billboard Design",
    description:
      "Cutting-edge 3D billboard design to create engaging and immersive advertising experiences.",
    image: "/service2.png", // Directly referencing from public folder
    features: [
      "Hyper-realistic 3D visuals",
      "Advanced projection techniques",
      "Seamless digital integration",
      "Eye-catching animations",
    ],
  },
  {
    id: 3,
    title: "Projection Mapping",
    description:
      "Transform any surface into a dynamic display using our advanced projection mapping technology.",
    image: "/service3.png", // Directly referencing from public folder
    features: [
      "High-definition projection",
      "Real-time content adaptation",
      "Perfect for events & exhibitions",
      "Custom mapped surfaces",
    ],
  },
  {
    id: 4,
    title: "Custom LED Animations",
    description:
      "Bespoke LED animations tailored to your brand’s needs, enhancing engagement and visual appeal.",
    image: "/service4.png", // Directly referencing from public folder
    features: [
      "Dynamic LED animation sequences",
      "Custom programming support",
      "Seamless content playback",
      "Engaging visual storytelling",
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Left Side - Title and Description */}
        <div className="services-text">
          <h2 className="services-title">Classic Products</h2>
          <p className="services-description">
            LED signage that provides exceptional image quality with robust product design to empower businesses to reach a new level.
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              className="service-details"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="service-title">{activeService.title}</h3>
              <p className="service-description">{activeService.description}</p>
              <ul className="service-features">
                {activeService.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Image */}
        <div className="services-image">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeService.image}
              src={activeService.image}
              alt={activeService.title}
              className="service-img"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Product Navigation */}
      <div className="services-navigation">
        {services.map((service) => (
          <motion.button
            key={service.id}
            className={`service-btn ${activeService.id === service.id ? "active" : ""}`}
            onClick={() => setActiveService(service)}
            whileHover={{ scale: 1.1 }}
          >
            {service.title}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Services;