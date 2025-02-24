import React from "react";
import "./HeroSection.css";
import ThreeDScene from "../components/ThreeDScene"; // Import 3D Model

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Left Side: Stacked Text */}
      <div className="hero-text">
       
        <p className="hero-subtitle">
          <span>The most</span>
          <span>advanced LED</span>
          <span>billboard technology.</span>
        </p>
      </div>

      
     
    </section>
  );
};

export default HeroSection;