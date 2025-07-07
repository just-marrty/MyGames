import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Výška navbaru
      const extraOffset = 50; // Dodatečný offset pro lepší viditelnost
      const elementTop = section.offsetTop - navbarHeight - extraOffset;
      
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src="/images/logo-justmarrty.png" alt="just_marrty" className="brand-logo" />
        </div>
        <div className="navbar-links">
          <a 
            href="#home" 
            className="nav-link" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a 
            href="#games" 
            className="nav-link" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('games');
            }}
          >
            Games
          </a>
          <a 
            href="#about" 
            className="nav-link" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="nav-link" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 