import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Compass,
  Code2,
  Database,
  Cpu,
  Layers,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CountUp } from '@/components/ui/CountUp';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  const pillarIcons = [
    <Database key="db" className="w-5 h-5 text-brand-blue" />,
    <Code2 key="code" className="w-5 h-5 text-brand-cyan" />,
    <Layers key="layers" className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    <Cpu key="cpu" className="w-5 h-5 text-sky-500 dark:text-sky-400" />,
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t.about.badge}
          title={t.about.title}
          highlightedText={t.about.highlight}
          subtitle={t.about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Biography */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 space-y-6"
          >
            <Card className="p-6 sm:p-8 space-y-5 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
              {/* Header for Bio */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-dark-border pb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-blue dark:text-brand-cyan" />
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.about.profilePresentation}
                  </span>
                </div>

                <Badge variant="cyan" size="sm">
                  {language.toUpperCase()}
                </Badge>
              </div>

              {/* Bio content */}
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                {t.about.bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Dynamically Translated Highlight Badges */}
              <div className="pt-4 border-t border-slate-200 dark:border-dark-border flex flex-wrap gap-2">
                {t.about.highlightBadges.map((badgeText, idx) => (
                  <Badge key={idx} variant={idx === 0 ? 'primary' : idx === 1 ? 'cyan' : 'neutral'}>
                    {badgeText}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Quick Stats Grid with CountUp Animation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card hoverEffect={false} className="p-4 text-center bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyan font-mono">
                  M1
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-muted mt-1">{t.about.studyLevel}</div>
              </Card>

              <Card hoverEffect={false} className="p-4 text-center bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue font-mono">
                  <CountUp end={4} duration={1.5} />
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-muted mt-1">{t.about.keyDomains}</div>
              </Card>

              <Card hoverEffect={false} className="p-4 text-center bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-500 dark:text-indigo-400 font-mono">
                  <CountUp end={3} duration={1.5} suffix="+" />
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-muted mt-1">{t.about.projectPillars}</div>
              </Card>

              <Card hoverEffect={false} className="p-4 text-center bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                  <CountUp end={100} duration={2} suffix="%" />
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-muted mt-1">{t.about.motivation}</div>
              </Card>
            </div>
          </motion.div>

          {/* Right Column: Key Areas & Strengths with Scroll Reveal */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-blue" />
              {t.about.pillarsTitle}
            </h3>

            {t.about.pillars.map((pillar, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-4.5 sm:p-5 flex items-start gap-4 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:scale-[1.02] transition-transform">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border shrink-0">
                    {pillarIcons[index % pillarIcons.length]}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-muted leading-relaxed">
                      {pillar.desc}
                    </p>
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
