import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Services.css";

// LED Display Services
const ledServices = [
  {
    id: 1,
    title: "LED Display Installation",
    description:
      "Professional installation of LED displays for various applications, ensuring high performance and longevity.",
    image: "/service1.png",
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
    image: "/service2.png",
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
    image: "/service3.png",
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
    image: "/service4.png",
    features: [
      "Dynamic LED animation sequences",
      "Custom programming support",
      "Seamless content playback",
      "Engaging visual storytelling",
    ],
  },
];

// Sound & Lighting Services
const soundLightingServices = [
  {
    id: 5,
    title: "Professional Sound Systems",
    description:
      "State-of-the-art sound systems for concerts, events, and commercial installations with superior audio quality.",
    image: "/service5.png",
    features: [
      "High-fidelity audio",
      "Custom speaker configurations",
      "Noise reduction technology",
      "Wireless and multi-zone capabilities",
    ],
  },
  {
    id: 6,
    title: "Advanced Lighting Solutions",
    description:
      "Innovative lighting systems to enhance stage productions, architecture, and event experiences.",
    image: "/service6.png",
    features: [
      "Smart lighting controls",
      "LED stage and event lighting",
      "Architectural ambient lighting",
      "DMX and wireless solutions",
    ],
  },
];

const Services = () => {
  const [activeLEDService, setActiveLEDService] = useState(ledServices[0]);
  const [activeSoundLightService, setActiveSoundLightService] = useState(
    soundLightingServices[0]
  );

  return (
    <section id="services">
      {/* LED Displays Section */}
      <div className="services-section">
        <div className="services-container">
          <div className="services-text">
            <h2 className="services-title">LED Display Solutions</h2>
            <p className="services-description">
              High-quality LED displays designed to deliver stunning visuals and reliable performance.
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLEDService.id}
                className="service-details"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="service-title">{activeLEDService.title}</h3>
                <p className="service-description">{activeLEDService.description}</p>
                <ul className="service-features">
                  {activeLEDService.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="services-image">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeLEDService.image}
                src={activeLEDService.image}
                alt={activeLEDService.title}
                className="service-img"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="services-navigation">
          {ledServices.map((service) => (
            <motion.button
              key={service.id}
              className={`service-btn ${activeLEDService.id === service.id ? "active" : ""}`}
              onClick={() => setActiveLEDService(service)}
              whileHover={{ scale: 1.1 }}
            >
              {service.title}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Sound & Lighting Section */}
      <div className="services-section">
        <div className="services-container">
          <div className="services-text">
            <h2 className="services-title">Sound & Lighting Solutions</h2>
            <p className="services-description">
              High-quality sound and lighting systems to enhance any event or venue.
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSoundLightService.id}
                className="service-details"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="service-title">{activeSoundLightService.title}</h3>
                <p className="service-description">{activeSoundLightService.description}</p>
                <ul className="service-features">
                  {activeSoundLightService.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="services-image">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSoundLightService.image}
                src={activeSoundLightService.image}
                alt={activeSoundLightService.title}
                className="service-img"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="services-navigation">
          {soundLightingServices.map((service) => (
            <motion.button
              key={service.id}
              className={`service-btn ${activeSoundLightService.id === service.id ? "active" : ""}`}
              onClick={() => setActiveSoundLightService(service)}
              whileHover={{ scale: 1.1 }}
            >
              {service.title}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;