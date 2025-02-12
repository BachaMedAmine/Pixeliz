import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/PixelizLogo.jpg"; // Adjust the path if needed

const Navbar = () => {
  return (
    <div>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="contact-info">
          
          <span className="icon">📞</span> +216-97 111 001
          <span className="icon">✉️</span> pixeliz.tunis@gmail.com
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="nav-logo">
          <img src={logo} alt="Pixeliz Logo" />
        </div>

        {/* Navigation Links in the center */}
        <div className="nav-center">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link to="/join">Join Us</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;