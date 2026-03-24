'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowUpRight, Tag } from 'lucide-react';
import { blogPosts } from '@/data/portfolio';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  color: string;
  featured: boolean;
}

function BlogCard({
  post,
  index,
  featured = false,
}: {
  post: BlogPost;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      className={`group relative glass-card rounded-2xl p-6 overflow-hidden flex flex-col gap-4 cursor-pointer
        ${featured ? 'lg:col-span-2 lg:flex-row lg:gap-8' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${post.color}18 0%, transparent 65%)`,
        }}
      />

      {/* Category pill + read time */}
      <div className={`flex items-center gap-3 flex-wrap ${featured ? 'lg:hidden' : ''}`}>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full border"
          style={{
            color: post.color,
            borderColor: `${post.color}40`,
            background: `${post.color}12`,
            fontVariationSettings: "'wght' 600",
          }}
        >
          {post.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-[#64748b]">
          <Clock size={11} />
          {post.readTime}
        </span>
        <span className="flex items-center gap-1 text-xs text-[#64748b]">
          <Calendar size={11} />
          {post.date}
        </span>
      </div>

      {/* Featured left column */}
      {featured && (
        <div className="hidden lg:flex flex-col justify-between min-w-[180px]">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full border w-fit"
            style={{
              color: post.color,
              borderColor: `${post.color}40`,
              background: `${post.color}12`,
              fontVariationSettings: "'wght' 600",
            }}
          >
            {post.category}
          </span>
          <div className="space-y-2">
            <span className="flex items-center gap-1 text-xs text-[#64748b]">
              <Clock size={11} />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#64748b]">
              <Calendar size={11} />
              {post.date}
            </span>
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ borderColor: `${post.color}40`, background: `${post.color}12` }}
          >
            <ArrowUpRight size={18} style={{ color: post.color }} />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1 relative z-10">
        <h3
          className={`font-bold text-white leading-snug group-hover:text-[var(--accent)] transition-colors ${
            featured ? 'text-xl lg:text-2xl' : 'text-base lg:text-lg'
          }`}
          style={{ fontVariationSettings: featured ? "'wght' 700" : "'wght' 600" }}
        >
          {post.title}
        </h3>

        <p className={`text-[#94a3b8] leading-relaxed text-sm ${featured ? 'line-clamp-4' : 'line-clamp-3'}`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow for non-featured */}
        {!featured && (
          <div className="flex justify-end">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ borderColor: `${post.color}40`, background: `${post.color}12` }}
            >
              <ArrowUpRight size={15} style={{ color: post.color }} />
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const featuredPost = blogPosts.find((p) => p.featured)!;
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section id="blog" className="section-padding bg-[#0a0a1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none bg-[#7c3aed]" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full blur-3xl opacity-5 pointer-events-none bg-[#00d4ff]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-sm font-semibold tracking-widest uppercase text-[#00d4ff] mb-3"
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontVariationSettings: "'wght' 600" }}
          >
            Thoughts & Insights
          </motion.span>
          <h2 className="section-heading text-white mb-4">
            Technical{' '}
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto text-base leading-relaxed">
            Deep dives into architecture decisions, engineering leadership, and lessons learned
            from building production systems at scale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Featured post — spans 2 cols on large screens */}
          <BlogCard post={featuredPost} index={0} featured />

          {/* Remaining posts */}
          {regularPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i + 1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://dev.to/biswajitmohanty"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-3 rounded-xl border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-semibold glass-card hover:bg-[#00d4ff]/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontVariationSettings: "'wght' 600" }}
          >
            View All Articles
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
