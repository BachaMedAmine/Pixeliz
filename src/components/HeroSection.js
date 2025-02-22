import React from "react";
import "./HeroSection.css";
import ThreeDScene from "../components/ThreeDScene"; // Import 3D Model

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Left Side: Stacked Text */}
      <div className="hero-text">
        <h1 className="hero-title">
          <span>IMPRESSIVE</span>
          <span>3D</span>
          <span>LED</span>
          <span>DISPLAY</span>
        </h1>
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