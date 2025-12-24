import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/images/char2.jpg" 
              alt="О проекте" 
              className="camera-image"
            />
          </div>
          
          <div className="about-text">
            <h2 className="section-title">
              Sobre el <span className="neon-pink">proyecto</span>
            </h2>
            
            <div className="project-description">
              <div className="description-item">
                <div className="icon">🎬</div>
                <div>
                  <h3>Sitcom de nueva generación</h3>
                  <p>Serie juvenil moderna sobre la vida de un grupo musical, sus altibajos y caídas</p>
                </div>
              </div>

              <div className="description-item">
                <div className="icon">📱</div>
                <div>
                  <h3>Formato TikTok</h3>
                  <p>Episodios cortos ~1 minuto, creados especialmente para redes sociales y audiencia moderna</p>
                </div>
              </div>

              <div className="description-item">
                <div className="icon">🎵</div>
                <div>
                  <h3>Producción musical</h3>
                  <p>Creación de tracks, videoclips y desarrollo completo como proyecto musical</p>
                </div>
              </div>

              <div className="description-item">
                <div className="icon">⭐</div>
                <div>
                  <h3>Equipo profesional</h3>
                  <p>Trabajo con productores experimentados, directores y equipo de profesionales creativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
