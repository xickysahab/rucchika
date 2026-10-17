import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, MediumIcon } from './SocialIcons';
import Magnetic from '../common/magnetic';

export default function Footer() {
  const { personal } = portfolioData;
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div className="brand-icon" style={{ width: '32px', height: '32px', fontSize: '0.8125rem' }}>RB</div>
            <div>
              <strong style={{ color: 'var(--text-headline)', display: 'block', fontSize: '0.9375rem', letterSpacing: '-0.02em' }}>{personal.name}</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '-0.01em' }}>{personal.targetRole}</span>
            </div>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.8125rem', color: 'var(--text-secondary)' }} className="footer-nav-links">
            <Link to="/" className="nav-link">Overview</Link>
            <Link to="/expertise" className="nav-link">Expertise</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/tech-stack" className="nav-link">Tech Stack</Link>
            <Link to="/certifications" className="nav-link">Certifications</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Magnetic strength={0.25}>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub" style={{ width: '38px', height: '38px' }}>
                <GithubIcon size={15} />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn" style={{ width: '38px', height: '38px' }}>
                <LinkedinIcon size={15} />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="WhatsApp" title="Chat on WhatsApp (+91 83192 95211)" style={{ width: '38px', height: '38px' }}>
                <WhatsappIcon size={15} />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a href={personal.medium || "https://medium.com/@rucchikabhatia"} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Medium" title="Read on Medium (@rucchikabhatia)" style={{ width: '38px', height: '38px' }}>
                <MediumIcon size={15} />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <button onClick={scrollToTop} className="btn-icon" title="Back to top" aria-label="Back to top" style={{ width: '38px', height: '38px' }}>
                <ArrowUp size={15} />
              </button>
            </Magnetic>
          </div>
        </div>

        <div style={{ 
          marginTop: '32px', 
          paddingTop: '24px', 
          borderTop: '1px solid var(--border-light)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '12px', 
          fontSize: '0.75rem', 
          color: 'var(--text-muted)',
          letterSpacing: '-0.01em'
        }}>
          <div>
            © {new Date().getFullYear()} {personal.name} • Cloud, AI & Platform Engineering
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--green-primary)' }}>
              ● {time}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
