import React from 'react';
import heroImage from '../assets/hero.svg';
import "../styles/HeroSection.css";
import img1 from '../assets/button01.svg';
import img2 from '../assets/button02.svg';
import img3 from '../assets/button03.svg';
import img4 from '../assets/button04.svg';
import img5 from '../assets/button05.svg';
import img6 from '../assets/button06.svg';

const HeroSection = () => {
  return (
    <section className="hero">
      <h2>Welcome to My Landing Page</h2>
      <p>This is a placeholder for the main message or text.</p>
      <img src={heroImage} alt="Hero" className="hero-image" />
        
      <div className="hero-text-below">
        <h3>
          Here is some additional
        </h3>
           <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

          {/* New image gallery */}
      <div className="image-gallery">
        <img src={img1} alt="Gallery 1" />
        <img src={img2} alt="Gallery 2" />
        <img src={img3} alt="Gallery 3" />
        <img src={img4} alt="Gallery 4" />
        <img src={img5} alt="Gallery 5" />
        <img src={img6} alt="Gallery 6" />
      </div>
    </section>
  );
};

export default HeroSection;







