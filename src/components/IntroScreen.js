import React, { useEffect, useState } from "react";
import "./IntroScreen.css"; // Styles for animation

const IntroScreen = ({ onSkip }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo after 20 seconds
    setTimeout(() => {
      setShowLogo(true);
    }, 20000); // 20 seconds delay for logo appearance

    // Redirect after 28 seconds
    setTimeout(() => {
      onSkip();
    }, 28000); // 28 seconds total duration
  }, [onSkip]);

  return (
    <div className="intro-container">
      {/* Top half - Video */}
      <div className="intro-video">
        <video autoPlay muted loop>
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Bottom half - Logo appears with delay */}
      <div className={`intro-logo ${showLogo ? "visible" : ""}`}>
        <img src="/assets/images/PixelizLogo.jpg" alt="Company Logo" />
      </div>

      {/* Skip Button */}
      <button className="skip-button" onClick={onSkip}>
        Skip Intro
      </button>
    </div>
  );
};

export default IntroScreen;