import React, { useState, lazy, Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import AmbientBackground from './components/AmbientBackground';
import NoiseOverlay from './components/NoiseOverlay';
import CatLoader from './components/CatLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBanner from './components/MetricsBanner';
import BentoServices from './components/BentoServices';
import Footer from './components/Footer';
import AnimatedSectionDivider from './components/AnimatedSectionDivider';

// Dynamic Code Splitting for heavy below-the-fold sections
const Projects = lazy(() => import('./components/Projects'));
const TechStack = lazy(() => import('./components/TechStack'));
const ExperienceTimeline = lazy(() => import('./components/ExperienceTimeline'));
const ContactSection = lazy(() => import('./components/ContactSection'));

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#04060E] text-[#F8FAFC] selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Dynamic Multi-Chromatic Mesh Background (Blobs + Cyber Grid) */}
      <AmbientBackground />

      {/* Procedural Fractal Film Grain & Tactile Noise Overlay */}
      <NoiseOverlay />

      {/* Top Dynamic Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Global Interactive Custom Cursor (snappy dot + smooth lagging ring) */}
      <CustomCursor />

      {/* Minimalist Cat Line-Art Loader on Initial Mount */}
      {loading && <CatLoader onComplete={() => setLoading(false)} />}

      {/* Sticky Minimal Navbar */}
      <Navbar />

      <main className="relative z-10">
        {/* Clean Hero matching Rondeo Balos layout */}
        <Hero />

        {/* Liquid Pearl Wave Divider leading into About/Metrics */}
        <AnimatedSectionDivider variant="pearl-wave" />

        {/* High-Contrast Frosted Pearl / Alabaster Metrics Ribbon */}
        <MetricsBanner />

        {/* Flowing Wave Transition into Services */}
        <AnimatedSectionDivider variant="pearl-reverse" />

        {/* What I Excel At */}
        <BentoServices />

        {/* Electric Azure & Sapphire Liquid Ribbon Divider */}
        <AnimatedSectionDivider variant="azure-ribbon" />

        {/* Selected Projects Showcase (7 Projects with Live Demos) */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Projects />
        </Suspense>

        {/* Aurora Sapphire & Iridescent Violet Wave Divider */}
        <AnimatedSectionDivider variant="aurora-wave" />

        {/* Technologies & Tools I Use */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <TechStack />
        </Suspense>

        {/* Luminous Pearl Wave Ribbon leading into Journey */}
        <AnimatedSectionDivider variant="pearl-wave" />

        {/* Career, Education & Certifications */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <ExperienceTimeline />
        </Suspense>

        {/* Sweeping Azure Ribbon into Contact */}
        <AnimatedSectionDivider variant="azure-ribbon" />

        {/* Let's Talk Contact Section */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
