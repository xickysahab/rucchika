import React, { useState, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import useSmoothScroll from './common/use_smooth_scroll';
import Cursor from './common/cursor';
import ScrollProgress from './common/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Snapshot from './components/Snapshot';
import Expertise from './components/Expertise';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import HobbiesAndCommunity from './components/HobbiesAndCommunity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  useSmoothScroll();

  const [theme, setTheme] = useState('light');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-layout">
        <ScrollProgress />
        <Cursor />

        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme} 
          onOpenResume={() => setIsResumeOpen(true)} 
        />

        <main id="main">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <Snapshot />
          <Expertise />
          <Projects />
          <TechStack />
          <Certifications />
          <Experience />
          <Blog />
          <HobbiesAndCommunity />
          <Contact onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        <Footer />

        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />
      </div>
    </MotionConfig>
  );
}
