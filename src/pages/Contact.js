import React from "react";
import "../styles/Contact.css"; // Ensure you create a Contact.css file for styling

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-nous</h2>
      <p><strong>Email:</strong> <a href="pixeliz.tunis@gmail.com">pixeliz.tunis@gmail.com</a></p>
      <p><strong>Téléphone:</strong> <a href="tel:+21697111001">+216 97 111 001</a></p>
      <p><strong>Adresse:</strong> Tunis, Tunisia</p>
    </section>
  );
};

export default Contact;