'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Github } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#00d4ff',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: personalInfo.linkedin,
    href: `https://${personalInfo.linkedin}`,
    color: '#7c3aed',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/biswajitmohanty',
    href: 'https://github.com/biswajitmohanty',
    color: '#10b981',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    color: '#f59e0b',
  },
];

const subjectOptions = [
  'Full-Stack Development',
  'Cloud Architecture',
  'Mobile App Development',
  'Technical Consulting',
  'Fractional CTO',
  'Other',
];

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Send failed');
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#0a0a1a] relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-[#00d4ff]/5 blur-[100px]" />
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-[#7c3aed]/5 blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// get in touch</p>
          <h2 className="section-heading">
            Let&apos;s{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]" />
          <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <motion.div
            className="lg:col-span-5 space-y-6 max-w-lg mx-auto w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-5">Contact Information</h3>
              <div className="space-y-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                        style={{
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}25`,
                        }}
                      >
                        <Icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <div className="text-xs text-[#64748b] mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-sm text-[#94a3b8] hover:text-white transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm text-[#94a3b8]">{item.value}</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-white">Available for Work</span>
              </div>
              <p className="text-[#94a3b8] text-xs leading-relaxed">
                Currently accepting freelance projects and consulting engagements. Typical response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — form (hidden) */}
          <motion.div
            className="lg:col-span-3 hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#94a3b8] mb-2">
                      Your Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-[#64748b] focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/8 transition-all ${
                        errors.name ? 'border-red-500/50' : 'border-white/10'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94a3b8] mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-[#64748b] focus:outline-none focus:border-[#00d4ff]/50 transition-all ${
                        errors.email ? 'border-red-500/50' : 'border-white/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-[#94a3b8] mb-2">
                    Subject *
                  </label>
                  <select
                    {...register('subject', { required: 'Please select a subject' })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0a0a1a] border text-sm text-[#94a3b8] focus:outline-none focus:border-[#00d4ff]/50 transition-all appearance-none ${
                      errors.subject ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  >
                    <option value="">Select a topic...</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-[#94a3b8] mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 20, message: 'Message must be at least 20 characters' },
                    })}
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-[#64748b] focus:outline-none focus:border-[#00d4ff]/50 transition-all resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00d4ff]/20"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: '0 0 25px rgba(0,212,255,0.3)' }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={16} />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
