import React from "react";
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import HeroSection from "./components/HeroSection";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <VideoBackground />
      <Navbar />
       {/* Home Section */}
       <section id="home"><HeroSection /></section>

{/* Services Section */}
<section id="services"><Services /></section>

{/* Gallery Section (Prevent Empty Space) */}
<section id="gallery">
  <Gallery />
  <div className="section-placeholder">Gallery Section</div>
</section>

{/* About Section (Prevent Empty Space) */}
<section id="about">
  <About />
  <div className="section-placeholder">About Section</div>
</section>

{/* Contact Section (Prevent Empty Space) */}
<section id="contact">
  <Contact />
  <div className="section-placeholder">Contact Section</div>
</section>
    </div>
  );
}

export default App;