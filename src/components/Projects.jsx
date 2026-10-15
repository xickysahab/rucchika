import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, ExternalLink, Workflow } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import Magnetic from '../common/magnetic';
import { motion } from 'motion/react';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <Eyebrow>Flagship Implementations</Eyebrow>
          <RevealText
            as="h2"
            lines={["6 Production-Inspired", "Engineering Architectures"]}
            className="section-title"
          />
          <p className="section-desc">
            Moving beyond simple tutorials to real-world architectures: reproducible multi-cloud provisioning, Kubernetes platform design, enterprise GenAI, and MLOps delivery.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card" 
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="project-meta">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-num label">[{project.number}]</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-summary">{project.summary}</p>

                {/* Key Metrics */}
                <div className="project-metric-bar">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="project-metric-item">
                      <span className="project-metric-label">{m.label}</span>
                      <span className="project-metric-val">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="project-tech-tags">
                  {project.technologies.slice(0, 5).map((t, idx) => (
                    <span key={idx} className="tech-tag-pill">{t}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-tag-pill">+{project.technologies.length - 5} more</span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="project-actions">
                <Magnetic strength={0.2} className="w-full">
                  <button 
                    className="btn btn-primary" 
                    onClick={() => setSelectedProject(project)}
                    style={{ width: '100%' }}
                    id={`btn-explore-${project.id}`}
                  >
                    <Workflow size={16} />
                    <span>Architecture Deep Dive</span>
                  </button>
                </Magnetic>

                <Magnetic strength={0.3}>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline btn-icon"
                    title="View GitHub Repository"
                    aria-label="View GitHub Repository"
                    style={{ width: '42px', height: '42px' }}
                  >
                    <GithubIcon size={18} />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
