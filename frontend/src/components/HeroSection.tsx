import './HeroSection.css';

const HeroSection = () => {
  const scrollToGames = () => {
    const gamesSection = document.getElementById('games');
    if (gamesSection) {
      const navbarHeight = 80; // Výška navbaru
      const extraOffset = 50; // Dodatečný offset pro lepší viditelnost
      const elementTop = gamesSection.offsetTop - navbarHeight - extraOffset;
      
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">iOS Games & Apps</h1>
        <p className="hero-subtitle">
          Crafting engaging mobile experiences for iOS
        </p>
        <div className="scroll-indicator" onClick={scrollToGames}>
          <div className="scroll-text">Tap for scroll</div>
          <div className="scroll-arrow">▼</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 