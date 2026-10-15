import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import { motion } from 'motion/react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <Eyebrow>Career Trajectory</Eyebrow>
          <RevealText
            as="h2"
            lines={["Outcome-Driven", "Engineering Leadership"]}
            className="section-title"
          />
          <p className="section-desc">
            Organized around measurable business impacts, reliable systems delivery, and progressive expansion from DevOps into AI platforms.
          </p>
        </div>

        <div className="timeline">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">
                      <strong>{exp.company}</strong>
                      {exp.client && <span style={{ color: 'var(--green-primary)', fontWeight: 600 }}> • {exp.client}</span>}
                    </div>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <div className="timeline-focus">
                  <strong>Domain Focus: </strong>{exp.focus}
                </div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
