import './AboutSection.css';

const AboutSection = () => (
  <section id="about" className="about-section">
    <h2 className="section-title">About me</h2>
    <div className="section-line"></div>
    
    <div className="about-grid">
      <div className="about-card">
        <div className="about-content">
          <p className="about-text">
            Hi, I'm Martin, a full stack developer passionate about creating modern and functional digital experiences.
            I specialize in building custom websites and web applications tailored to your needs
            — from clean and responsive business sites to simple interactive platforms.
          </p>
          <p className="about-text">
            In addition to web development, I also design and develop mobile games and applications for iOS.
            This page is dedicated to my work in iOS & Unity development.
          </p>
          <div className="skills">
            <span className="skill-tag">iOS Development</span>
            <span className="skill-tag">Unity Development</span>
            <span className="skill-tag">Web&Apps Development</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 