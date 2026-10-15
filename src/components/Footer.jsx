import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="brand-icon" style={{ width: '32px', height: '32px', fontSize: '0.8125rem' }}>RB</div>
            <div>
              <strong style={{ color: 'var(--text-headline)', display: 'block', fontSize: '0.9375rem', letterSpacing: '-0.02em' }}>{personal.name}</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '-0.01em' }}>{personal.targetRole}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '0.8125rem', color: 'var(--text-secondary)' }} className="footer-nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#expertise" className="nav-link">Expertise</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#stack" className="nav-link">Stack</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#community" className="nav-link">Community</a>
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
            <span>Lenis + Motion Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
