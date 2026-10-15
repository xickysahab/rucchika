import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import BlogModal from './BlogModal';
import Eyebrow from '../common/eyebrow';
import RevealText from '../common/reveal_text';
import Magnetic from '../common/magnetic';
import { motion } from 'motion/react';

export default function Blog() {
  const { blogPosts } = portfolioData;
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

              <div>
                <Magnetic strength={0.2} className="w-full">
                  <button 
                    className="btn btn-outline" 
                    onClick={() => setSelectedPost(post)}
                    style={{ width: '100%', justifyContent: 'space-between' }}
                    id={`btn-read-${post.id}`}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <BookOpen size={16} />
                      <span>Read Engineering Deep Dive</span>
                    </span>
                    <ArrowRight size={16} />
                  </button>
                </Magnetic>
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
