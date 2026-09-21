import React, { useState, lazy, Suspense } from 'react';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import AmbientBackground from './components/layout/AmbientBackground';
import NoiseOverlay from './components/layout/NoiseOverlay';
import CatLoader from './components/layout/CatLoader';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import MetricsBanner from './components/sections/MetricsBanner';
import BentoServices from './components/sections/BentoServices';
import Footer from './components/layout/Footer';
import AnimatedSectionDivider from './components/ui/AnimatedSectionDivider';
import LiquidParallaxArtifacts from './components/ui/LiquidParallaxArtifacts';

// Dynamic Code Splitting for heavy below-the-fold sections
const Projects = lazy(() => import('./components/sections/Projects'));
const TechStack = lazy(() => import('./components/sections/TechStack'));
const ExperienceTimeline = lazy(() => import('./components/sections/ExperienceTimeline'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#F4EFE6] text-[#351C15] selection:bg-[#C84B31] selection:text-[#FAF6F0] overflow-x-hidden">
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

      {/* 1970s Liquid Parallax Particles & Floating Vintage Artifacts */}
      <LiquidParallaxArtifacts />

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
