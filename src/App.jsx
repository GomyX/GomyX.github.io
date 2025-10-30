import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default App;
