import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Clock, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import BlogModal from './BlogModal';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import Magnetic from '../common/magnetic';
import { motion } from 'motion/react';

export default function Blog() {
  const { blogPosts, personal } = portfolioData;
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-header">
          <Eyebrow>Technical Thought Leadership</Eyebrow>
          <RevealText
            as="h2"
            lines={["The Engineering Journal &", "Architectural Insights"]}
            className="section-title"
          />
          <p className="section-desc">
            In-depth architectural breakdowns, production post-mortems, and engineering lessons across cloud, platform automation, and generative AI.
          </p>
          <div className="blog-medium-strip">
            <Magnetic strength={0.2}>
              <a 
                href={personal.medium || "https://medium.com/@rucchikabhatia"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="blog-medium-link"
                id="btn-medium-profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span>Follow on Medium (@rucchikabhatia)</span>
                <ExternalLink size={13} />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, idx) => (
            <motion.div 
              key={post.id} 
              className="blog-card" 
              id={`blog-card-${post.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="blog-meta">
                  <span className="blog-tag">{post.category}</span>
                  <span className="blog-readtime" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </span>
                  <span className="blog-date" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    <span>{post.date}</span>
                  </span>
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Magnetic strength={0.2} className="w-full">
                  <button 
                    className="btn btn-outline" 
                    onClick={() => setSelectedPost(post)}
                    style={{ width: '100%', justifyContent: 'space-between' }}
                    id={`btn-read-${post.id}`}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <BookOpen size={16} />
                      <span>Read Deep Dive</span>
                    </span>
                    <ArrowRight size={16} />
                  </button>
                </Magnetic>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a 
                    href={post.mediumUrl || "https://medium.com/@rucchikabhatia"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-verify-link"
                    style={{ fontSize: '0.75rem', gap: '4px' }}
                  >
                    <span>Read on Medium</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <BlogModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </section>
  );
}
