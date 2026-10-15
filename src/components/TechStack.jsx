import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Cloud, FileCode, Terminal, Box, Boxes, Package, GitBranch, Cpu, 
  RefreshCw, Code, Database, Activity, BarChart3, Search, Radio, 
  Workflow, Layers, Sparkles, GitCommit, Server, Bot, Shield 
} from 'lucide-react';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import VelocityMarquee from '../common/velocity_marquee';

export default function TechStack() {
  const { techStack } = portfolioData;
  const [levelFilter, setLevelFilter] = useState('All');

  const marqueeRow1 = [
    "AWS Core", "Azure Cloud", "Google Cloud", "Kubernetes", "Terraform", 
    "Docker Engine", "ArgoCD GitOps", "Helm Charts"
  ];

  const marqueeRow2 = [
    "Generative AI", "LangChain", "Pinecone Vector", "MLflow", 
    "Prometheus", "Grafana", "OpenTelemetry", "Linux Kernel"
  ];

  const filterOptions = [
    { label: 'All Stack', value: 'All' },
    { label: 'Professional Experience (Production)', value: 'Professional Experience' },
    { label: 'Hands-on Projects', value: 'Hands-on Projects' },
    { label: 'Currently Exploring', value: 'Currently Exploring' }
  ];

  const filteredTech = levelFilter === 'All' 
    ? techStack 
    : techStack.filter(item => item.level === levelFilter);

  const renderIcon = (iconName) => {
    const props = { size: 18, color: 'var(--green-primary)' };
    switch (iconName) {
      case 'Cloud': return <Cloud {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Package': return <Package {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'Search': return <Search {...props} />;
      case 'Radio': return <Radio {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'GitCommit': return <GitCommit {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'Shield': return <Shield {...props} />;
      default: return <Code {...props} />;
    }
  };

  const getBadgeClass = (level) => {
    if (level === 'Professional Experience') return 'prod';
    if (level === 'Hands-on Projects') return 'project';
    return 'explore';
  };

  return (
    <section className="section" id="stack" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <Eyebrow>Technology Ecosystem</Eyebrow>
          <RevealText
            as="h2"
            lines={["Tools, Frameworks &", "Infrastructure Matrix"]}
            className="section-title"
          />
          <p className="section-desc">
            A transparent breakdown distinguishing between real-world production engineering, deeply implemented demonstration projects, and ongoing research.
          </p>
        </div>

        {/* Pixoraa-style Dynamic Velocity Marquee Panel */}
        <div className="pmk__panel" style={{ marginBottom: '48px' }}>
          <div className="pmk__panel-head">
            <span className="label">Continuous Velocity Strip</span>
            <span className="label pmk__count">24+ Core Technologies</span>
          </div>

          <div className="pmarquee">
            <VelocityMarquee baseSpeed={1.2}>
              {marqueeRow1.map((item, idx) => (
                <div className="plogo" key={idx}>
                  <span className="plogo__mark plogo__mark--tl">+</span>
                  <span className="plogo__mark plogo__mark--tr">+</span>
                  <span className="plogo__mark plogo__mark--bl">+</span>
                  <span className="plogo__mark plogo__mark--br">+</span>
                  <span className="plogo__name">{item}</span>
                </div>
              ))}
            </VelocityMarquee>

            <VelocityMarquee baseSpeed={1.2} reverse={true}>
              {marqueeRow2.map((item, idx) => (
                <div className="plogo" key={idx}>
                  <span className="plogo__mark plogo__mark--tl">+</span>
                  <span className="plogo__mark plogo__mark--tr">+</span>
                  <span className="plogo__mark plogo__mark--bl">+</span>
                  <span className="plogo__mark plogo__mark--br">+</span>
                  <span className="plogo__name">{item}</span>
                </div>
              ))}
            </VelocityMarquee>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="stack-filters">
          {filterOptions.map((f, idx) => (
            <button
              key={idx}
              className={`filter-btn ${levelFilter === f.value ? 'active' : ''}`}
              onClick={() => setLevelFilter(f.value)}
              id={`tech-filter-${idx}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <div className="tech-grid">
          {filteredTech.map((item, idx) => (
            <div key={idx} className="tech-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: 'var(--radius-md)', 
                  background: 'var(--green-soft)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {renderIcon(item.icon)}
                </div>
                <div className="tech-info">
                  <span className="tech-name">{item.name}</span>
                  <span className="tech-cat">{item.category}</span>
                </div>
              </div>
              <span className={`tech-level-badge ${getBadgeClass(item.level)}`}>
                {item.level === 'Professional Experience' ? 'Production' : item.level === 'Hands-on Projects' ? 'Implemented' : 'Research'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
