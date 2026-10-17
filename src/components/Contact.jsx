import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, FileText, MapPin, MessageSquare, ArrowUpRight, ExternalLink, Copy, Check, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import Magnetic from '../common/magnetic';

export default function Contact({ onOpenResume }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [lastAction, setLastAction] = useState('email'); // 'email' | 'whatsapp' | 'gmail'
  const [copied, setCopied] = useState(false);

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
    const name = data.name.trim() || 'Portfolio Visitor';
    const email = data.email.trim() || 'Not specified';
    const subject = data.subject.trim();
    const msg = data.message.trim() || '';

    let body = `Hello Rucchika,\n\nI am reaching out through your portfolio contact form:\n\n• Name: ${name}\n• Email: ${email}`;
    if (subject) {
      body += `\n• Subject: ${subject}`;
    }
    body += `\n\n• Message:\n${msg}\n\nBest regards,\n${name}`;
    return body;
  };

  const getEmailSubject = (data) => {
    const subject = data.subject?.trim();
    // Return EXACTLY what user wrote in the field
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

  const handleSendEmail = (e) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const mailtoUrl = getMailtoUrl(formData);
    window.location.href = mailtoUrl;

    setLastAction('email');
    setSubmitted(true);
  };

  const handleSendGmailWeb = (e) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const gmailUrl = getGmailWebUrl(formData);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setLastAction('gmail');
    setSubmitted(true);
  };

  const handleSendWhatsApp = (e) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const whatsappUrl = getWhatsAppUrl(formData);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setLastAction('whatsapp');
    setSubmitted(true);
  };

  const handleCopyDetails = () => {
    const text = formatWhatsAppMessage(formData);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
                  href={formData.name || formData.message ? getMailtoUrl(formData) : `mailto:${personal.email}`} 
                  className="contact-item" 
                  id="contact-email-link"
                  title="Click to compose email"
                >
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Address (Direct Inbox)</div>
                    <span style={{ fontWeight: 600 }}>{personal.email}</span>
                  </div>
                </a>

                <a 
                  href={formData.name || formData.message ? getWhatsAppUrl(formData) : "https://api.whatsapp.com/send?phone=918319295211&text=Hi%20Rucchika,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity!"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-item"
                  id="contact-whatsapp-link"
                  title="Click to chat on WhatsApp"
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
                  href={formData.name || formData.message ? getWhatsAppUrl(formData) : (personal.whatsapp || "https://api.whatsapp.com/send?phone=918319295211&text=Hi%20Rucchika,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity!")} 
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
                padding: '40px 28px', 
                textAlign: 'center',
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
                  background: lastAction === 'whatsapp' ? '#25D366' : 'var(--green-primary)', 
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: lastAction === 'whatsapp' ? '0 8px 24px rgba(37, 211, 102, 0.3)' : '0 8px 24px var(--shadow-green)'
                }}>
                  {lastAction === 'whatsapp' ? <WhatsappIcon size={34} color="#ffffff" /> : <CheckCircle2 size={34} />}
                </div>

                <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {lastAction === 'whatsapp' 
                    ? 'WhatsApp Opened with All Details!' 
                    : `Email Compose Opened for ${personal.email}!`}
                </h3>

                <p style={{ color: 'var(--text-secondary)', maxWidth: '460px', lineHeight: 1.5, fontSize: '0.875rem' }}>
                  {lastAction === 'whatsapp'
                    ? `WhatsApp chat has been loaded with your full message details. If WhatsApp didn't open automatically, use the buttons below:`
                    : `Your message details were loaded into your email compose window addressed directly to ${personal.email}. You can also open in Gmail Web or WhatsApp:`}
                </p>

                {/* Details Summary Preview Box */}
                <div className="contact-preview-box">
                  <div className="contact-preview-row">
                    <span className="contact-preview-label">Sender</span>
                    <span className="contact-preview-val">{formData.name} &lt;{formData.email || 'Email not provided'}&gt;</span>
                  </div>
                  {formData.subject && (
                    <div className="contact-preview-row">
                      <span className="contact-preview-label">Subject</span>
                      <span className="contact-preview-val">{formData.subject}</span>
                    </div>
                  )}
                  <div className="contact-preview-row">
                    <span className="contact-preview-label">Message</span>
                    <span className="contact-preview-val" style={{ whiteSpace: 'pre-wrap' }}>{formData.message}</span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
                  <a 
                    href={getWhatsAppUrl(formData)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-whatsapp"
                    style={{ fontSize: '0.8125rem', padding: '10px 16px' }}
                  >
                    <WhatsappIcon size={15} color="#ffffff" />
                    <span>Re-open WhatsApp</span>
                  </a>

                  <a 
                    href={getGmailWebUrl(formData)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    style={{ fontSize: '0.8125rem', padding: '10px 16px' }}
                  >
                    <ExternalLink size={14} />
                    <span>Open in Gmail Web</span>
                  </a>

                  <a 
                    href={getMailtoUrl(formData)} 
                    className="btn btn-outline"
                    style={{ fontSize: '0.8125rem', padding: '10px 16px' }}
                  >
                    <Mail size={14} />
                    <span>Default Mail App</span>
                  </a>

                  <button 
                    onClick={handleCopyDetails} 
                    className="btn btn-outline"
                    style={{ fontSize: '0.8125rem', padding: '10px 16px' }}
                  >
                    {copied ? <Check size={14} color="var(--green-primary)" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied Details!' : 'Copy Text'}</span>
                  </button>
                </div>

                <button 
                  className="btn btn-outline" 
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '8px', fontSize: '0.75rem', padding: '8px 16px' }}
                >
                  <span>Edit or Send Another</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendEmail} className="contact-form">
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
                    placeholder="Share brief details about the initiative, project scope, or opportunity..."
                    value={formData.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                  ></textarea>
                  {formErrors.message && (
                    <span className="form-error-text">
                      <AlertCircle size={13} /> {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Dual Dispatch Action Grid */}
                <div className="contact-action-grid">
                  <Magnetic strength={0.15}>
                    <button 
                      type="button" 
                      onClick={handleSendEmail} 
                      className="btn btn-primary" 
                      id="btn-send-email"
                      style={{ width: '100%', padding: '14px 18px', justifyContent: 'center' }}
                    >
                      <Mail size={17} />
                      <span>Open Email Compose</span>
                    </button>
                  </Magnetic>

                  <Magnetic strength={0.15}>
                    <button 
                      type="button" 
                      onClick={handleSendWhatsApp} 
                      className="btn-whatsapp" 
                      id="btn-send-whatsapp"
                      style={{ width: '100%' }}
                    >
                      <WhatsappIcon size={17} color="#ffffff" />
                      <span>Ping on WhatsApp</span>
                    </button>
                  </Magnetic>
                </div>

                {/* Webmail & Helper Strip */}
                <div className="contact-webmail-strip">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>Prefer Webmail?</span>
                    <button 
                      type="button" 
                      onClick={handleSendGmailWeb} 
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: 'var(--green-primary)', 
                        fontWeight: 600, 
                        cursor: 'pointer', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '3px',
                        padding: 0,
                        fontSize: 'inherit',
                        textDecoration: 'underline'
                      }}
                    >
                      Open in Gmail Web <ExternalLink size={12} />
                    </button>
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    All details auto-filled into your draft/chat
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
