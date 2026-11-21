import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        const progress = Math.min(Math.max((scrollY / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      if (scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circle radius for progress indicator
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 25 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.12, y: -3 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-12 h-12 rounded-full flex items-center justify-center bg-white/90 dark:bg-dark-card/90 backdrop-blur-md shadow-lg dark:shadow-glow-sm border border-slate-200/90 dark:border-dark-border text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan hover:border-brand-blue/60 transition-colors group focus:outline-none"
            aria-label={t.footer.backToTop}
            title={t.footer.backToTop}
          >
            {/* Circular Scroll Progress Ring */}
            <svg
              className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none"
              viewBox="0 0 52 52"
            >
              {/* Background circle track */}
              <circle
                cx="26"
                cy="26"
                r={radius}
                className="stroke-slate-200 dark:stroke-dark-border"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Animated Progress ring */}
              <circle
                cx="26"
                cy="26"
                r={radius}
                className="stroke-brand-blue dark:stroke-brand-cyan transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Glowing Arrow Icon */}
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 text-brand-blue dark:text-brand-cyan" />

            {/* Tooltip on hover */}
            <span className="absolute bottom-full mb-2 right-0 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
              {t.footer.backToTop}
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
