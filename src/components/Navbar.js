import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleScroll = (event, id) => {
    event.preventDefault(); // Prevents default anchor behavior
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
        <li><a href="#services" onClick={(e) => handleScroll(e, "services")}>Services</a></li>
        <li><a href="#gallery" onClick={(e) => handleScroll(e, "gallery")}>Gallery</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;