import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('casting-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="logo-container">
            <img 
              src="/images/logo.png" 
              alt="ONE TAKE SOCIETY" 
              className="logo"
            />
          </div>
          <h2 className="hero-subtitle">
            Casting para sitcom + proyecto musical
          </h2>
          <h1 className="hero-slogan">
            No solo estás en pantalla.
            <br />
            <span className="neon-pink">Eres parte de la historia</span>
          </h1>
          <button className="cta-button" onClick={scrollToForm}>
            Participar en el casting
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="/images/group-main.png" 
            alt="One Take Society Group"
            className="group-image"
          />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
