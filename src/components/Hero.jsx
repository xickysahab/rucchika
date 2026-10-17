import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Layers, GitBranch, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsappIcon, MediumIcon } from './SocialIcons';
import RevealText from '../common/reveal_text';
import Eyebrow from '../common/eyebrow';
import Magnetic from '../common/magnetic';
import Counter from '../common/counter';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  const badges = [
    "AWS", "Azure", "GCP", "Kubernetes", "Terraform", "GraphTalk", "GenAI & MLOps"
  ];

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid-layout">
          <div className="hero-content">
            <div className="hero-eyebrow-row">
              <Eyebrow className="hero-eyebrow">Leadership & Multi-Cloud Architecture</Eyebrow>
              <div className="hero-status-pill">
                <span className="brand-status-dot"></span>
                <span>{personal.targetRole}</span>
              </div>
            </div>

            <RevealText
              as="h1"
              lines={[
                "Engineering the Future of",
                { text: "Cloud, AI & Intelligent Platforms", accent: true }
              ]}
              className="hero-headline"
              trigger="mount"
              delay={0.1}
            />

            <p className="hero-subheadline">
              {personal.subheadline}
            </p>

            <div className="hero-badge-strip">
              {badges.map((b, idx) => (
                <Magnetic key={idx} strength={0.2}>
                  <span className={`badge-item ${idx < 3 ? 'active' : ''}`}>
                    {idx === 0 && <Layers size={13} color="var(--green-primary)" />}
                    {idx === 3 && <GitBranch size={13} color="var(--green-primary)" />}
                    {idx === 5 && <Sparkles size={13} color="var(--green-primary)" />}
                    <span>{b}</span>
                  </span>
                </Magnetic>
              ))}
            </div>

            <div className="hero-cta-group">
              <Magnetic strength={0.25} className="hero-cta-item">
                <Link to="/projects" className="btn btn-primary" id="hero-explore-projects-btn">
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </Link>
              </Magnetic>

              <Magnetic strength={0.25} className="hero-cta-item">
                <button className="btn btn-outline" onClick={onOpenResume} id="hero-download-resume-btn">
                  <Download size={16} />
                  <span>Resume</span>
                </button>
              </Magnetic>

              <Magnetic strength={0.25} className="hero-cta-item">
                <Link to="/contact" className="btn btn-secondary" id="hero-contact-btn">
                  <span>Let's Connect</span>
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Profile Card */}
          <div className="hero-profile-card">
            <div className="profile-img-wrapper">
              <img 
                src={personal.avatar} 
                alt={personal.name} 
                className="profile-img"
              />
              <div className="profile-status-badge">
                <span className="brand-status-dot"></span>
                <span>Open to Roles & Consulting</span>
              </div>
            </div>

            <div className="profile-details">
              <h3 className="profile-name">{personal.name}</h3>
              <p className="profile-role">{personal.role}</p>
              
              <div className="profile-meta-tags">
                <span className="profile-tag">Cloud Architect</span>
                <span className="profile-tag">AI Platform Lead</span>
                <span className="profile-tag">DevOps Practitioner</span>
                <span className="profile-tag profile-tag--accent">GraphTalk Product Developer</span>
              </div>

              <div className="profile-social-strip">
                <Magnetic strength={0.3} className="profile-social-item">
                  <a 
                    href={personal.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-social-link"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon size={15} />
                    <span>LinkedIn</span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.3} className="profile-social-item">
                  <a 
                    href={personal.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-social-link"
                    title="GitHub Repository"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.3} className="profile-social-item">
                  <a 
                    href={personal.whatsapp || "https://wa.me/918319295211"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-social-link profile-social-whatsapp"
                    title="WhatsApp: +91 83192 95211"
                  >
                    <WhatsappIcon size={15} />
                    <span>WhatsApp</span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.3} className="profile-social-item">
                  <a 
                    href={personal.medium || "https://medium.com/@rucchikabhatia"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-social-link"
                    title="Medium Blog: @rucchikabhatia"
                  >
                    <MediumIcon size={15} />
                    <span>Medium</span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>

        {/* Tabular Stats Grid (Pixoraa proof strip style) */}
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">
              <Counter value={99} />.99<span className="stat-unit">%</span>
            </span>
            <span className="stat-label">Uptime Focus</span>
            <span className="stat-desc">Production reliability SLA</span>
          </div>

          <div className="stat-item">
            <span className="stat-value stat-value--text">
              AWS • Azure • GCP
            </span>
            <span className="stat-label">Multi-Cloud</span>
            <span className="stat-desc">Cross-cloud infrastructure</span>
          </div>

          <div className="stat-item">
            <span className="stat-value">
              <Counter value={8} /><span className="stat-unit">+</span>
            </span>
            <span className="stat-label">Platforms Engineered</span>
            <span className="stat-desc">K8s, IDPs & AI serving clusters</span>
          </div>

          <div className="stat-item">
            <span className="stat-value">
              -<Counter value={65} /><span className="stat-unit">%</span>
            </span>
            <span className="stat-label">Deployment Cycle</span>
            <span className="stat-desc">CI/CD & GitOps velocity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
