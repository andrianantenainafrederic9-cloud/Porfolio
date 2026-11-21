import React from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  Eye,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Database,
  Cpu,
  Terminal,
  Layers,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Badge } from '@/components/ui/Badge';
import { Typewriter } from '@/components/ui/Typewriter';
import { TextReveal } from '@/components/ui/TextReveal';
import { TelemetryTicker } from '@/components/ui/TelemetryTicker';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const { t, language } = useLanguage();

  const pillarIcons = [
    <Database key="db" className="w-4 h-4" />,
    <Cpu key="cpu" className="w-4 h-4" />,
    <Terminal key="term" className="w-4 h-4" />,
    <Layers key="layers" className="w-4 h-4" />,
  ];

  const pillarColors = [
    'bg-brand-blue/15 text-brand-blue',
    'bg-brand-cyan/15 text-brand-cyan',
    'bg-indigo-500/15 text-indigo-500 dark:text-indigo-400',
    'bg-sky-500/15 text-sky-500 dark:text-sky-400',
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Academic Status Badge */}
            <motion.div variants={fadeInUp} className="inline-block">
              <Badge variant="cyan" size="md" className="gap-2 py-1.5 px-3.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="font-semibold text-xs sm:text-sm">
                  {t.hero.statusBadge}
                </span>
              </Badge>
            </motion.div>

            {/* Name & Headline with Text Reveal */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {t.hero.greeting} <br />
                <span className="text-gradient-primary">
                  <TextReveal text={personalInfo.fullName} />
                </span>
              </h1>

              {/* Dynamic specialty Typewriter using active language words */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 h-10 font-mono">
                <span className="text-brand-blue dark:text-brand-cyan">&gt;</span>
                <Typewriter
                  words={t.personalInfo.specialties}
                  className="text-brand-blue dark:text-brand-cyan"
                />
              </div>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t.hero.shortBio}
            </motion.p>

            {/* Location & Quick Meta */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-dim font-medium"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>{t.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>{t.hero.availableBadge}</span>
              </div>
            </motion.div>

            {/* Magnetic CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <MagneticButton
                variant="primary"
                size="lg"
                href="#projects"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                {t.hero.exploreProjects}
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                size="lg"
                href="#contact"
                icon={<Mail className="w-5 h-5" />}
              >
                {t.hero.requestQuote}
              </MagneticButton>

              {/* Direct Automatic PDF Download */}
              <MagneticButton
                variant="outline"
                size="lg"
                href={`/cv/CV_ANDRIANANTENAINA_Frederic_${language.toUpperCase()}.pdf`}
                download={`CV_ANDRIANANTENAINA_Frederic_${language.toUpperCase()}.pdf`}
                icon={<FileDown className="w-5 h-5" />}
                title={language === 'fr' ? 'Télécharger directement le CV en PDF' : language === 'en' ? 'Download authentic PDF resume' : 'Originalen PDF-Lebenslauf herunterladen'}
              >
                {language === 'fr' ? 'Télécharger CV' : language === 'en' ? 'Download CV' : 'Lebenslauf (PDF)'}
              </MagneticButton>

              {/* Quick Preview Modal Button */}
              <MagneticButton
                variant="ghost"
                size="lg"
                onClick={onOpenCV}
                icon={<Eye className="w-5 h-5" />}
                title="Aperçu rapide du CV"
              >
                {t.hero.previewCV}
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-200 dark:border-dark-border/60"
            >
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-dim">
                {t.hero.followMe}
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white hover:border-brand-blue/60 transition-all shadow-sm hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white hover:border-brand-blue/60 transition-all shadow-sm hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white hover:border-brand-blue/60 transition-all shadow-sm hover:scale-110"
                aria-label="Email Direct"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Clean, Stable Photo Frame & Technical Pillars */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={fadeInUp}
              className="relative w-full max-w-md"
            >
              {/* Outer Card with Glassmorphism */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 relative shadow-xl dark:shadow-2xl border border-slate-200 dark:border-dark-border/80">
                {/* Decorative Window Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-dark-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-dim">
                    frederic@eni-fianar:~
                  </span>
                </div>

                {/* Profile Photo: Formal CV suit & tie photo, perfectly centered, circular, sharp, still and completely non-clickable */}
                <div className="flex flex-col items-center text-center space-y-4 mb-6 select-none pointer-events-none">
                  <div className="relative pointer-events-none select-none">
                    {/* Circular photo container matching official CV styling */}
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-brand-blue via-brand-cyan to-indigo-600 p-1 shadow-2xl flex items-center justify-center pointer-events-none select-none">
                      <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center pointer-events-none select-none">
                        <img
                          src="/images/frederic.jpg"
                          alt={personalInfo.fullName}
                          draggable={false}
                          onDragStart={(e) => e.preventDefault()}
                          className="w-full h-full object-cover object-center select-none pointer-events-none block cursor-default"
                        />
                      </div>
                    </div>

                    {/* Status Pill below photo */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-[10px] text-emerald-300 font-semibold flex items-center gap-1 shadow-sm whitespace-nowrap pointer-events-none select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      {t.hero.photoStatus}
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                      {personalInfo.fullName}
                    </h3>
                    <p className="text-xs text-brand-blue dark:text-brand-cyan font-mono font-semibold">
                      {t.personalInfo.institution}
                    </p>
                  </div>
                </div>

                {/* Domain Pillars (dynamically translated) */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {t.hero.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-dark-card/60 border border-slate-200 dark:border-dark-border flex items-center gap-2.5 transition-transform hover:scale-105"
                    >
                      <div className={`p-2 rounded-lg ${pillarColors[idx % pillarColors.length]}`}>
                        {pillarIcons[idx % pillarIcons.length]}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 dark:text-white">
                          {pillar.title}
                        </p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-dim font-mono">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Data Telemetry Ticker Ribbon in Empty Vertical Space */}
      <div className="w-full relative z-10 mt-8">
        <TelemetryTicker />
      </div>
    </section>
  );
};
