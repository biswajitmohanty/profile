'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-card py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">BM</span>
            <span className="text-[#94a3b8] text-sm ml-1 hidden sm:inline">
              / {personalInfo.title.split(' / ')[0]}
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#00d4ff]'
                      : 'text-[#94a3b8] hover:text-white'
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden p-2 rounded-lg glass-card text-[#94a3b8] hover:text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute top-0 right-0 h-full w-72 bg-[#1a1a2e] border-l border-white/10 p-6 pt-20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        activeSection === link.href.slice(1)
                          ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                          : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
