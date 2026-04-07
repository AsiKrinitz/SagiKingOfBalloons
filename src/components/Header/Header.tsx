import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../../images/Logo/SagiLogoImage.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="global-header">
      <button className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="תפריט ניווט">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav className={`global-nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>השירותים שלי</Link>
        <Link to="/prices" className="nav-link" onClick={() => setIsMenuOpen(false)}>מחירון</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>מי אני</Link>
      </nav>
      
      <Link to="/" className="logo-link">
        <img src={logoImage} alt="שגיא מלך הבלונים" className="header-logo" />
      </Link>
    </header>
  );
}
