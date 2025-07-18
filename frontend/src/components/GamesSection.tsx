import { useState } from 'react';
import './GamesSection.css';

const PrivacyPolicyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2>Snake Game – Privacy Policy</h2>
          <p className="modal-date">Last updated: July 7, 2025</p>
          
          <p>This game respects your privacy. We do not collect, store, or share any personal information.</p>
          
          <h3>What we collect</h3>
          <p>Snake Game does not collect any personally identifiable information (PII). However, the game may use Apple's CloudKit to store your in-game data, such as:</p>
          <ul>
            <li>Your nickname (if entered)</li>
            <li>Your game score or leaderboard ranking</li>
          </ul>
          <p>This data is stored only on your iCloud account and is not shared with us or any third party.</p>
          
          <h3>Third-party services</h3>
          <p>Snake Game does not use any third-party advertising, analytics, or tracking services.</p>
          
          <h3>Children's privacy</h3>
          <p>Snake Game is suitable for all ages and does not knowingly collect data from children under 13.</p>
          
          <h3>Contact</h3>
          <p>If you have any questions about this privacy policy, feel free to contact us at:</p>
          <p><a href="mailto:justmarrty@gmail.com">justmarrty@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

const GamesSection = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <section id="games" className="games-section">
      <h2 className="section-title">Available games & apps</h2>
      <div className="section-line"></div>
      
      <div className="games-grid">
        <div className="game-card">
          <div className="game-content">
            <h3 className="game-title">Snake Game: Reborn</h3>
            <p className="game-description">
              Experience the legendary Snake game brought to life with a modern twist. 
              Retro visuals, addictive gameplay, and iCloud-powered leaderboards.
            </p>
            <div className="game-features">
              <span className="feature-tag">Retro Gaming</span>
              <span className="feature-tag">iCloud Leaderboards</span>
              <span className="feature-tag">No Ads</span>
            </div>
            <div className="game-images">
              <img src="/images/qr-code.png" alt="QR kód" className="qr-image" />
              <a href="https://apple.co/4nPHAkI" target="_blank" rel="noopener noreferrer">
                <img src="/images/black.svg" alt="Black logo" className="black-image" />
              </a>
            </div>
            <div className="game-links">
              <button 
                className="privacy-link"
                onClick={() => setIsPrivacyModalOpen(true)}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
        
        <div className="coming-soon-card">
          <div className="game-content">
            <h3 className="game-title">More coming soon</h3>
            <p className="game-description">
              I'm working on exciting new games and apps for iOS. 
              Stay tuned for updates and new releases!
            </p>
          </div>
        </div>
      </div>

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </section>
  );
};

export default GamesSection;
