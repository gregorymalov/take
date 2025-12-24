import React, { useState } from 'react';
import './CastingForm.css';

const CastingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    social: '',
    whatsapp: '',
    activities: [],
    videoLink: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const activityOptions = [
    'Canto',
    'Bailo',
    'Toco instrumentos',
    'Creo contenido',
    'Actuación',
    'Otro'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckbox = (activity) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Здесь будет интеграция с Google Sheets или CRM
    console.log('Form submitted:', formData);
    
    setSubmitted(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        age: '',
        city: '',
        social: '',
        whatsapp: '',
        activities: [],
        videoLink: ''
      });
    }, 3000);
  };

  return (
    <section id="casting-form" className="casting-form section">
      <div className="container">
        <h2 className="section-title">
          Formulario de <span className="neon-pink">casting</span>
        </h2>
        <p className="form-subtitle">
          Completa el formulario y nos pondremos en contacto contigo en 24 horas
        </p>

        {!submitted ? (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="¿Cómo te llamas?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Edad *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="18"
                  placeholder="18+"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="city">Ciudad *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="¿Dónde vives?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="social">Instagram o TikTok *</label>
              <input
                type="url"
                id="social"
                name="social"
                value={formData.social}
                onChange={handleChange}
                required
                placeholder="Enlace a tu perfil"
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp *</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                placeholder="+__ (___) ___-__-__"
              />
            </div>

            <div className="form-group">
              <label>¿Qué haces? *</label>
              <div className="checkbox-group">
                {activityOptions.map(activity => (
                  <label key={activity} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.activities.includes(activity)}
                      onChange={() => handleCheckbox(activity)}
                    />
                    <span>{activity}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="videoLink">Enlace a video (opcional)</label>
              <input
                type="url"
                id="videoLink"
                name="videoLink"
                value={formData.videoLink}
                onChange={handleChange}
                placeholder="YouTube, TikTok, Instagram..."
              />
              <small>¡Muéstrate! Esto aumentará tus posibilidades</small>
            </div>

            <button type="submit" className="cta-button submit-button">
              Enviar solicitud
            </button>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>¡Gracias!</h3>
            <p>El manager se pondrá en contacto contigo pronto</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CastingForm;
