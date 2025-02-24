import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import logo from "../assets/images/PixelizLogo.jpg";
import whatsappIcon from "../assets/images/WhatsAppButtonGreenLarge.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* ✅ LOGO (Left Side) */}
        <div className="nav-logo">
          <img src={logo} alt="Pixeliz Logo" />
        </div>

        {/* ✅ NAVIGATION LINKS (Center) */}
        <div className="nav-center">
          <ul>
            <li><ScrollLink to="home" smooth={true} duration={800}>Home</ScrollLink></li>
            <li><ScrollLink to="services" smooth={true} duration={800}>Services</ScrollLink></li>
            <li><ScrollLink to="gallery" smooth={true} duration={800}>Gallery</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={800}>About</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={800}>Contact</ScrollLink></li>
            <li><Link to="/join">Join Us</Link></li>
          </ul>
        </div>

        {/* ✅ CONTACT + SEARCH + CART (Right Side) */}
        <div className="contact-info">
          <span>+216-97 111 001</span>
          <span>pixeliz.tunis@gmail.com</span>
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/21697111001"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-container"
          >
            <img src={whatsappIcon} alt="Chat on WhatsApp" />
            <span>WhatsApp</span>
          </a>

       
         

        
        </div>
      </nav>
    </div>
  );
};

export default Navbar;