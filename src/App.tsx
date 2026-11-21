import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { QualitiesAndLanguages } from '@/components/sections/QualitiesAndLanguages';
import { Contact } from '@/components/sections/Contact';
import { CVModal } from '@/components/ui/CVModal';
import { BackToTop } from '@/components/ui/BackToTop';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { FuturisticHUDDecorations } from '@/components/ui/FuturisticHUDDecorations';
import { LanguageProvider } from '@/context/LanguageContext';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';

export const AppContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const sectionIds = [
    'home',
    'about',
    'skills',
    'projects',
    'education',
    'qualities',
    'contact',
  ];

  const activeSection = useActiveSection(sectionIds, 150);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-main selection:bg-brand-blue selection:text-white overflow-x-hidden font-sans transition-colors duration-300">
      {/* Dynamic Animated Gradient Background, Particles & Negative Space HUD */}
      <AnimatedBackground />
      <ParticleBackground />
      <FuturisticHUDDecorations />

      {/* Main Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <QualitiesAndLanguages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back-to-Top Arrow with Scroll Progress Ring */}
      <BackToTop />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
