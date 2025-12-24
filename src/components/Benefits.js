import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: '🎬',
      title: 'Participación en la serie',
      description: 'Papel en un sitcom moderno con perspectiva de proyecto multi-temporada'
    },
    {
      icon: '📈',
      title: 'Crecimiento mediático',
      description: 'Promoción en redes sociales, trabajo con audiencia, desarrollo de marca personal'
    },
    {
      icon: '🎵',
      title: 'Producción musical',
      description: 'Grabación de tracks, filmación de videoclips, estudio profesional'
    },
    {
      icon: '💎',
      title: 'Trabajo de imagen',
      description: 'Estilistas, maquilladores, fotógrafos — creación de imagen única'
    },
    {
      icon: '🤝',
      title: 'Perspectiva de contrato',
      description: 'Colaboración oficial con centro de producción'
    },
    {
      icon: '🌟',
      title: 'Equipo profesional',
      description: 'Trabajo con directores, productores y creativos experimentados'
    }
  ];

  return (
    <section className="benefits section">
      <div className="container">
        <h2 className="section-title">
          Qué <span className="neon-cyan">obtienes</span>
        </h2>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <div className="benefit-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
