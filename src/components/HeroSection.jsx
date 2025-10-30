import './HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Explore my journey through an interactive 3D timeline
        </p>
        <p className="hero-description">
          Discover my professional experience, research projects, competitions, and volunteer work
          in an engaging visual format.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
