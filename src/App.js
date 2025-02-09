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
      <section id="home"><HeroSection /></section>
      <section id="services"><Services /></section>
      <section id="gallery"><Gallery /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;