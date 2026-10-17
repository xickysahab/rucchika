import React from 'react';
import { 
  X, Download, Mail, Phone, ExternalLink, 
  Award, GraduationCap, Briefcase, Cpu, Layers, Sparkles, CheckCircle2,
  Calendar, MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, WhatsappIcon } from './SocialIcons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal, experience, additionalExperience, education, certifications, technicalSkillsCategories } = portfolioData;

  const handleSave = () => {
    const originalTitle = document.title;
    document.title = "Rucchika_Bhatia_Resume";
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1500);
  };

  return (
    <div className="modal-overlay resume-modal-overlay" data-lenis-prevent onClick={onClose}>
      <div 
        className="modal-content resume-modal-card" 
        data-lenis-prevent 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '960px', padding: '0', overflow: 'hidden' }}
      >
        {/* Top Control Bar (Non-Printable) */}
        <div className="resume-control-bar no-print">
          <div className="resume-control-title">
            <span className="brand-status-dot"></span>
            <strong className="resume-header-desktop">Resume / CV</strong>
            <strong className="resume-header-mobile">Resume / CV</strong>
            <span className="resume-badge-tag">Verified Data</span>
          </div>

          <div className="resume-actions-group">
            <button 
              className="btn btn-primary btn-sm resume-action-btn" 
              onClick={handleSave} 
              id="btn-save-data"
              title="Save resume to your local desktop as PDF"
            >
              <Download size={15} />
              <span>Save Data</span>
            </button>

            <button 
              className="modal-close-btn" 
              onClick={onClose} 
              id="resume-modal-close-btn" 
              aria-label="Close modal"
              style={{ position: 'static' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="resume-document-sheet" id="printable-resume">
          {/* Header */}
          <header className="resume-doc-header">
            <div className="resume-header-main">
              <h1 className="resume-applicant-name">{personal.name}</h1>
              <div className="resume-applicant-title">
                {personal.targetRole}
              </div>
            </div>

            <div className="resume-contact-grid">
              <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="resume-contact-item">
                <Phone size={13} color="var(--green-primary)" />
                <span>{personal.phone}</span>
              </a>

              <a href={`mailto:${personal.email}`} className="resume-contact-item">
                <Mail size={13} color="var(--green-primary)" />
                <span>{personal.email}</span>
              </a>

              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="resume-contact-item">
                <LinkedinIcon size={13} />
                <span>LinkedIn Profile</span>
              </a>

              <a href={personal.githubProfile || personal.github} target="_blank" rel="noopener noreferrer" className="resume-contact-item">
                <GithubIcon size={13} />
                <span>GitHub Profile</span>
              </a>

              <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="resume-contact-item">
                <WhatsappIcon size={13} />
                <span>WhatsApp ({personal.whatsappUsername})</span>
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section">
            <h2 className="resume-section-heading">
              <span className="resume-heading-icon"><Briefcase size={14} /></span>
              <span>Professional Summary</span>
            </h2>
            <div className="resume-summary-card">
              <p className="resume-summary-text">
                {personal.summary}
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-section-heading">
              <span className="resume-heading-icon"><Cpu size={14} /></span>
              <span>Technical Skills</span>
            </h2>
            <div className="resume-skills-grid">
              {technicalSkillsCategories.map((item, idx) => (
                <div key={idx} className="resume-skill-row">
                  <div className="resume-skill-label">{item.category}</div>
                  <div className="resume-skill-list">{item.skills}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="resume-section">
            <h2 className="resume-section-heading">
              <span className="resume-heading-icon"><Layers size={14} /></span>
              <span>Professional Experience</span>
            </h2>
            <div className="resume-experience-list">
              {experience.map((exp, idx) => (
                <article key={idx} className="resume-job-entry">
                  <div className="resume-job-top">
                    <div>
                      <h3 className="resume-job-role">{exp.role}</h3>
                      <div className="resume-job-company">
                        <strong>{exp.company}</strong>
                        {exp.client && exp.client !== exp.company && (
                          <span className="resume-job-client"> • {exp.client}</span>
                        )}
                      </div>
                    </div>
                    <div className="resume-job-period">
                      <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {exp.focus && (
                    <div className="resume-job-focus">
                      <span className="resume-focus-tag">Technologies & Focus:</span>
                      <span>{exp.focus}</span>
                    </div>
                  )}

                  <ul className="resume-bullets-list">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="resume-bullet-item">{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Additional Experience */}
          {additionalExperience && additionalExperience.length > 0 && (
            <section className="resume-section">
              <h2 className="resume-section-heading">
                <span className="resume-heading-icon"><Sparkles size={14} /></span>
                <span>Additional Experience & Mentorship</span>
              </h2>
              <div className="resume-experience-list">
                {additionalExperience.map((exp, idx) => (
                  <article key={idx} className="resume-job-entry">
                    <div className="resume-job-top">
                      <div>
                        <h3 className="resume-job-role">{exp.role}</h3>
                        <div className="resume-job-company">
                          <strong>{exp.company}</strong>
                        </div>
                      </div>
                      <div className="resume-job-period">
                        <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {exp.focus && (
                      <div className="resume-job-focus">
                        <span className="resume-focus-tag">Domain Scope:</span>
                        <span>{exp.focus}</span>
                      </div>
                    )}

                    <ul className="resume-bullets-list">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="resume-bullet-item">{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Dual Column: Education & Certifications */}
          <div className="resume-dual-grid">
            {/* Education */}
            <section className="resume-section">
              <h2 className="resume-section-heading">
                <span className="resume-heading-icon"><GraduationCap size={14} /></span>
                <span>Education</span>
              </h2>
              <div className="resume-edu-card">
                {education.map((edu, idx) => (
                  <div key={idx} className="resume-edu-item">
                    <h3 className="resume-edu-degree">{edu.degree}</h3>
                    <div className="resume-edu-institution">{edu.institution}</div>
                    <span className="resume-edu-period">{edu.period}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="resume-section">
              <h2 className="resume-section-heading">
                <span className="resume-heading-icon"><Award size={14} /></span>
                <span>Certifications</span>
              </h2>
              <div className="resume-cert-list">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="resume-cert-item">
                    <div className="resume-cert-dot"></div>
                    <div>
                      <strong className="resume-cert-name">{cert.name}</strong>
                      <div className="resume-cert-issuer">
                        <span>{cert.issuer}</span>
                        <span className="resume-cert-date"> • {cert.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <footer className="resume-doc-footer">
            <span>Rucchika Bhatia • AI Platform Engineer • References & verifiable credentials available upon request.</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
