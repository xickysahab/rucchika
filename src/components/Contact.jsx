import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, FileText, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
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

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(
      `Hello Rucchika,\n\nName: ${formData.name}\nEmail: ${formData.email}\nOpportunity / Topic: ${formData.subject || 'General Opportunity / Portfolio Inquiry'}\n\nMessage:\n${formData.message}\n\nSent from Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    // Trigger user's mail client directly with recipient rucchikabhatia@gmail.com
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Rucchika,\n\nName: ${formData.name}\nEmail: ${formData.email}\nOpportunity / Topic: ${formData.subject || 'General Opportunity'}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${personal.email}?subject=${subject}&body=${body}`;
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
                lines={["Open for Opportunities &", "Strategic Collaborations"]}
                className="contact-headline"
              />
              <p className="contact-subtext">
                Backed by an extensive 8+ year portfolio across multi-cloud infrastructure, DevOps automation, and GenAI platforms, I welcome conversations regarding full-time leadership, contractual consulting, architecture advisory, speaking engagements, or custom technical partnerships.
              </p>

              <div className="contact-details">
                <a href={`mailto:${personal.email}`} className="contact-item" id="contact-email-link">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Address (Direct Inbox)</div>
                    <span style={{ fontWeight: 600 }}>{personal.email}</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/918319295211?text=Hi%20Rucchika,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-item"
                  id="contact-whatsapp-link"
                >
                  <div className="contact-icon-box" style={{ background: 'rgba(37, 211, 102, 0.12)', color: '#25D366' }}>
                    <WhatsappIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>WhatsApp (Quick Connect)</div>
                    <span style={{ fontWeight: 600 }}>+91 83192 95211</span>
                  </div>
                </a>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location & Availability</div>
                    <span>{personal.location} (Full-Time & Contractual)</span>
                  </div>
                </div>

                <div className="contact-item" onClick={onOpenResume} style={{ cursor: 'pointer' }}>
                  <div className="contact-icon-box">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Resume / Credentials</div>
                    <span style={{ color: 'var(--green-primary)', fontWeight: 600 }}>View Executive Resume (PDF)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-social-buttons" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              <Magnetic strength={0.2} className="w-full">
                <a 
                  href={personal.githubProfile || personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '10px 8px', fontSize: '0.75rem', justifyContent: 'center' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.2} className="w-full">
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '10px 8px', fontSize: '0.75rem', justifyContent: 'center' }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.2} className="w-full">
                <a 
                  href={personal.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '10px 8px', fontSize: '0.75rem', justifyContent: 'center', borderColor: 'rgba(37, 211, 102, 0.4)' }}
                >
                  <WhatsappIcon size={16} />
                  <span>WhatsApp</span>
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
                  Message Addressed to {personal.email}!
                </h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Your message details were forwarded to your default mail application addressed directly to <strong>{personal.email}</strong>.
                </p>
                
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
                  <a 
                    href={getMailtoLink()} 
                    className="btn btn-primary"
                    style={{ fontSize: '0.8125rem' }}
                  >
                    <Mail size={15} />
                    <span>Open Mail Client</span>
                  </a>

                  <a 
                    href={`https://wa.me/918319295211?text=Hi%20Rucchika,%20this%20is%20${encodeURIComponent(formData.name)}.%20I%20just%20sent%20an%20inquiry%20regarding%20${encodeURIComponent(formData.subject || 'an opportunity')}.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                    style={{ fontSize: '0.8125rem' }}
                  >
                    <WhatsappIcon size={15} />
                    <span>Ping on WhatsApp</span>
                  </a>
                </div>

                <button 
                  className="btn btn-outline" 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  style={{ marginTop: '12px', fontSize: '0.75rem' }}
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
                    placeholder="e.g. Contractual AI Platform Consulting / Lead Platform Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder="Share brief details about the initiative, project scope, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <Magnetic strength={0.2} className="w-full">
                  <button type="submit" className="btn btn-primary" id="btn-submit-contact" style={{ width: '100%', padding: '14px' }}>
                    <Send size={18} />
                    <span>Send Message to {personal.email}</span>
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

