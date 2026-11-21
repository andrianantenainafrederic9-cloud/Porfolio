import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 relative bg-slate-50/60 dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t.education.badge}
          title={t.education.title}
          highlightedText={t.education.highlight}
          subtitle={t.education.subtitle}
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline central vertical line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan to-slate-300 dark:to-dark-border" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-12"
          >
            {t.education.items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-dark-surface border-2 border-brand-cyan flex items-center justify-center z-10 shadow-sm dark:shadow-glow-sm">
                    <GraduationCap className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <Card className="p-6 relative group bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                      {/* Current Status Pill */}
                      {item.current && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="cyan" size="sm" className="font-mono">
                            {t.education.currentBadge}
                          </Badge>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-dim mb-2 font-mono">
                        <span className="flex items-center gap-1 text-brand-blue font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-brand-blue mb-3">
                        {item.institution}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-muted leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Topic Highlights */}
                      <div className="pt-3 border-t border-slate-100 dark:border-dark-border space-y-1.5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-dim block">
                          {t.education.majorCourses}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.topics.map((topic, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border/60 text-[11px] text-slate-700 dark:text-slate-300 font-medium"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
