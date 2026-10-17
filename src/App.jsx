import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import useSmoothScroll from './common/use_smooth_scroll';
import Cursor from './common/cursor';
import ScrollProgress from './common/ScrollProgress';
import ScrollToTop from './common/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

// Dedicated Page Views
import HomePage from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import ProjectsPage from './pages/ProjectsPage';
import TechStackPage from './pages/TechStackPage';
import CertificationsPage from './pages/CertificationsPage';
import ExperiencePage from './pages/ExperiencePage';
import BlogPage from './pages/BlogPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';

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
    <HashRouter>
      <ScrollToTop />
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
            <Routes>
              <Route path="/" element={<HomePage onOpenResume={() => setIsResumeOpen(true)} />} />
              <Route path="/expertise" element={<ExpertisePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/tech-stack" element={<TechStackPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/contact" element={<ContactPage onOpenResume={() => setIsResumeOpen(true)} />} />
              <Route path="*" element={<HomePage onOpenResume={() => setIsResumeOpen(true)} />} />
            </Routes>
          </main>

          <Footer />

          <ResumeModal 
            isOpen={isResumeOpen} 
            onClose={() => setIsResumeOpen(false)} 
          />
        </div>
      </MotionConfig>
    </HashRouter>
  );
}
