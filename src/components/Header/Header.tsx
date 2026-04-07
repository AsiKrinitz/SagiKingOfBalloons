import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="global-header">
      <Link to="/" className="logo-placeholder">
        {/* Placeholder ready for your logo image */}
      </Link>
    </header>
  );
}
