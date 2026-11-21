import React from 'react';
import { motion } from 'framer-motion';

/**
 * FuturisticHUDDecorations:
 * Elegant, non-intrusive cyber-futuristic telemetry animations placed strictly
 * in the empty negative spaces (outer margins and corners) where there is no text.
 * Gives the portfolio a distinctive, cutting-edge Data Science & AI identity.
 */
export const FuturisticHUDDecorations: React.FC = () => {
  return (
    <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* 1. Top-Left Negative Space: Coordinate & Status Widget */}
      <div className="fixed top-24 left-4 xl:left-8 z-20 hidden 2xl:flex flex-col gap-1 font-mono text-[10px] text-slate-400 dark:text-slate-600 opacity-60">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
          <span className="text-brand-cyan/80 font-bold">NODE://SYS_ONLINE</span>
        </div>
        <span>COORD: 18.8792° S, 47.5079° E</span>
        <span>ACAD: ENI_FIANAR_M1_GID</span>
        <div className="w-24 h-0.5 bg-gradient-to-r from-brand-cyan/40 to-transparent mt-1" />
      </div>

      {/* 2. Top-Right Negative Space: Data Buffer & Frequency Scanner */}
      <div className="fixed top-24 right-4 xl:right-8 z-20 hidden 2xl:flex flex-col items-end gap-1 font-mono text-[10px] text-slate-400 dark:text-slate-600 opacity-60">
        <div className="flex items-center gap-1.5">
          <span className="text-brand-blue/90 font-bold">TELEMETRY_DATA_STREAM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
        </div>
        <span>RATE: 2.4 GB/s · STACK: PYTHON/REACT</span>
        <span>STATUS: BUFFER_OPTIMIZED</span>
        <div className="w-28 h-0.5 bg-gradient-to-l from-brand-blue/40 to-transparent mt-1" />
      </div>

      {/* 3. Left Gutter Animated Laser Grid Line (in empty side space) */}
      <div className="fixed top-1/4 left-3 w-px h-64 bg-slate-200/40 dark:bg-dark-border/40 hidden xl:block z-0">
        <motion.div
          animate={{ y: [0, 256, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-12 -left-[1.5px] rounded-full bg-gradient-to-b from-transparent via-brand-cyan to-transparent shadow-[0_0_8px_#22d3ee]"
        />
      </div>

      {/* 4. Right Gutter Animated Laser Grid Line */}
      <div className="fixed top-1/3 right-3 w-px h-64 bg-slate-200/40 dark:bg-dark-border/40 hidden xl:block z-0">
        <motion.div
          animate={{ y: [256, 0, 256] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-12 -left-[1.5px] rounded-full bg-gradient-to-b from-transparent via-brand-blue to-transparent shadow-[0_0_8px_#3b82f6]"
        />
      </div>

      {/* 5. Subtle Floating Geometry in Empty Outer Margin (Left) */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="fixed top-2/3 -left-12 w-32 h-32 rounded-full border border-dashed border-brand-cyan/20 dark:border-brand-cyan/15 hidden 2xl:block z-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-dotted border-brand-blue/30" />
      </motion.div>

      {/* 6. Subtle Floating Geometry in Empty Outer Margin (Right) */}
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: 'linear' },
          scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="fixed top-1/2 -right-16 w-40 h-40 rounded-full border border-dashed border-indigo-500/20 dark:border-indigo-500/15 hidden 2xl:block z-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-dotted border-cyan-400/25" />
      </motion.div>
    </div>
  );
};
