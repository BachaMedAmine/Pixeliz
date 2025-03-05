import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const videoSources = [
  "/videos/animationPix1.mp4",
  "/videos/animationPix2.mp4",
  "/videos/animationPix3.mp4",
];

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const videoElement = document.getElementById("video-bg");

    if (videoElement) {
      videoElement.load();
      videoElement.onloadeddata = () => setLoading(false);
    }
  }, [currentVideoIndex]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false);
    }, 500);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 500);
  };

  return (
    <section className="hero">
      {/* Video Background with Smooth Fade Transition */}
      <div className="video-container">
        {loading && <div className="loading-spinner"></div>}

        <video
          id="video-bg"
          key={currentVideoIndex}
          autoPlay
          loop
          muted
          className={`video-bg ${isFading ? "video-hidden" : ""}`}
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navigation Buttons */}
      <button className="prev-button" onClick={handlePrev}>❮</button>
      <button className="next-button" onClick={handleNext}>❯</button>
    </section>
  );
};

export default HeroSection;