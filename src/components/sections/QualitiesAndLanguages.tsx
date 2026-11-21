import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  ShieldCheck,
  Sparkles,
  Compass,
  Users,
  GraduationCap,
  Languages as LanguagesIcon,
  LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/animations/variants';

const iconList: LucideIcon[] = [
  Brain,
  ShieldCheck,
  Sparkles,
  Compass,
  Users,
  GraduationCap,
];

const langFlags = ['🇲🇬', '🇫🇷', '🇬🇧', '🇩🇪'];
const langPercentages = [100, 90, 75, 40];

export const QualitiesAndLanguages: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="qualities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t.qualities.badge}
          title={t.qualities.title}
          highlightedText={t.qualities.highlight}
          subtitle={t.qualities.subtitle}
        />

        {/* Section 1: Qualities Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-brand-blue" />
            <span>{t.qualities.qualitiesTitle}</span>
          </h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {t.qualities.qualitiesList.map((q, idx) => {
              const IconComponent = iconList[idx % iconList.length];
              return (
                <motion.div key={idx} variants={fadeInUp}>
                  <Card className="p-5 h-full flex flex-col justify-between bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="p-2.5 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-brand-blue shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                          {q.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-muted leading-relaxed">
                          {q.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Section 2: Languages Grid (4 languages: Malagasy, Français, English, Deutsch) */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
            <LanguagesIcon className="w-5 h-5 text-brand-cyan" />
            <span>{t.qualities.languagesTitle}</span>
          </h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {t.qualities.languagesList.map((lang, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="p-5 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl" role="img" aria-label={lang.name}>
                          {langFlags[idx % langFlags.length]}
                        </span>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 dark:text-white">
                            {lang.name}
                          </h4>
                          <span className="text-xs text-brand-blue dark:text-brand-cyan font-mono">
                            {lang.level}
                          </span>
                        </div>
                      </div>
                      <Badge variant="cyan" size="sm">
                        {lang.proficiency}
                      </Badge>
                    </div>

                    {lang.details && (
                      <p className="text-xs text-slate-600 dark:text-slate-muted mb-4 leading-relaxed">
                        {lang.details}
                      </p>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-100 dark:bg-dark-bg h-2 rounded-full overflow-hidden border border-slate-200 dark:border-dark-border">
                    <div
                      className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full transition-all duration-1000"
                      style={{ width: `${langPercentages[idx % langPercentages.length]}%` }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
