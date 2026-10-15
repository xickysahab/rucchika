import React from 'react';
import { X, ExternalLink, CheckCircle, ShieldAlert, Cpu, Workflow } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" data-lenis-prevent onClick={onClose}>
      <div className="modal-content" data-lenis-prevent onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} id="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '20px' }}>
          <span className="project-tag">{project.tag}</span>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 800, marginTop: '10px', color: 'var(--text-primary)', lineHeight: 1.2 }}>
            {project.title}
          </h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--green-primary)', marginTop: '4px' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Metrics Strip */}
        <div className="project-metric-bar" style={{ marginBottom: '28px' }}>
          {project.metrics.map((m, idx) => (
            <div key={idx} className="project-metric-item">
              <span className="project-metric-label">{m.label}</span>
              <span className="project-metric-val">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Problem & Solution */}
        <div className="project-modal-grid">
          <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldAlert size={16} color="#ef4444" />
              <span>The Engineering Challenge</span>
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.problem}
            </p>
          </div>

          <div style={{ background: 'var(--green-soft)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--green-border)' }}>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--green-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={16} color="var(--green-primary)" />
              <span>Architectural Solution</span>
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Step-by-Step Flow */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Workflow size={18} color="var(--green-primary)" />
            <span>End-to-End Architecture Workflow</span>
          </h4>
          <ol style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.architecture.map((step, idx) => (
              <li 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px', 
                  padding: '12px 16px', 
                  background: 'var(--bg-secondary)', 
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontWeight: 700, 
                  color: 'var(--green-primary)', 
                  background: 'var(--green-soft)', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0 
                }}>
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase' }}>
            Technologies & Standards
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((t, idx) => (
              <span key={idx} className="tech-tag-pill" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="project-modal-actions">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline modal-action-btn">
            <GithubIcon size={18} />
            <span>View Architecture Repository</span>
          </a>
          <button className="btn btn-primary modal-action-btn" onClick={onClose}>
            <span>Done Exploring</span>
          </button>
        </div>
      </div>
    </div>
  );
}
