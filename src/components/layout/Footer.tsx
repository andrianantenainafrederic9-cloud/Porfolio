import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-white/70 dark:bg-dark-surface/60 backdrop-blur-md relative overflow-hidden transition-colors">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.fullName}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-muted max-w-md leading-relaxed">
              {t.personalInfo.headline}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-dim font-mono">
              {t.personalInfo.status} • {t.personalInfo.institution}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-muted">
              <li>
                <a href="#about" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  {t.nav.education}
                </a>
              </li>
              <li>
                <a href="#qualities" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  {t.nav.qualities}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.footer.social}
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white hover:border-brand-blue/50 transition-all shadow-sm"
                aria-label="GitHub de Fréderic"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white hover:border-brand-blue/50 transition-all shadow-sm"
                aria-label="LinkedIn de Fréderic"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white hover:border-brand-blue/50 transition-all shadow-sm"
                aria-label="Email de Fréderic"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-dim">
              {t.footer.locationLabel} {t.personalInfo.location}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-dim">
          <p className="flex items-center gap-1.5">
            © {currentYear} {personalInfo.fullName}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
