import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu, Activity, Sparkles, Layers } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export const TelemetryTicker: React.FC = () => {
  const { t } = useLanguage();

  const iconList = [Activity, Terminal, Cpu, Database, Layers, Sparkles, Activity];

  return (
    <div className="relative w-full overflow-hidden py-3 bg-slate-100/80 dark:bg-dark-card/60 border-y border-slate-200/80 dark:border-dark-border/80 backdrop-blur-md select-none my-6">
      <div className="flex w-max">
        {/* Track 1 */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-8 whitespace-nowrap pr-8 font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold"
        >
          {t.hero.tickerItems.map((text, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div key={idx} className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{text}</span>
                <span className="text-slate-300 dark:text-slate-700 ml-4">•</span>
              </div>
            );
          })}
        </motion.div>

        {/* Track 2 duplicate for seamless loop */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-8 whitespace-nowrap pr-8 font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold"
        >
          {t.hero.tickerItems.map((text, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div key={`dup-${idx}`} className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{text}</span>
                <span className="text-slate-300 dark:text-slate-700 ml-4">•</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
