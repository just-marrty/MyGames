import { useState } from 'react';
import './Footer.css';

const PrivacyPolicyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2>MyGames - Privacy Policy</h2>
          <p className="modal-date">Last updated: July 7, 2025</p>
          
          <p>Your privacy is important to us.</p>
          <p>This website does not collect, store, or process any personal data.</p>
          
          <h3>What we collect</h3>
          <p>We do not collect any information from visitors to this site.</p>
          
          <h3>Cookies</h3>
          <p>This site does not use cookies or any tracking technologies.</p>
          
          <h3>Analytics</h3>
          <p>We do not use Google Analytics or any other analytics service.</p>
          
          <h3>Third-party services</h3>
          <p>This site does not use third-party tools, embeds, or advertising.</p>
          
          <h3>Contact</h3>
          <p>If you have any questions about this privacy policy, you can contact the site owner at:</p>
          <p><a href="mailto:justmarrty@gmail.com">justmarrty@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 <a href="https://www.moje-webovka.cz/index.en.html" target="_blank" rel="noopener noreferrer" className="footer-link">just_marrty</a> Indie Game & Web Developer
        </p>
        <p className="footer-subtext">
          Crafting engaging mobile experiences
        </p>
        <div className="footer-links">
          <button 
            className="footer-privacy-link"
            onClick={() => setIsPrivacyModalOpen(true)}
          >
            Privacy Policy
          </button>
        </div>
      </div>
      
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer; 