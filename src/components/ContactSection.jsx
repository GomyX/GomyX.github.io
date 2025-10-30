import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="contact-links">
          <a href="mailto:contact@example.com" className="contact-link">
            <span className="contact-icon">✉️</span>
            Email Me
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">💻</span>
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">💼</span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
