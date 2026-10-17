import React from 'react';
import Hero from '../components/Hero';
import Snapshot from '../components/Snapshot';
import { Link } from 'react-router-dom';
import { 
  Cpu, FolderGit2, Layers, Award, Briefcase, BookOpen, 
  HeartHandshake, Mail, ArrowRight, ShieldCheck, Sparkles 
} from 'lucide-react';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import Magnetic from '../common/magnetic';
import { motion } from 'motion/react';

export default function HomePage({ onOpenResume }) {
  const directorySections = [
    {
      to: "/expertise",
      title: "Cloud & AI Expertise",
      desc: "Multi-cloud architecture, DevOps automation, and GenAI platform design.",
      icon: Cpu,
      tag: "Architecture"
    },
    {
      to: "/projects",
      title: "Engineered Projects",
      desc: "GraphTalk, Multi-Region IaC, GitOps workflows, and telemetry pipelines.",
      icon: FolderGit2,
      tag: "Case Studies"
    },
    {
      to: "/tech-stack",
      title: "Tech Stack & Matrix",
      desc: "24+ core tools categorized by production, demo projects, and research.",
      icon: Layers,
      tag: "Ecosystem"
    },
    {
      to: "/certifications",
      title: "Verified Certifications",
      desc: "Accredited credentials across AWS, Microsoft, OCI, and Cisco.",
      icon: Award,
      tag: "Credentials"
    },
    {
      to: "/experience",
      title: "8+ Years Career History",
      desc: "DXC Technology, Shell, Philips, Marktine, and global mentorship.",
      icon: Briefcase,
      tag: "Career"
    },
    {
      to: "/blog",
      title: "Engineering Journal",
      desc: "In-depth architectural breakdowns with direct Medium integration.",
      icon: BookOpen,
      tag: "Insights"
    },
    {
      to: "/community",
      title: "Community, Consulting & Life",
      desc: "Contractual consulting, technical teaching, meditation & culinary art.",
      icon: HeartHandshake,
      tag: "Impact"
    },
    {
      to: "/contact",
      title: "Let's Connect",
      desc: "Direct WhatsApp chat, email dispatch, and opportunity inquiries.",
      icon: Mail,
      tag: "Direct Inbox"
    }
  ];

  return (
    <div className="home-page">
      <Hero onOpenResume={onOpenResume} />
      <Snapshot />

      {/* Directory Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <Eyebrow>Structured Portfolio Directory</Eyebrow>
            <RevealText
              as="h2"
              lines={["Explore Dedicated Sections &", "Technical Deep Dives"]}
              className="section-title"
            />
            <p className="section-desc">
              Every domain is structured as an independent, focused page for seamless exploration without continuous scrolling.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '32px'
          }}>
            {directorySections.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link 
                    to={item.to}
                    className="dir-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '24px',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'all var(--transition-normal)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--green-soft)',
                          border: '1px solid var(--green-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--green-primary)'
                        }}>
                          <IconComponent size={20} />
                        </div>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--text-muted)',
                          background: 'var(--bg-tag)',
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-sm)'
                        }}>
                          {item.tag}
                        </span>
                      </div>

                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 800,
                        color: 'var(--text-headline)',
                        marginBottom: '8px',
                        letterSpacing: '-0.02em'
                      }}>
                        {item.title}
                      </h3>

                      <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5
                      }}>
                        {item.desc}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--green-primary)',
                      marginTop: '20px'
                    }}>
                      <span>Explore Section</span>
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
