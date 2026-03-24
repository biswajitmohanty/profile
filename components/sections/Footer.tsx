'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/biswajit-mohanty', label: 'GitHub' },
  { icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0a1a] border-t border-white/5 py-12">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col items-center text-center gap-8 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold gradient-text mb-2">Biswajit Mohanty</div>
            <p className="text-[#64748b] text-sm">Technical Lead · Full-Stack Architect · Cloud Engineer</p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            aria-label="Footer navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors animated-underline"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[#64748b] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>
            © {new Date().getFullYear()} Biswajit Mohanty. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Built with React &amp; <Heart size={12} className="text-red-400 fill-red-400" /> by Biswajit
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#64748b] hover:text-[#00d4ff] transition-colors"
            whileHover={{ y: -2 }}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
