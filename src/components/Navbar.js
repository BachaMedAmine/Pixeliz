import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleScroll = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <li><Link to="/join">Join Us</Link></li> {/* Navigates to a separate page */}
      </ul>
    </nav>
  );
};

export default Navbar;