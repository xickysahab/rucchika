import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, FileText, MapPin, MessageSquare, ArrowUpRight, ExternalLink, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import Magnetic from '../common/magnetic';

export default function Contact({ onOpenResume }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);

  // Formatted message text generator for WhatsApp
  const formatWhatsAppMessage = (data) => {
    const name = data.name.trim() || 'Visitor';
    const email = data.email.trim();
    const subject = data.subject.trim();
    const msg = data.message.trim() || '';

    let text = `Hi Rucchika,\n\nI am reaching out via your portfolio:\n\n*Name:* ${name}`;
    if (email) text += `\n*Email:* ${email}`;
    if (subject) text += `\n*Subject:* ${subject}`;
    text += `\n\n*Message:*\n${msg}`;
    return text;
  };

  // Formatted body generator for Email
  const formatEmailBody = (data) => {
    const name = data.name.trim();
    const msg = data.message.trim() || '';

    let body = `Hello Rucchika,\n\n${msg}`;
    if (name) {
      body += `\n\nBest regards,\n${name}`;
    }
    return body;
  };

  const getEmailSubject = (data) => {
    const subject = data.subject?.trim();
    if (subject) return subject;
    const name = data.name?.trim();
    return name ? `Inquiry from ${name}` : 'Portfolio Inquiry';
  };

  const getWhatsAppUrl = (data = formData) => {
    const text = formatWhatsAppMessage(data);
    return `https://api.whatsapp.com/send?phone=918319295211&text=${encodeURIComponent(text)}`;
  };

  const getMailtoUrl = (data = formData) => {
    const subject = encodeURIComponent(getEmailSubject(data));
    const body = encodeURIComponent(formatEmailBody(data));
    return `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const getGmailWebUrl = (data = formData) => {
    const subject = encodeURIComponent(getEmailSubject(data));
    const body = encodeURIComponent(formatEmailBody(data));
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${subject}&body=${body}`;
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!formData.message.trim()) errors.message = 'Please enter your message';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Direct 1-click to Gmail Compose (no 4-option screen)
  const handleOpenGmail = (e) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const gmailUrl = getGmailWebUrl(formData);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setStatusMessage({ type: 'gmail', text: 'Opened Gmail compose directly in a new tab with all details filled!' });
    setTimeout(() => setStatusMessage(null), 5000);
  };

  // Direct 1-click to WhatsApp (no 4-option screen)
  const handleOpenWhatsApp = (e) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const whatsappUrl = getWhatsAppUrl(formData);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setStatusMessage({ type: 'whatsapp', text: 'Opened WhatsApp directly in a new tab with all details filled!' });
    setTimeout(() => setStatusMessage(null), 5000);
  };

  // Direct default mail client fallback
  const handleOpenMailto = (e) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const mailtoUrl = getMailtoUrl(formData);
    window.location.href = mailtoUrl;
    setStatusMessage({ type: 'email', text: 'Opened default mail app with all details filled!' });
    setTimeout(() => setStatusMessage(null), 5000);
  };

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
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
                <a 
                  href={getGmailWebUrl(formData)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-item" 
                  id="contact-email-link"
                  title="Direct 1-click to Gmail compose"
                >
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email (Direct Gmail Inbox)</div>
                    <span style={{ fontWeight: 600 }}>{personal.email}</span>
                  </div>
                </a>

                <a 
                  href={getWhatsAppUrl(formData)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-item"
                  id="contact-whatsapp-link"
                  title="Direct 1-click to WhatsApp chat"
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
                  href={getWhatsAppUrl(formData)} 
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

          {/* Right Column: Form (Always visible, direct 1-click dispatch) */}
          <div>
            <form onSubmit={handleOpenGmail} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className={`form-input ${formErrors.name ? 'form-input-error' : ''}`}
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                />
                {formErrors.name && (
                  <span className="form-error-text">
                    <AlertCircle size={13} /> {formErrors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  className="form-input"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  className="form-input"
                  placeholder="e.g. Project Inquiry / Discussion"
                  value={formData.subject}
                  onChange={(e) => handleFieldChange('subject', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  className={`form-textarea ${formErrors.message ? 'form-input-error' : ''}`}
                  placeholder="Share details about the initiative, project scope, or opportunity..."
                  value={formData.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                ></textarea>
                {formErrors.message && (
                  <span className="form-error-text">
                    <AlertCircle size={13} /> {formErrors.message}
                  </span>
                )}
              </div>

              {/* Status Message Notification if Dispatched */}
              {statusMessage && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: statusMessage.type === 'whatsapp' ? 'rgba(37, 211, 102, 0.12)' : 'var(--green-soft)',
                  border: `1px solid ${statusMessage.type === 'whatsapp' ? 'rgba(37, 211, 102, 0.4)' : 'var(--green-border)'}`,
                  color: 'var(--text-headline)',
                  fontSize: '0.84375rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={16} color={statusMessage.type === 'whatsapp' ? '#25D366' : 'var(--green-primary)'} />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              {/* Dual Direct Dispatch Buttons */}
              <div className="contact-action-grid">
                <Magnetic strength={0.15}>
                  <button 
                    type="button" 
                    onClick={handleOpenGmail} 
                    className="btn btn-primary" 
                    id="btn-send-email"
                    style={{ width: '100%', padding: '14px 18px', justifyContent: 'center' }}
                  >
                    <Mail size={17} />
                    <span>Send via Gmail</span>
                  </button>
                </Magnetic>

                <Magnetic strength={0.15}>
                  <button 
                    type="button" 
                    onClick={handleOpenWhatsApp} 
                    className="btn-whatsapp" 
                    id="btn-send-whatsapp"
                    style={{ width: '100%' }}
                  >
                    <WhatsappIcon size={17} color="#ffffff" />
                    <span>Ping on WhatsApp</span>
                  </button>
                </Magnetic>
              </div>

              {/* Fallback for native mail client */}
              <div className="contact-webmail-strip" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  Prefer Apple Mail / Outlook?{' '}
                  <button 
                    type="button" 
                    onClick={handleOpenMailto} 
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: 'var(--green-primary)', 
                      fontWeight: 600, 
                      cursor: 'pointer', 
                      padding: 0, 
                      fontSize: 'inherit',
                      textDecoration: 'underline' 
                    }}
                  >
                    Open in Default Mail Client
                  </button>
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Direct to: {personal.email}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
