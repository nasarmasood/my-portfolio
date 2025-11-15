'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface GradientGlowProps {
  color?: 'purple' | 'blue' | 'green' | 'pink' | 'orange' | 'cyan';
  size?: 'small' | 'medium' | 'large';
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  opacity?: number;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

const colorVariants = {
  purple: 'bg-[radial-gradient(ellipse,_rgba(165,61,255,0.4)_0%,_rgba(165,61,255,0.1)_50%,_transparent_70%)]',
  blue: 'bg-[radial-gradient(ellipse,_rgba(59,130,246,0.4)_0%,_rgba(59,130,246,0.1)_50%,_transparent_70%)]',
  green: 'bg-[radial-gradient(ellipse,_rgba(34,197,94,0.4)_0%,_rgba(34,197,94,0.1)_50%,_transparent_70%)]',
  pink: 'bg-[radial-gradient(ellipse,_rgba(236,72,153,0.4)_0%,_rgba(236,72,153,0.1)_50%,_transparent_70%)]',
  orange: 'bg-[radial-gradient(ellipse,_rgba(249,115,22,0.4)_0%,_rgba(249,115,22,0.1)_50%,_transparent_70%)]',
  cyan: 'bg-[radial-gradient(ellipse,_rgba(6,182,212,0.4)_0%,_rgba(6,182,212,0.1)_50%,_transparent_70%)]',
};

const sizeVariants = {
  small: 'w-[300px] h-[300px]',
  medium: 'w-[500px] h-[500px]',
  large: 'w-[800px] h-[800px]',
};

const blurVariants = {
  sm: 'blur-xl',
  md: 'blur-2xl',
  lg: 'blur-3xl',
  xl: 'blur-[100px]',
};

export default function GradientGlow({
  color = 'purple',
  size = 'medium',
  position = {},
  opacity = 0.6,
  blur = 'xl',
  animate = true,
}: GradientGlowProps) {
  const positionStyles = {
    top: position.top || 'auto',
    left: position.left || 'auto',
    right: position.right || 'auto',
    bottom: position.bottom || 'auto',
  };

  const glowContent = (
    <div
      className={`${sizeVariants[size]} ${colorVariants[color]} ${blurVariants[blur]} pointer-events-none`}
      style={{
        opacity,
      }}
    />
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [opacity * 0.6, opacity, opacity * 0.6],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute pointer-events-none z-0"
        style={{
          ...positionStyles,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {glowContent}
      </motion.div>
    );
  }

  return (
    <div 
      className="absolute pointer-events-none z-0"
      style={{
        ...positionStyles,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {glowContent}
    </div>
  );
}

