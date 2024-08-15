import React from 'react';
import '../styles.css';
import QuesLogo1 from "../assets/QuesLogo1.svg";
import wavePattern from "../assets/Mask group.png";

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${wavePattern})` }}>
      <div className="hero-content">
        <img src={QuesLogo1} alt="Ques.AI" className="logo" />
        <h1>Your podcast will no longer be just a hobby.</h1>
        <p>Supercharge Your Distribution using our AI assistant!</p>
      </div>
    </div>
  );
};

export default HeroSection;