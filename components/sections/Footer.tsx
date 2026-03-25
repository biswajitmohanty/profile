'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/biswajitmohanty',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: `https://${personalInfo.linkedin}`,
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    label: 'Email',
  },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a1a] border-t border-white/5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute left-1/2 bottom-0 w-96 h-48 -translate-x-1/2 rounded-full bg-[#00d4ff]/3 blur-[80px]" />

      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3">
              <span className="gradient-text">BM</span>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed max-w-xs">
              Technical Lead & Full-Stack Architect building scalable enterprise systems with 10+ years of expertise.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-[#64748b] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#64748b] hover:text-[#00d4ff] text-sm transition-colors animated-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-[#64748b] hover:text-[#00d4ff] text-sm transition-colors"
              >
                <Mail size={14} />
                {personalInfo.email}
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#64748b] hover:text-[#00d4ff] text-sm transition-colors"
              >
                <Linkedin size={14} />
                {personalInfo.linkedin}
              </a>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#64748b] text-xs flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart size={12} className="text-red-400 inline" />
            using Next.js & Tailwind CSS
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#64748b] hover:text-[#00d4ff] text-xs transition-colors"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full glass-card flex items-center justify-center">
              <ArrowUp size={12} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
