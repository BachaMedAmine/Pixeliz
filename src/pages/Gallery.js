import React from "react";
import { motion } from "framer-motion";
import "../styles/Gallery.css"; // Create this file

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">Our Work</h2>
      <motion.div
        className="gallery-container"
        drag="x"
        dragConstraints={{ right: 0, left: -600 }} // Adjust scrolling area
      >
        {videos.map((video, index) => (
          <motion.div key={index} className="video-card">
            <video src={video} controls />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;