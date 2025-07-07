import './ContactSection.css';

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <h2 className="section-title">Get in touch</h2>
    <div className="section-line"></div>
    
    <div className="contact-grid">
      <div className="contact-card">
        <div className="contact-content">
          <p className="contact-text">
            Have questions about my games or want to collaborate? 
            I'd love to hear from you!
          </p>
          <div className="contact-links">
            <a 
              href="mailto:justmarrty@gmail.com" 
              className="contact-link email-link"
            >
              <span className="link-text">Email</span>
            </a>
            <a 
              href="https://github.com/just-marrty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link github-link"
            >
              <span className="link-text">GitHub</span>
            </a>
            <a 
              href="https://www.moje-webovka.cz/index.en.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link github-link"
            >
              <span className="link-text">My website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection; 