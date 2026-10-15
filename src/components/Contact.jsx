import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, FileText, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import Magnetic from '../common/magnetic';

export default function Contact({ onOpenResume }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      // Keep submitted true for good UX
    }, 500);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-container">
          {/* Left Column: Info */}
          <div className="contact-info">
            <div>
              <Eyebrow>Let's Connect</Eyebrow>
              <RevealText
                as="h2"
                lines={["Ready to Engineer", "Scalable Platforms Together?"]}
                className="contact-headline"
              />
              <p className="contact-subtext">
                Whether you're looking for architectural leadership on multi-cloud initiatives, AI platform engineering, or production Kubernetes optimization, I’d love to connect.
              </p>

              <div className="contact-details">
                <a href={`mailto:${personal.email}`} className="contact-item">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Address</div>
                    <span>{personal.email}</span>
                  </div>
                </a>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location & Availability</div>
                    <span>{personal.location} ({personal.status})</span>
                  </div>
                </div>

                <div className="contact-item" onClick={onOpenResume} style={{ cursor: 'pointer' }}>
                  <div className="contact-icon-box">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Resume / Credentials</div>
                    <span style={{ color: 'var(--green-primary)' }}>View Executive Resume (PDF)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-social-buttons">
              <Magnetic strength={0.2} className="w-full contact-social-item">
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  <GithubIcon size={18} />
                  <span>GitHub Profile</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.2} className="w-full contact-social-item">
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            {submitted ? (
              <div style={{ 
                background: 'var(--green-soft)', 
                border: '1px solid var(--green-border)', 
                borderRadius: 'var(--radius-xl)', 
                padding: '48px 32px', 
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  background: 'var(--green-primary)', 
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Message Transmitted Successfully!
                </h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: 1.6 }}>
                  Thank you for reaching out, {formData.name}. I'll review your note and respond within 24 hours.
                </p>
                <button 
                  className="btn btn-outline" 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  style={{ marginTop: '8px' }}
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    className="form-input"
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    className="form-input"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Topic / Opportunity</label>
                  <input
                    type="text"
                    id="contact-subject"
                    className="form-input"
                    placeholder="e.g. Lead Cloud, Data, DevOps & AI Platform Engineer Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder="Share brief details about the initiative or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <Magnetic strength={0.2} className="w-full">
                  <button type="submit" className="btn btn-primary" id="btn-submit-contact" style={{ width: '100%', padding: '14px' }}>
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
