import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import Magnetic from '../common/magnetic';
import { motion } from 'motion/react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section className="section" id="certifications" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <Eyebrow>Verified Industry Credentials</Eyebrow>
          <RevealText
            as="h2"
            lines={["Accreditations &", "Technical Certifications"]}
            className="section-title"
          />
          <p className="section-desc">
            Validated technical expertise across leading public clouds, AI developer ecosystems, enterprise database administration, and platform engineering standards.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id || idx}
              className="cert-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="cert-card-header">
                <div className="cert-icon-wrapper">
                  <ShieldCheck size={24} color="var(--green-primary)" />
                </div>
                <span className="cert-status-pill">
                  <span className="cert-status-dot"></span>
                  {cert.status || "Verified"}
                </span>
              </div>

              <div className="cert-card-body">
                <span className="cert-category">{cert.category}</span>
                <h3 className="cert-name">{cert.name}</h3>
                
                <div className="cert-issuer-row">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-bullet">•</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>

              <div className="cert-card-footer">
                <span className="cert-badge-tag">{cert.badge || "Accredited"}</span>
                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-verify-link"
                    title="View Credential Verification"
                  >
                    <span>Verify</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="cert-verify-badge">
                    <CheckCircle2 size={13} />
                    <span>Official Issuer</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative update strip */}
        <motion.div 
          className="cert-update-strip"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="cert-update-content">
            <Sparkles size={16} color="var(--green-primary)" />
            <span>
              <strong>Continuous Accreditation:</strong> Additional multi-cloud (AWS, Azure, GCP) & Kubernetes certifications are actively being documented and verified.
            </span>
          </div>
          <Magnetic strength={0.2}>
            <a href="#contact" className="btn btn-outline" style={{ fontSize: '0.8125rem', padding: '8px 16px' }}>
              Request Full Transcript
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
