import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, Users, Compass, Utensils, Sparkles, Heart, Briefcase, Code2, BookOpen, PenTool 
} from 'lucide-react';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import Magnetic from '../common/magnetic';
import { motion } from 'motion/react';

export default function HobbiesAndCommunity() {
  const { personal } = portfolioData;

  const renderExtraIcon = (iconName) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase size={22} color="var(--green-primary)" />;
      case 'Code2': return <Code2 size={22} color="var(--green-primary)" />;
      case 'GraduationCap': return <GraduationCap size={22} color="var(--green-primary)" />;
      case 'Users': return <Users size={22} color="var(--green-primary)" />;
      case 'BookOpen': return <BookOpen size={22} color="var(--green-primary)" />;
      case 'PenTool': return <PenTool size={22} color="var(--green-primary)" />;
      default: return <Sparkles size={22} color="var(--green-primary)" />;
    }
  };

  return (
    <section className="section" id="community" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section 1: Beyond Day-to-Day Engineering */}
        <div className="section-header">
          <Eyebrow>Community & Strategic Impact</Eyebrow>
          <RevealText
            as="h2"
            lines={["Beyond My Day-to-Day", "Engineering"]}
            className="section-title"
          />
          <p className="section-desc">
            Consulting, community contribution, technical knowledge sharing, and initiatives that help engineers build better technology.
          </p>
        </div>

        <div className="community-grid">
          {personal.extraCurricular.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="community-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="community-icon-wrapper">
                {renderExtraIcon(item.icon)}
              </div>
              <div className="community-meta">
                <span className="community-role-badge">{item.tag || item.role}</span>
                <h3 className="community-title">{item.title}</h3>
                <p className="community-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner Showcase */}
        <motion.div 
          className="personal-banner-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="personal-banner-img-wrap">
            <img 
              src={personal.banner} 
              alt="AI Platform Engineer" 
              className="personal-banner-img"
            />
          </div>
          <div className="personal-banner-text">
            <span className="label" style={{ color: 'var(--green-primary)', display: 'block', marginBottom: '8px' }}>
              // Engineering Philosophy
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              AI Platform Engineer: Where Cloud Automation Meets Intelligent AI
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
              "Engineering isn't solely about running machines; it's about architecting self-healing ecosystems, empowering engineering squads, and cultivating a growth mindset across the tech community."
            </p>
          </div>
        </motion.div>

        {/* Section 2: Hobbies & Beyond Engineering */}
        <div className="hobbies-sub-section">
          <div className="section-header">
            <Eyebrow>Life Beyond Engineering</Eyebrow>
            <RevealText
              as="h2"
              lines={["Passions, Mindfulness &", "Lifelong Hobbies"]}
              className="section-title"
            />
            <p className="section-desc">
              From mountain hiking and mindful meditation to systems engineering literature and outdoor exploration.
            </p>
          </div>

          <div className="hobbies-grid">
            {personal.hobbies.map((h, idx) => (
              <motion.div 
                key={idx} 
                className="hobby-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="hobby-img-wrapper">
                  <span className="plogo__mark plogo__mark--tl">+</span>
                  <span className="plogo__mark plogo__mark--tr">+</span>
                  <span className="plogo__mark plogo__mark--bl">+</span>
                  <span className="plogo__mark plogo__mark--br">+</span>
                  <img src={h.image} alt={h.name} className="hobby-img" />
                  <span className="hobby-tag-overlay">{h.tag}</span>
                </div>
                
                <div className="hobby-info">
                  <h3 className="hobby-name" style={{ marginBottom: '8px' }}>{h.name}</h3>
                  <p className="hobby-desc">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
