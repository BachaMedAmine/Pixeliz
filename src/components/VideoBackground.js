import React from "react";
import "../styles/VideoBackground.css"; // Make sure this file exists

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/videos/led-animation2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;