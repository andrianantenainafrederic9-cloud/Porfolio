import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Eye, Code2, Sun, Moon } from 'lucide-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

export interface NavbarProps {
  activeSection: string;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  theme,
  toggleTheme,
  onOpenCV,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolledToTop } = useScrollDirection();
  const { t, language } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.skills, href: '#skills', id: 'skills' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.education, href: '#education', id: 'education' },
    { name: t.nav.qualities, href: '#qualities', id: 'qualities' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolledToTop
          ? 'bg-transparent py-5'
          : 'bg-white/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-slate-200/80 dark:border-dark-border/80 py-3.5 shadow-sm dark:shadow-card-glass'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Accueil Fréderic Andrianantenaina"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan p-0.5 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
              <div className="w-full h-full bg-slate-50 dark:bg-dark-surface rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-brand-blue dark:text-brand-cyan group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white tracking-wide text-base group-hover:text-brand-blue transition-colors">
                FRÉDERIC
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-muted uppercase tracking-widest font-mono">
                Data & Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={cn(
                    'relative px-3 py-1.5 text-sm font-medium transition-colors rounded-lg',
                    isActive
                      ? 'text-brand-blue dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-card/40'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Language Switcher, Theme Toggle, Direct PDF Download & CV Modal */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* 3-Language Switcher (FR / EN / DE) */}
            <LanguageSwitcher />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
              aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
              title={theme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <Button
              variant="outline"
              size="sm"
              href="#contact"
              className="hidden xl:inline-flex"
            >
              {t.nav.quoteBtn}
            </Button>

            {/* Direct Automatic Download of CV PDF */}
            <a
              href={`/cv/CV_ANDRIANANTENAINA_Frederic_${language.toUpperCase()}.pdf`}
              download={`CV_ANDRIANANTENAINA_Frederic_${language.toUpperCase()}.pdf`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-blue-600 hover:to-cyan-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all hover:scale-105"
              title={language === 'fr' ? 'Télécharger automatiquement le CV en PDF' : language === 'en' ? 'Download authentic PDF resume' : 'Originalen PDF-Lebenslauf herunterladen'}
            >
              <FileDown className="w-4 h-4" />
              <span>{t.nav.downloadCV}</span>
            </a>

            {/* Quick Preview Modal Icon */}
            <button
              onClick={onOpenCV}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
              title="Aperçu du CV"
              aria-label="Aperçu du CV"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Language + Theme + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher compact />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300"
              aria-label="Basculer le thème"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-dark-surface/95 backdrop-blur-xl border-b border-slate-200 dark:border-dark-border px-4 pt-3 pb-6 space-y-3 shadow-lg"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={cn(
                      'px-4 py-2.5 rounded-xl text-base font-medium transition-colors flex items-center justify-between',
                      isActive
                        ? 'bg-brand-blue/15 text-brand-blue dark:text-brand-cyan border border-brand-blue/30 font-semibold'
                        : 'text-slate-600 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-card'
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-brand-cyan" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-200 dark:border-dark-border flex flex-col gap-2.5">
              {/* Direct Download in Mobile Menu */}
              <a
                href={`/cv/CV_ANDRIANANTENAINA_Frederic_${language.toUpperCase()}.pdf`}
                download={`CV_ANDRIANANTENAINA_Frederic_${language.toUpperCase()}.pdf`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-sm shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>{t.nav.downloadCV} (PDF)</span>
              </a>

              {/* Preview in Mobile Menu */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-card text-slate-800 dark:text-slate-200 font-semibold text-sm"
              >
                <Eye className="w-4 h-4" />
                <span>{language === 'fr' ? 'Aperçu du CV' : language === 'en' ? 'Preview CV' : 'Lebenslauf ansehen'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
