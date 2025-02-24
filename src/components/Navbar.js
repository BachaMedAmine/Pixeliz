import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import logo from "../assets/images/PixelizLogo.jpg";

const Navbar = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="nav-logo">
          <img src={logo} alt="Pixeliz Logo" />
        </div>

        {/* Navigation Links in the center */}
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

        {/* Contact Info on the right */}
        <div className="contact-info">
          <span className="icon">📞</span> +216-97 111 001
          <span className="icon">✉️</span> pixeliz.tunis@gmail.com
        </div>
      </nav>
    </div>
  );
};

export default Navbar;