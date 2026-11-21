import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  AlertCircle,
  MessageSquare,
  FileText,
  Clock,
  DollarSign,
  CheckSquare,
  Paperclip,
  Loader2,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { ProjectInquiryFormData } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ProjectInquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    projectType: t.contact.projectTypes[0] || 'Application web sur mesure',
    services: [t.contact.services[0] || 'Développement full-stack'],
    budget: t.contact.budgetOptions[t.contact.budgetOptions.length - 1] || 'À discuter',
    timeline: t.contact.timelineOptions[1] || '1 mois',
    projectState: t.contact.projectStates[1] || 'Besoin défini',
    description: '',
    attachmentsNote: '',
    preferredContactMethod: t.contact.contactMethods[0] || 'E-mail',
    additionalMessage: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const updated = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updated };
    });
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = t.contact.errors.fullNameRequired;
    if (!formData.email.trim()) {
      errs.email = t.contact.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.contact.errors.emailInvalid;
    }
    if (!formData.description.trim()) {
      errs.description = t.contact.errors.descRequired;
    } else if (formData.description.trim().length < 15) {
      errs.description = t.contact.errors.descMinLength;
    }
    if (!formData.termsAccepted) {
      errs.termsAccepted = t.contact.errors.termsRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const subject = `[Project Inquiry] ${formData.projectType} — ${formData.fullName}`;
      const body = `PROJECT INQUIRY / DEVIS / ANFRAGE

CONTACT DETAILS:
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone || 'N/A'}
- Company: ${formData.company || 'N/A'}
- Role: ${formData.role || 'N/A'}

PROJECT DETAILS:
- Type: ${formData.projectType}
- Stage: ${formData.projectState}
- Estimated Budget: ${formData.budget}
- Timeline: ${formData.timeline}
- Preferred Contact: ${formData.preferredContactMethod}

SERVICES REQUESTED:
${formData.services.length > 0 ? formData.services.map((s) => `• ${s}`).join('\n') : 'N/A'}

DESCRIPTION:
${formData.description}

ATTACHMENTS / LINKS:
${formData.attachmentsNote || 'None'}

ADDITIONAL NOTES:
${formData.additionalMessage || 'None'}`;

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.open(mailtoUrl, '_blank');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/70 dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t.contact.badge}
          title={t.contact.title}
          highlightedText={t.contact.highlight}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-4 space-y-4"
          >
            {/* Direct Email Card with copy */}
            <motion.div variants={fadeInUp}>
              <Card className="p-5 flex items-center justify-between group bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-brand-blue/15 text-brand-blue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-dim font-mono block">
                      {t.contact.emailDirect}
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-blue transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  title={t.contact.copyTooltip}
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </Card>
            </motion.div>

            {/* WhatsApp & Phone Card */}
            <motion.div variants={fadeInUp}>
              <Card className="p-5 flex items-center justify-between bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-dim font-mono block">
                      {t.contact.phoneWhatsapp}
                    </span>
                    <a
                      href={`https://wa.me/261385900080`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`https://wa.me/261385900080?text=Hello%20Frédéric...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition-colors"
                >
                  WhatsApp
                </a>
              </Card>
            </motion.div>

            {/* Location Card */}
            <motion.div variants={fadeInUp}>
              <Card className="p-5 flex items-center gap-3.5 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                <div className="p-3 rounded-xl bg-indigo-500/15 text-indigo-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-dim font-mono block">
                    {t.contact.location}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.personalInfo.location}
                  </span>
                </div>
              </Card>
            </motion.div>

            {/* Social Cards */}
            <motion.div variants={fadeInUp}>
              <Card className="p-5 space-y-3 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-dim block">
                  {t.contact.socialTitle}
                </span>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border hover:border-brand-blue/50 text-slate-800 dark:text-slate-200 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-brand-blue" />
                      <span className="text-xs font-medium">LinkedIn</span>
                    </div>
                    <span className="text-xs text-brand-blue font-semibold">&rarr;</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border hover:border-brand-blue/50 text-slate-800 dark:text-slate-200 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      <span className="text-xs font-mono">github/{personalInfo.githubUsername}</span>
                    </div>
                    <span className="text-xs text-brand-blue font-semibold">&rarr;</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column: Full Project Inquiry Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-8"
          >
            <Card className="p-6 sm:p-8 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-200 dark:border-dark-border">
                <MessageSquare className="w-5 h-5 text-brand-blue" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {t.contact.formTitle}
                </h3>
              </div>

              {isSubmitted && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">
                      {t.contact.successMessage}
                    </p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">
                      {t.contact.successSub}{' '}
                      <span className="font-mono font-bold">{personalInfo.phone}</span>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                {/* 1. Vos Informations */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-blue mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> {t.contact.section1}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.fullName} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.contact.fullNamePlaceholder}
                        className={`w-full bg-slate-50 dark:bg-dark-bg border ${
                          errors.fullName ? 'border-red-500' : 'border-slate-200 dark:border-dark-border'
                        } rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors`}
                      />
                      {errors.fullName && (
                        <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@example.com"
                        className={`w-full bg-slate-50 dark:bg-dark-bg border ${
                          errors.email ? 'border-red-500' : 'border-slate-200 dark:border-dark-border'
                        } rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.phone}
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+261 38 59 000 80"
                        className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.company}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.role}
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder={t.contact.rolePlaceholder}
                        className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Type de Projet */}
                <div className="pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-blue mb-3">
                    {t.contact.section2}
                  </h4>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors"
                  >
                    {t.contact.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Services Souhaités */}
                <div className="pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-blue mb-2">
                    {t.contact.section3}
                  </h4>
                  <p className="text-xs text-slate-500 mb-2">{t.contact.section3Sub}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t.contact.services.map((service) => {
                      const isChecked = formData.services.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                            isChecked
                              ? 'bg-brand-blue/15 border-brand-blue text-brand-blue font-semibold'
                              : 'bg-slate-50 dark:bg-dark-bg border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isChecked ? 'bg-brand-blue border-brand-blue text-white' : 'border-slate-400'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{service}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Budget & Délai & État */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-brand-blue" /> {t.contact.section4Budget}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                    >
                      {t.contact.budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-blue" /> {t.contact.section4Timeline}
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                    >
                      {t.contact.timelineOptions.map((timelineOpt) => (
                        <option key={timelineOpt} value={timelineOpt}>
                          {timelineOpt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                      <CheckSquare className="w-3.5 h-3.5 text-brand-blue" /> {t.contact.section4State}
                    </label>
                    <select
                      value={formData.projectState}
                      onChange={(e) => setFormData({ ...formData, projectState: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                    >
                      {t.contact.projectStates.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 5. Description du projet */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.contact.section5Description} <span className="text-red-500">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    {t.contact.section5Sub}
                  </p>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={t.contact.section5Placeholder}
                    className={`w-full bg-slate-50 dark:bg-dark-bg border ${
                      errors.description ? 'border-red-500' : 'border-slate-200 dark:border-dark-border'
                    } rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors resize-none`}
                  />
                  {errors.description && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.description}
                    </span>
                  )}
                </div>

                {/* 6. Pièces jointes & Contact Préféré */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                      <Paperclip className="w-3.5 h-3.5 text-brand-blue" /> {t.contact.section6Attachments}
                    </label>
                    <input
                      type="text"
                      value={formData.attachmentsNote}
                      onChange={(e) => setFormData({ ...formData, attachmentsNote: e.target.value })}
                      placeholder={t.contact.section6Placeholder}
                      className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contact.section6ContactMethod}
                    </label>
                    <div className="flex gap-2">
                      {t.contact.contactMethods.map((method) => (
                        <button
                          type="button"
                          key={method}
                          onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                          className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all border ${
                            formData.preferredContactMethod === method
                              ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                              : 'bg-slate-50 dark:bg-dark-bg border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 7. Informations complémentaires */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.contact.section7Additional}
                  </label>
                  <input
                    type="text"
                    value={formData.additionalMessage}
                    onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                    placeholder={t.contact.section7Placeholder}
                    className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                  />
                </div>

                {/* 8. Case d'acceptation obligatoire */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-brand-blue focus:ring-brand-blue border-slate-300"
                    />
                    <span className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                      {t.contact.termsCheckbox}<span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.termsAccepted && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.termsAccepted}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 dark:text-slate-dim">
                    {t.contact.replyGuarantee}
                  </p>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                  >
                    {isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
