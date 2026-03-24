'use client';

import dynamic from 'next/dynamic';
import NavBar from '@/components/ui/NavBar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a1a] overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
