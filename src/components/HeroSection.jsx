import React from 'react';
import heroImage from '../assets/hero.svg';
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h2>Welcome to My Landing Page</h2>
      <p>This is a placeholder for the main message or text.</p>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </section>
  );
};

export default HeroSection;









