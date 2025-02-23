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

// Sound Services
const soundServices = [
  {
    id: 5,
    title: "Polar 12 Sound System",
    description:
      "The Polar 12 consists of a subwoofer and two column elements. It has an integrated four-way mixer, Bluetooth, and comes with padded protective covers.",
    image: "/hk12.png",
    features: [
      "High-fidelity audio",
      "Custom speaker configurations",
      "Noise reduction technology",
      "Wireless and multi-zone capabilities",
    ],
  },
  {
    id: 6,
    title: "Yamaha MG12 Mixer",
    description:
      "A powerful, compact 12-input mixer featuring studio-quality preamps, perfect for live performances, broadcasting, and professional audio setups.",
    image: "/YamahaMG12.png",
    features: [
      "12-channel mixing console",
      "Studio-quality preamps",
      "Multi-effects processing",
      "Flexible connectivity",
    ],
  },
];

// Lighting Services
const lightingServices = [
  {
    id: 7,
    title: "Stage Lighting Solutions",
    description:
      "Innovative lighting systems to enhance stage productions, architecture, and event experiences.",
    image: "/stageLight.png",
    features: [
      "Smart lighting controls",
      "LED stage and event lighting",
      "Architectural ambient lighting",
      "DMX and wireless solutions",
    ],
  },
  {
    id: 8,
    title: "Beam350 Moving Head",
    description:
      "Professional-grade moving head beam light, perfect for concerts, live events, and stage shows, delivering sharp beams and precise movements.",
    image: "/beam350.png",
    features: [
      "High-intensity beam",
      "DMX & wireless control",
      "Fast movement & rotation",
      "Multiple color presets",
    ],
  },
];

const Services = () => {
  const [activeLEDService, setActiveLEDService] = useState(ledServices[0]);
  const [activeSoundService, setActiveSoundService] = useState(soundServices[0]);
  const [activeLightingService, setActiveLightingService] = useState(lightingServices[0]);

  return (
    <section id="services">
      {/* LED Display Section */}
      <div className="services-section">
        <div className="service-card">
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
      </div>

      {/* Sound Systems Section */}
      <div className="services-section">
        <div className="service-card">
          <h2 className="services-title">Sound Systems</h2>
          <div className="services-container">
            <div className="services-text">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSoundService.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="services-description">{activeSoundService.description}</p>
                  <ul className="service-features">
                    {activeSoundService.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="services-image">
              <motion.img src={activeSoundService.image} alt={activeSoundService.title} className="service-img" />
            </div>
          </div>

          <div className="services-navigation">
            {soundServices.map((service) => (
              <motion.button
                key={service.id}
                className={`service-btn ${activeSoundService.id === service.id ? "active" : ""}`}
                onClick={() => setActiveSoundService(service)}
                whileHover={{ scale: 1.1 }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lighting Solutions Section */}
      <div className="services-section">
        <div className="service-card">
          <h2 className="services-title">Lighting Solutions</h2>
          <div className="services-container">
            <div className="services-text">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLightingService.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="services-description">{activeLightingService.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="services-image">
              <motion.img src={activeLightingService.image} alt={activeLightingService.title} className="service-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;