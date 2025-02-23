import React from "react";
import "./JoinForm.css"; // Import the CSS file

const JoinForm = () => {
  return (
    <div className="join-page">
      {/* Left: Static Image */}
      <div className="">
        <img src={`${process.env.PUBLIC_URL}/public/LOOP.jpg`} alt="" />
      </div>

      {/* Right: Styled Form */}
      <div className="join-form">
        <h2>Rejoignez-nous</h2>
        <p>Rejoignez notre équipe et explorez un monde de créativité.</p>

        <div className="input-container">
          <input type="text" placeholder="Votre Nom" />
        </div>
        <div className="input-container">
          <input type="email" placeholder="Votre Email" />
        </div>
        <div className="input-container">
          <textarea placeholder="Votre Message"></textarea>
        </div>

        <button className="join-button">Envoyer</button>
      </div>
    </div>
  );
};

export default JoinForm;