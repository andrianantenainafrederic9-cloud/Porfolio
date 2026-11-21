import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Printer,
  FileDown,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';
import { modalVariants } from '@/animations/variants';

export interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const cvPdfUrl = `/cv/CV_ANDRIANANTENAINA_Frederic_${language.toUpperCase()}.pdf`;
  const cvPdfFileName = `CV_ANDRIANANTENAINA_Frederic_${language.toUpperCase()}.pdf`;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-bg/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-4xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-2xl shadow-2xl z-10 my-4 max-h-[94vh] flex flex-col text-slate-800 dark:text-slate-100 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-card/80 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {t.cvModal.title} — {personalInfo.fullName}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {/* Direct Automatic PDF Download */}
              <a
                href={cvPdfUrl}
                download={cvPdfFileName}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
                title={t.cvModal.downloadTitle}
              >
                <FileDown className="w-4 h-4" />
                <span className="hidden sm:inline">{t.cvModal.downloadBtn}</span>
              </a>

              {/* Open PDF in New Tab */}
              <a
                href={cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-dark-card hover:bg-slate-300 dark:hover:bg-dark-cardHover text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                title={t.cvModal.openPdfTitle}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t.cvModal.openPdfBtn}</span>
              </a>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">{t.cvModal.printBtn}</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-dark-card transition-colors ml-1"
                aria-label={t.cvModal.closeBtn}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Content (Faithful reproduction of user's 2-column layout) */}
          <div className="overflow-y-auto p-4 sm:p-6 bg-slate-100 dark:bg-dark-bg/60">
            <div className="max-w-3xl mx-auto bg-white text-slate-900 shadow-xl rounded-xl overflow-hidden border border-slate-200 print:border-none print:shadow-none grid grid-cols-1 md:grid-cols-12 min-h-[900px]">
              {/* Left Column: Dark Navy Sidebar (Identical to uploaded CV) */}
              <div className="md:col-span-4 bg-[#1f2b3e] text-slate-100 p-6 flex flex-col justify-between space-y-6">
                <div>
                  {/* Circular Bordered Photo */}
                  <div className="flex justify-center mb-5 pointer-events-none select-none">
                    <div className="w-32 h-32 rounded-full border-4 border-white/90 overflow-hidden shadow-lg bg-slate-800 pointer-events-none select-none">
                      <img
                        src="/images/frederic.jpg"
                        alt={personalInfo.fullName}
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                        className="w-full h-full object-cover object-top select-none pointer-events-none block cursor-default"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-center pb-4 border-b border-slate-600/60">
                    <h1 className="text-lg font-extrabold tracking-wider leading-tight uppercase">
                      ANDRIANANTENAINA <br />
                      <span className="text-brand-cyan">FRÉDERIC</span>
                    </h1>
                  </div>

                  {/* Program Subtitle */}
                  <div className="text-center py-3 border-b border-slate-600/60">
                    <p className="text-xs font-bold tracking-wide text-slate-200 uppercase">
                      {t.cvModal.degreeLevel}
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="py-4 border-b border-slate-600/60 space-y-2.5 text-xs text-slate-300">
                    <h3 className="font-bold uppercase tracking-wider text-white text-[11px] mb-2">
                      {t.cvModal.contactTitle}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span className="break-all">{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span>{t.cvModal.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span className="break-all text-[11px]">andrianantenaina-frederic-101789309</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span className="text-[11px]">andrianantenainafrederic9-cloud</span>
                    </div>
                  </div>

                  {/* Qualités */}
                  <div className="py-4 border-b border-slate-600/60 text-xs text-slate-300">
                    <h3 className="font-bold uppercase tracking-wider text-white text-[11px] mb-2">
                      {t.cvModal.qualitiesTitle}
                    </h3>
                    <ul className="space-y-1 pl-1">
                      {t.cvModal.qualities.map((item, idx) => (
                        <li key={idx}>- {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Centres d'intérêt */}
                  <div className="pt-4 text-xs text-slate-300">
                    <h3 className="font-bold uppercase tracking-wider text-white text-[11px] mb-2">
                      {t.cvModal.interestsTitle}
                    </h3>
                    <ul className="space-y-1 pl-1">
                      {t.cvModal.interests.map((item, idx) => (
                        <li key={idx}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Clear Main Content (Identical to uploaded CV) */}
              <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-5 text-slate-800 text-xs leading-relaxed">
                {/* Header Tagline */}
                <div className="text-right italic text-[11px] text-slate-600 pb-2">
                  {t.cvModal.tagline}
                </div>

                {/* 1. Profil Personnel */}
                <div>
                  <div className="bg-[#f5e9d5] text-[#2c3e50] font-bold px-3 py-1 uppercase text-xs tracking-wider mb-2 rounded-sm">
                    {t.cvModal.profileTitle}
                  </div>
                  <p className="text-justify text-slate-700 leading-normal">
                    {t.cvModal.profileText}
                  </p>
                </div>

                {/* 2. Compétences Techniques */}
                <div>
                  <div className="bg-[#f5e9d5] text-[#2c3e50] font-bold px-3 py-1 uppercase text-xs tracking-wider mb-2 rounded-sm">
                    {t.cvModal.skillsTitle}
                  </div>
                  <div className="space-y-1.5 text-slate-700 text-[11px]">
                    <p>
                      <strong className="text-slate-900">{t.cvModal.skillsFrontendLabel} :</strong> {t.cvModal.skillsFrontendList}
                    </p>
                    <p>
                      <strong className="text-slate-900">{t.cvModal.skillsBackendLabel} :</strong> {t.cvModal.skillsBackendList}
                    </p>
                    <p>
                      <strong className="text-slate-900">{t.cvModal.skillsDatabasesLabel} :</strong> {t.cvModal.skillsDatabasesList}
                    </p>
                    <p>
                      <strong className="text-slate-900">{t.cvModal.skillsDataAILabel} :</strong> {t.cvModal.skillsDataAIList}
                    </p>
                    <p>
                      <strong className="text-slate-900">{t.cvModal.skillsMobileLabel} :</strong> {t.cvModal.skillsMobileList}
                    </p>
                    <p>
                      <strong className="text-slate-900">{t.cvModal.skillsDevOpsLabel} :</strong> {t.cvModal.skillsDevOpsList}
                    </p>
                  </div>
                </div>

                {/* 3. Projets Académiques */}
                <div>
                  <div className="bg-[#f5e9d5] text-[#2c3e50] font-bold px-3 py-1 uppercase text-xs tracking-wider mb-2 rounded-sm">
                    {t.cvModal.projectsTitle}
                  </div>
                  <div className="space-y-2.5 text-slate-700 text-[11px]">
                    {t.cvModal.projects.map((proj, idx) => (
                      <div key={idx}>
                        <p className="font-bold text-slate-900">
                          {proj.title} <span className="font-normal text-slate-600">| {proj.stack}</span>
                        </p>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
                          {proj.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Formation */}
                <div>
                  <div className="bg-[#f5e9d5] text-[#2c3e50] font-bold px-3 py-1 uppercase text-xs tracking-wider mb-2 rounded-sm">
                    {t.cvModal.educationTitle}
                  </div>
                  <div className="space-y-1 text-slate-700 text-[11px]">
                    {t.cvModal.educationItems.map((edu, idx) => (
                      <p key={idx}>
                        • <strong className="text-slate-900">{edu.degree}</strong>
                        {edu.school && <> | <em>{edu.school}</em></>}
                        {edu.period && <> | {edu.period}</>}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 5. Langues */}
                <div>
                  <div className="bg-[#f5e9d5] text-[#2c3e50] font-bold px-3 py-1 uppercase text-xs tracking-wider mb-2 rounded-sm">
                    {t.cvModal.languagesTitle}
                  </div>
                  <div className="space-y-0.5 text-slate-700 text-[11px]">
                    {t.cvModal.languages.map((lang, idx) => (
                      <p key={idx}>
                        <strong className="text-slate-900">{lang.name} :</strong> {lang.level}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3 border-t border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-card/80 flex items-center justify-between text-xs shrink-0">
            <span className="text-slate-500 font-mono">
              {t.cvModal.officialResumeLabel}
            </span>

            <div className="flex items-center gap-2">
              <a
                href={cvPdfUrl}
                download={cvPdfFileName}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{t.cvModal.downloadBtn}</span>
              </a>

              <button
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-lg bg-slate-200 dark:bg-dark-card hover:bg-slate-300 dark:hover:bg-dark-cardHover font-medium transition-colors"
              >
                {t.cvModal.closeBtn}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
