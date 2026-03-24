'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Tag } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Project = (typeof projects)[0];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="relative glass-card rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{ borderColor: `${project.color}30` }}
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}50)` }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#94a3b8] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="pr-8">
          {/* Category badge */}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border mb-4"
            style={{
              color: project.color,
              borderColor: `${project.color}30`,
              background: `${project.color}10`,
            }}
          >
            <Tag size={10} />
            {project.category}
          </span>

          <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-[#94a3b8] text-base mb-4" style={{ color: project.color }}>
            {project.subtitle}
          </p>

          <p className="text-[#94a3b8] leading-relaxed mb-6">
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}30`,
                    background: `${project.color}10`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}80)` }}
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={14} />
              Discuss This Project
            </motion.a>
            <motion.button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#94a3b8] glass-card hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer relative"
      style={{
        borderColor: `${project.color}20`,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Top color border */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}60)` }}
      />

      {/* Card glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 60%)`,
        }}
      />

      <div className="p-6 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full border mb-2 inline-block"
              style={{
                color: project.color,
                borderColor: `${project.color}30`,
                background: `${project.color}10`,
              }}
            >
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white group-hover:text-[#00d4ff] transition-colors">
              {project.title}
            </h3>
          </div>
          <ExternalLink
            size={16}
            className="text-[#64748b] group-hover:text-[#00d4ff] transition-colors shrink-0 mt-1"
          />
        </div>

        <p
          className="text-sm font-medium mb-3"
          style={{ color: project.color }}
        >
          {project.subtitle}
        </p>

        <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full text-xs border"
              style={{
                color: `${project.color}cc`,
                borderColor: `${project.color}20`,
                background: `${project.color}08`,
              }}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-xs text-[#64748b] bg-white/5">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* View details button */}
        <motion.button
          className="w-full py-2 rounded-lg text-sm font-medium border transition-all duration-200"
          style={{
            color: project.color,
            borderColor: `${project.color}30`,
            background: `${project.color}08`,
          }}
          whileHover={{
            background: `${project.color}20`,
            borderColor: `${project.color}50`,
          }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding bg-[#1a1a2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/5 blur-[80px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// featured work</p>
          <h2 className="section-heading">
            Recent{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]" />
          <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A selection of production-grade applications built across various domains and technology stacks.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
