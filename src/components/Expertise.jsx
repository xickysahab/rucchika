import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Cpu, Sparkles, Shield, Database, Cloud, Terminal, Activity, Network } from 'lucide-react';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import { motion, AnimatePresence } from 'motion/react';

export default function Expertise() {
  const { domains } = portfolioData;
  const [activeDomainId, setActiveDomainId] = useState(domains[0].id);

  const activeDomain = domains.find(d => d.id === activeDomainId) || domains[0];

  const getDomainIcon = (id) => {
    switch (id) {
      case 'cloud': return <Cloud size={16} />;
      case 'devops': return <Terminal size={16} />;
      case 'genai': return <Sparkles size={16} />;
      case 'mlops': return <Cpu size={16} />;
      case 'observability': return <Activity size={16} />;
      case 'data': return <Database size={16} />;
      case 'platform': return <Cpu size={16} />;
      case 'security': return <Shield size={16} />;
      default: return <Cloud size={16} />;
    }
  };

  return (
    <section className="section" id="expertise">
      <div className="container">
        <div className="section-header">
          <Eyebrow>Core Technical Capabilities</Eyebrow>
          <RevealText
            as="h2"
            lines={["8 Specialized", "Engineering Domains"]}
            className="section-title"
          />
          <p className="section-desc">
            Technical depth organized into structured architectural competencies, backed by real-world implementations.
          </p>
        </div>

        <div className="domains-container">
          {/* Domain tabs */}
          <div className="domain-tabs">
            {domains.map((dom) => (
              <button
                key={dom.id}
                className={`domain-tab-btn ${dom.id === activeDomainId ? 'active' : ''}`}
                onClick={() => setActiveDomainId(dom.id)}
                id={`domain-tab-${dom.id}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {getDomainIcon(dom.id)}
                  <span>{dom.title}</span>
                </div>
                <span className="tab-number">[{dom.number}]</span>
              </button>
            ))}
          </div>

          {/* Active domain panel with smooth AnimatePresence transition */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeDomain.id} 
              className="domain-content-panel"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="domain-panel-header">
                <div>
                  <span className="label" style={{ color: 'var(--green-primary)', display: 'block', marginBottom: '6px' }}>
                    DOMAIN {activeDomain.number} // ARCHITECTURE
                  </span>
                  <h3 className="domain-panel-title">{activeDomain.title}</h3>
                  <p className="domain-panel-desc">{activeDomain.shortDesc}</p>
                </div>
              </div>

              <div style={{ marginBottom: '12px', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Core Platforms & Tooling
              </div>
              <div className="domain-platform-tags">
                {activeDomain.platforms.map((plat, idx) => (
                  <span key={idx} className="platform-pill">{plat}</span>
                ))}
              </div>

              <div className="domain-highlight-grid">
                {activeDomain.highlights.map((hl, idx) => (
                  <div key={idx} className="highlight-box">
                    <h4 className="highlight-box-title">
                      <CheckCircle2 size={16} color="var(--green-primary)" />
                      <span>{hl.name}</span>
                    </h4>
                    <ul className="highlight-box-list">
                      {hl.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="domain-case-callout">
                <Sparkles size={22} color="var(--green-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Demonstrable Architectural Application</strong>
                  <p>{activeDomain.practicalApplication}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Niche Expertise & Product Engineering Spotlight (GraphTalk) */}
        <motion.div 
          className="niche-expertise-banner pmk__panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="plogo__mark plogo__mark--tl">+</span>
          <span className="plogo__mark plogo__mark--tr">+</span>
          <span className="plogo__mark plogo__mark--bl">+</span>
          <span className="plogo__mark plogo__mark--br">+</span>

          <div className="niche-badge-strip">
            <span className="niche-badge">NICHE EXPERTISE // AI PRODUCT DEVELOPMENT</span>
            <span className="niche-role-tag">● GraphTalk Product Developer</span>
          </div>

          <div className="niche-content-grid">
            <div>
              <h3 className="niche-product-title">
                GraphTalk — Conversational Graph & Enterprise AI Platform
              </h3>
              <p className="niche-product-desc">
                Core product developer architecting GraphTalk: an intelligent enterprise platform fusing Knowledge Graph reasoning, semantic graph neural traversals, and hybrid RAG pipelines to eliminate hallucinations and deliver verified contextual intelligence at sub-200ms speeds.
              </p>
            </div>

            <div className="niche-pills-wrap">
              <span className="niche-pill-item">
                <Network size={14} color="var(--green-primary)" />
                <span>Knowledge Graph Architecture</span>
              </span>
              <span className="niche-pill-item">
                <Sparkles size={14} color="var(--green-primary)" />
                <span>Graph RAG & Contextual AI</span>
              </span>
              <span className="niche-pill-item">
                <Database size={14} color="var(--green-primary)" />
                <span>Vector + Graph Fusion</span>
              </span>
              <span className="niche-pill-item">
                <Cpu size={14} color="var(--green-primary)" />
                <span>Async LLM Serving & FastAPI</span>
              </span>
              <span className="niche-pill-item">
                <Shield size={14} color="var(--green-primary)" />
                <span>Zero-Hallucination Guardrails</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
