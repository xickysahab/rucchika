import React from 'react';
import { X, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';

export default function BlogModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="modal-overlay" data-lenis-prevent onClick={onClose}>
      <div className="modal-content" data-lenis-prevent onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
        <button className="modal-close-btn" onClick={onClose} id="blog-modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span className="blog-tag">{post.category}</span>
            <span className="blog-readtime" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} />
              <span>{post.readTime}</span>
            </span>
            <span className="blog-date" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} />
              <span>{post.date}</span>
            </span>
          </div>

          <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
            {post.title}
          </h2>
        </div>

        <div style={{ 
          fontSize: '1rem', 
          lineHeight: '1.8', 
          color: 'var(--text-secondary)', 
          whiteSpace: 'pre-line',
          borderTop: '1px solid var(--border-light)',
          paddingTop: '24px',
          fontFamily: 'inherit'
        }}>
          {post.content}
        </div>

        <div style={{ marginTop: '36px', borderTop: '1px solid var(--border-light)', paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-primary" onClick={onClose}>
            <span>Close Article</span>
          </button>
        </div>
      </div>
    </div>
  );
}
