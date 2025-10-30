import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Portfolio</div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
              activeClass="active"
            >
              Experience
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
