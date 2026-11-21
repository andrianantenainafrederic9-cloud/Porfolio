import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'cyan' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'sm',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors duration-200';
  
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1',
  };

  const variantStyles = {
    primary: 'bg-brand-blue/15 text-brand-blue border border-brand-blue/30',
    cyan: 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30',
    neutral: 'bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-muted border border-slate-200 dark:border-dark-border',
    outline: 'border border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-main hover:border-brand-blue/50',
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
