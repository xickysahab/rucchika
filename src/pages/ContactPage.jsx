import React from 'react';
import Contact from '../components/Contact';

export default function ContactPage({ onOpenResume }) {
  return (
    <div className="page-view">
      <Contact onOpenResume={onOpenResume} />
    </div>
  );
}
