import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  BarChart3,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const groupThemeMap: Record<string, { icon: React.ReactNode; accentColor: string; badgeBg: string }> = {
    frontend: {
      icon: <Code className="w-5 h-5 text-brand-blue" />,
      accentColor: 'border-brand-blue/30 hover:border-brand-blue/60',
      badgeBg: 'bg-brand-blue/15 text-brand-blue',
    },
    backend: {
      icon: <Server className="w-5 h-5 text-brand-cyan" />,
      accentColor: 'border-brand-cyan/30 hover:border-brand-cyan/60',
      badgeBg: 'bg-brand-cyan/15 text-brand-cyan',
    },
    databases: {
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      accentColor: 'border-indigo-500/30 hover:border-indigo-500/60',
      badgeBg: 'bg-indigo-500/15 text-indigo-500 dark:text-indigo-400',
    },
    'data-analyst': {
      icon: <BarChart3 className="w-5 h-5 text-emerald-500" />,
      accentColor: 'border-emerald-500/30 hover:border-emerald-500/60',
      badgeBg: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
    },
    'data-engineer': {
      icon: <Cpu className="w-5 h-5 text-sky-500" />,
      accentColor: 'border-sky-500/30 hover:border-sky-500/60',
      badgeBg: 'bg-sky-500/15 text-sky-500 dark:text-sky-400',
    },
    gid: {
      icon: <Layers className="w-5 h-5 text-amber-500" />,
      accentColor: 'border-amber-500/30 hover:border-amber-500/60',
      badgeBg: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
    },
    aiml: {
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
      accentColor: 'border-purple-500/30 hover:border-purple-500/60',
      badgeBg: 'bg-purple-500/15 text-purple-600 dark:text-purple-400',
    },
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-50/60 dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t.skills.badge}
          title={t.skills.title}
          highlightedText={t.skills.highlight}
          subtitle={t.skills.subtitle}
        />

        {/* Grouped Display: Exactly one dedicated comprehensive card per domain, sans boutons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {t.skills.groups.map((group) => {
            const theme = groupThemeMap[group.id] || {
              icon: <Code className="w-5 h-5 text-brand-blue" />,
              accentColor: 'border-slate-200 dark:border-dark-border',
              badgeBg: 'bg-brand-blue/15 text-brand-blue',
            };

            return (
              <motion.div
                key={group.id}
                variants={fadeInUp}
                className="h-full flex"
              >
                <div
                  className={`w-full rounded-2xl p-6 bg-white dark:bg-dark-card border ${theme.accentColor} shadow-md dark:shadow-card-glass flex flex-col justify-between transition-all duration-300 hover:shadow-lg dark:hover:shadow-glow-sm hover:-translate-y-1`}
                >
                  <div>
                    {/* Card Header: Icon + Title + Subtitle */}
                    <div className="flex items-start gap-3.5 pb-4 mb-4 border-b border-slate-100 dark:border-dark-border">
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border shrink-0">
                        {theme.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {group.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-muted mt-0.5 leading-snug">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Skills List inside the card */}
                    <div className="space-y-2.5">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-bg/70 border border-slate-100 dark:border-dark-border/60 flex items-center justify-between gap-2 transition-colors hover:bg-slate-100 dark:hover:bg-dark-cardHover"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-dark-card px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-dark-border/40 shrink-0 text-right max-w-[170px] truncate"
                            title={skill.badge}
                          >
                            {skill.badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Exact count badge */}
                  <div className="pt-4 mt-5 border-t border-slate-100 dark:border-dark-border flex items-center justify-between">
                    <span className={`text-xs font-bold font-mono px-3 py-1.5 rounded-lg ${theme.badgeBg} border border-current/20`}>
                      {group.skills.length} {t.skills.masteredBadge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-dim">
                      {group.skills.length} {t.skills.techCountSuffix}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
