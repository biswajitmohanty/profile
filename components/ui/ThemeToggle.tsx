'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

export default function ThemeToggle() {
  // Portfolio is dark-only by design, but toggle can switch accent colors
  const [isDark, setIsDark] = useState(true);

  const toggle = () => {
    setIsDark(!isDark);
    // In a real implementation, this would toggle the theme
    // For now it's a visual toggle
  };

  return (
    <motion.button
      onClick={toggle}
      className="relative w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180, opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon size={18} />
      </motion.div>
      <motion.div
        animate={{ rotate: isDark ? -180 : 0, opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.div>
    </motion.button>
  );
}
