import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import GamesSection from './components/GamesSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <main className="main-content">
        <GamesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
