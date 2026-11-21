import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Orb 1: Primary Blue floating */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/6 left-1/4 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 blur-[120px] sm:blur-[160px]"
      />

      {/* Orb 2: Cyan floating */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-brand-cyan/10 dark:bg-brand-cyan/10 blur-[130px] sm:blur-[150px]"
      />

      {/* Orb 3: Subtle Indigo Accent at the bottom */}
      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/6 left-1/3 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[140px] sm:blur-[170px]"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-30" />
    </div>
  );
};
