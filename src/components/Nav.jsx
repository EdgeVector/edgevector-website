import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/technology', label: 'Technology' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link to="/" className="nav-brand">
        <span className="nav-brand-text">Edge Vector</span>
      </Link>
      <span className="nav-spacer" />
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? '\u2715' : '\u2630'}
      </button>
      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(link => (
          <Link key={link.to} to={link.to} className={`link-btn${link.to === pathname ? ' link-btn-active' : ''}`} onClick={() => setMenuOpen(false)}>[{link.label}]</Link>
        ))}
        <a href="https://github.com/EdgeVector" target="_blank" rel="noreferrer" className="link-btn">[GitHub]</a>
        <a href="mailto:contact@edgevector.org" className="link-btn" onClick={() => setMenuOpen(false)}>[Contact]</a>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
