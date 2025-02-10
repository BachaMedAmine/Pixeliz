import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import HeroSection from "./components/HeroSection";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JoinForm from "./pages/JoinForm";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;