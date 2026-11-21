import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { TiltCard } from '@/components/ui/TiltCard';
import { useLanguage } from '@/hooks/useLanguage';
import { TranslatedProject } from '@/i18n/translations';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<TranslatedProject | null>(null);
  const { t } = useLanguage();

  const filters = [
    { label: t.projects.all, value: 'All' },
    { label: t.projects.fullstack, value: 'Full-Stack' },
    { label: t.projects.backendWeb, value: 'Backend / Web' },
    { label: t.projects.dataScienceAI, value: 'Data Science & IA' },
  ];

  const filteredProjects = t.projects.items.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t.projects.badge}
          title={t.projects.title}
          highlightedText={t.projects.highlight}
          subtitle={t.projects.subtitle}
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => {
            const isActive = selectedFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-glow-sm scale-105'
                    : 'bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white hover:border-brand-blue/30'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid with 3D Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="h-full flex"
              >
                <TiltCard
                  maxRotation={8}
                  glareEffect={true}
                  className="flex flex-col justify-between w-full p-6 sm:p-7 group bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-md"
                >
                  <div>
                    {/* Top Aesthetic Banner / Tech Terminal with Image Zoom Hover */}
                    <div className="w-full h-40 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 mb-6 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-brand-blue/50 transition-colors shadow-inner">
                      {/* Window Dots */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <Badge variant="cyan" size="sm">
                          {project.category}
                        </Badge>
                      </div>

                      {/* Tech Code Visual Text with Zoom Effect */}
                      <div className="flex flex-col items-center justify-center text-center my-auto transition-transform duration-300 group-hover:scale-105">
                        <Terminal className="w-6 h-6 text-brand-blue mb-1 opacity-90 group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-xs text-brand-cyan font-semibold">
                          {project.imagePlaceholderText}
                        </span>
                      </div>

                      {/* Subtle Grid Accent */}
                      <div className="text-[10px] text-slate-400 font-mono text-right">
                        project::{project.id}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-muted text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-200 dark:border-dark-border flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs sm:text-sm font-semibold text-brand-blue dark:text-brand-cyan hover:underline transition-colors flex items-center gap-1.5"
                    >
                      <span>{t.projects.detailsArchitecture}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-dark-card hover:bg-slate-200 dark:hover:bg-dark-cardHover border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-muted hover:text-slate-900 dark:hover:text-white transition-colors"
                      title={t.projects.githubLink}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Details Modal */}
        <Modal
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject ? activeModalProject.title : ''}
        >
          {activeModalProject && (
            <div className="space-y-6">
              {/* Category & Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="cyan">{activeModalProject.category}</Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-dim font-mono">
                    ID : {activeModalProject.id}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                  {activeModalProject.longDescription}
                </p>
              </div>

              {/* Architectural Breakdown */}
              {activeModalProject.architecture && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border space-y-3">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-brand-blue dark:text-brand-cyan flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    {t.projects.archStackTitle}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {activeModalProject.architecture.frontend && (
                      <div>
                        <span className="text-slate-500 dark:text-slate-dim block">Frontend :</span>
                        <span className="text-slate-800 dark:text-slate-200 font-medium">
                          {activeModalProject.architecture.frontend}
                        </span>
                      </div>
                    )}
                    {activeModalProject.architecture.backend && (
                      <div>
                        <span className="text-slate-500 dark:text-slate-dim block">Backend :</span>
                        <span className="text-slate-800 dark:text-slate-200 font-medium">
                          {activeModalProject.architecture.backend}
                        </span>
                      </div>
                    )}
                    {activeModalProject.architecture.database && (
                      <div>
                        <span className="text-slate-500 dark:text-slate-dim block">Database :</span>
                        <span className="text-slate-800 dark:text-slate-200 font-medium">
                          {activeModalProject.architecture.database}
                        </span>
                      </div>
                    )}
                    {activeModalProject.architecture.devops && (
                      <div>
                        <span className="text-slate-500 dark:text-slate-dim block">DevOps :</span>
                        <span className="text-slate-800 dark:text-slate-200 font-medium">
                          {activeModalProject.architecture.devops}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Key Technical Highlights */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                  {t.projects.keyHighlightsTitle}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {activeModalProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies List */}
              <div className="pt-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-dim mb-2">
                  {t.projects.technologiesTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((tech) => (
                    <Badge key={tech} variant="primary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-dark-border flex items-center justify-end gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setActiveModalProject(null)}
                >
                  {t.projects.modalClose}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  href={personalInfo.github}
                  target="_blank"
                  icon={<Github className="w-4 h-4" />}
                >
                  {t.projects.modalGithub}
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
