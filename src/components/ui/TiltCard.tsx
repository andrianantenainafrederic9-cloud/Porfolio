import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // Maximum tilt angle in degrees (default 10)
  glareEffect?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  maxRotation = 10,
  glareEffect = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse position in range [-0.5, 0.5] relative to card dimensions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 20, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform to 3D rotation angles
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxRotation, -maxRotation]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxRotation, maxRotation]);

  // Spotlight glare coordinates
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);

    if (glareEffect) {
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          'relative rounded-2xl glass-panel overflow-hidden transition-shadow duration-300',
          isHovered && 'shadow-glow-md border-brand-blue/50 dark:border-brand-blue/50',
          className
        )}
      >
        {/* 3D Content Container */}
        <div style={{ transform: 'translateZ(20px)' }} className="h-full flex flex-col justify-between">
          {children}
        </div>

        {/* Dynamic Glare Spotlight Effect */}
        {glareEffect && isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 220px at ${glarePosition.x}% ${glarePosition.y}%, rgba(59, 130, 246, 0.15), transparent 70%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};
