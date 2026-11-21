import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage, Language } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  compact = false,
}) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-inner',
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              'relative flex items-center justify-center gap-1 font-mono font-semibold transition-colors focus:outline-none z-10',
              compact ? 'px-2 py-1 text-xs' : 'px-2.5 py-1 text-xs',
              isActive
                ? 'text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            )}
            title={lang.code === 'fr' ? 'Français' : lang.code === 'en' ? 'English' : 'Deutsch'}
          >
            {isActive && (
              <motion.div
                layoutId="activeLanguagePill"
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan shadow-sm"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <span className="relative z-10 text-[11px]">{lang.flag}</span>
            <span className="relative z-10">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
};
