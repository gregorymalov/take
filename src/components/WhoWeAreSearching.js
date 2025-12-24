import React from 'react';
import './WhoWeAreSearching.css';

const WhoWeAreSearching = () => {
  return (
    <section className="who-searching section">
      <div className="container">
        <h2 className="section-title">
          A quién <span className="neon-pink">buscamos</span>
        </h2>
        
        <div className="search-info">
          <p className="main-text">
            Estamos formando un <span className="highlight">grupo musical</span> para el sitcom
          </p>
          <p className="group-composition">
            <span className="neon-cyan">4 chicas</span> + <span className="neon-yellow">1 chico</span> (18+)
          </p>
        </div>

        <div className="group-image-container">
          <img src="/images/groupe.jpg" alt="Grupo musical" className="main-group-image" />
        </div>

        <p className="additional-text">
          También consideramos otros <span className="neon-cyan">jóvenes talentosos</span>
        </p>
      </div>
    </section>
  );
};

export default WhoWeAreSearching;
