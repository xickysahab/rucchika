import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import './scroll_progress.css';

/** Hairline read-through of page progress, pinned to top edge. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
