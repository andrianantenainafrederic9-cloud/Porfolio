import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';
import { fadeInUp } from '@/animations/variants';
import { cn } from '@/utils/cn';

export interface SectionHeadingProps {
  badgeText: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  highlightedText,
  subtitle,
  alignment = 'center',
  className,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={cn(
        'mb-12 md:mb-16',
        alignment === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl',
        className
      )}
    >
      <Badge variant="cyan" size="md" className="mb-3 uppercase tracking-wider font-semibold">
        {badgeText}
      </Badge>
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
        {title}{' '}
        {highlightedText && (
          <span className="text-gradient-blue">{highlightedText}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
