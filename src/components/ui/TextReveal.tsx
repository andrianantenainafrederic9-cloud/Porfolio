import React from 'react';
import { motion } from 'framer-motion';
import { textRevealContainer, textRevealItem } from '@/animations/variants';

export interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
}) => {
  const words = text.split(' ');

  return (
    <motion.span
      variants={textRevealContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className || ''}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-2 last:mr-0">
          <motion.span variants={textRevealItem} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
