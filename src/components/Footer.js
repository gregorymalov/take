import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="ONE TAKE SOCIETY" className="footer-logo-img" />
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contactos</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">👤</span>
                <div>
                  <p className="contact-label">Manager de casting</p>
                  <p className="contact-value">María Ivanova</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <p className="contact-label">Telegram / WhatsApp</p>
                  <a href="https://wa.me/79991234567" className="contact-link">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:casting@onetakesociety.com" className="contact-link">
                    casting@onetakesociety.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Redes Sociales</h3>
            <div className="social-links">
              <a href="https://instagram.com/onetakesociety" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
                Instagram
              </a>
              <a href="https://tiktok.com/@onetakesociety" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">🎵</span>
                TikTok
              </a>
              <a href="https://youtube.com/@onetakesociety" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">▶️</span>
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 One Take Society. Todos los derechos reservados.
          </p>
          <div className="footer-links">
            <a href="#privacy">Política de privacidad</a>
            <span className="separator">•</span>
            <a href="#terms">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
