import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import { motion } from 'motion/react';

export default function Snapshot() {
  const { snapshots } = portfolioData;

  return (
    <section className="section" id="about" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <Eyebrow>Strategic Capability</Eyebrow>
          <RevealText
            as="h2"
            lines={["Full-Lifecycle Platform &", "Intelligent Systems Leadership"]}
            className="section-title"
          />
          <p className="section-desc">
            Bridging the gap between multi-cloud infrastructure, GitOps developer automation, and resilient generative AI platforms.
          </p>
        </div>

        <div className="snapshot-grid">
          {snapshots.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="snapshot-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="snapshot-card-top">
                <span className="snapshot-badge">{item.badge}</span>
                <h3 className="snapshot-title">{item.title}</h3>
                <p className="snapshot-desc">{item.desc}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--green-primary)' }}>
                <span>Core Pillar</span>
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
