import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import HeroSection from "./components/HeroSection";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JoinForm from "./pages/JoinForm";

import MapComponent from "./components/MapSection"; // Import MapComponent
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS for proper rendering

// import IntroScreen from "./components/IntroScreen"; // Commented out for now

function App() {
  // const [showIntro, setShowIntro] = useState(true);

  // // Auto-hide intro after 28 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowIntro(false);
  //   }, 28000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Router>
      {/* {showIntro ? (
        <IntroScreen onSkip={() => setShowIntro(false)} />
      ) : ( */}
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <div>
                <VideoBackground />
                <Navbar />

                {/* Home Section */}
                <section id="home">
                  <HeroSection />
                </section>

                {/* Services Section */}
                <section id="services">
                  <Services />
                </section>
                {/* Map Section Below Services */}
                <section id="map">
                   <MapComponent />
                </section>
                {/* Gallery Section */}
                <section id="gallery">
                  <Gallery />
                </section>

                {/* About Section */}
                <section id="about">
                  <About />
                </section>

                {/* Contact Section */}
                <section id="contact">
                  <Contact />
                </section>
              </div>
            }
          />

          {/* Separate Join Page */}
          <Route path="/join" element={<JoinForm />} />
        </Routes>
      {/* )} */}
    </Router>
  );
}

export default App;