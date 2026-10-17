import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from '../common/magnetic';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { num: '01', label: 'Overview', to: '/' },
    { num: '02', label: 'Expertise', to: '/expertise' },
    { num: '03', label: 'Projects', to: '/projects' },
    { num: '04', label: 'Tech Stack', to: '/tech-stack' },
    { num: '05', label: 'Certifications', to: '/certifications' },
    { num: '06', label: 'Experience', to: '/experience' },
    { num: '07', label: 'Blog', to: '/blog' },
    { num: '08', label: 'Community', to: '/community' },
    { num: '09', label: 'Contact', to: '/contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="brand-logo" id="nav-brand-logo" onClick={() => setMobileOpen(false)}>
            <div className="brand-icon">RB</div>
            <div>
              <span style={{ fontSize: '0.9375rem', fontWeight: 800, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                Rucchika Bhatia
              </span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.625rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap'
              }}>
                <span className="brand-status-dot"></span>
                <span>AI Platform Engineer</span>
              </div>
            </div>
          </Link>

          <nav className="nav-links">
            {navItems.map((item) => (
              <NavLink 
                key={item.to} 
                to={item.to} 
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                end={item.to === '/'}
              >
                <span className="nav__swap">
                  <span className="nav__text nav__text--base">{item.label}</span>
                  <span className="nav__text nav__text--alt" aria-hidden="true">{item.label}</span>
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Magnetic strength={0.3}>
              <button
                className="btn-icon"
                onClick={toggleTheme}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                id="theme-toggle-btn"
                aria-label="Toggle Theme"
                style={{ width: '38px', height: '38px' }}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </Magnetic>

            <Magnetic strength={0.25}>
              <button
                className="btn btn-primary nav-resume-desktop"
                onClick={onOpenResume}
                id="nav-resume-btn"
                style={{ padding: '8px 20px', fontSize: '0.8125rem' }}
              >
                <FileText size={14} />
                <span>Resume</span>
              </button>
            </Magnetic>

            <button
              className="btn-icon mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              id="mobile-menu-toggle-btn"
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              style={{ width: '38px', height: '38px' }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen / Dropdown Overlay (Pixoraa style) */}
        {mobileOpen && (
          <div className="mobile-nav-menu">
            <div className="mobile-nav-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                  end={item.to === '/'}
                >
                  <span className="mobile-nav-num">{item.num} //</span>
                  <span className="mobile-nav-txt">{item.label}</span>
                  <ArrowUpRight size={18} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                </NavLink>
              ))}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
              <button
                className="btn btn-primary"
                onClick={() => { setMobileOpen(false); onOpenResume(); }}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FileText size={15} />
                <span>View Executive Resume (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
