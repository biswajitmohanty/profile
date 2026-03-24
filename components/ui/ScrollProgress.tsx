'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
      style={{
        background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
        scaleX: progress / 100,
        transformOrigin: '0%',
      }}
      initial={{ scaleX: 0 }}
    />
  );
}
