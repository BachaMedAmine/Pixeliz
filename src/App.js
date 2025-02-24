import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import HeroSection from "./components/HeroSection";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JoinForm from "./pages/JoinForm";
import MapComponent from "./components/MapSection";
import "leaflet/dist/leaflet.css";

// Smooth Scroll to Sections
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home Page (Only Home Has Video Background) */}
        <Route
          path="/"
          element={
            <div>
              <VideoBackground />
              <section id="home">
                <HeroSection />
              </section>

              {/* Services Section */}
              <section id="services">
                <Services />
              </section>

              {/* Gallery Section */}
              <section id="gallery">
                <Gallery />
              </section>

              {/* Map Section Below Services */}
              <section id="map">
                <MapComponent />
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
    </Router>
  );
}

export default App;