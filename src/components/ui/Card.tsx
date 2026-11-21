import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  glow = false,
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.25 } } : undefined}
      className={cn(
        'glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300',
        hoverEffect && 'hover:border-brand-blue/40 hover:shadow-glow-sm',
        glow && 'border-brand-blue/30 shadow-glow-sm',
        className
      )}
      {...props}
    >
      {/* Subtle top-light gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
