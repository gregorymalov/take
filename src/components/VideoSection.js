import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const scrollToForm = () => {
    document.getElementById('casting-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="video-section section">
      <div className="container">
        <h2 className="section-title">
          <span className="neon-cyan">Video invitación</span> de One Take Society
        </h2>
        <p className="section-subtitle">
          Míralo antes de enviar tu solicitud
        </p>
        
        <div className="video-container">
          <div className="video-frame">
            <video 
              className="video-player"
              controls
              poster="/images/video-poster.jpg"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </div>

        <button className="cta-button" onClick={scrollToForm}>
          Quiero ir al casting
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
