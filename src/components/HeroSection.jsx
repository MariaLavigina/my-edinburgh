import React from 'react';
import heroImage from '../assets/hero.svg';



const HeroSection = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Welcome to My Landing Page</h2>
      <p>This is a placeholder for the main message or text.</p>
  <img
  src={heroImage}
  alt="Hero"
  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
/>
    </section>
  );
};

export default HeroSection;



