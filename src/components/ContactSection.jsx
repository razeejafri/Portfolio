import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Check, Copy, X, FileText, Download, Send } from 'lucide-react';
import { GithubSvgIcon, XIcon, InstagramIcon, LinkedinIcon } from './SocialIcons';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import BorderBeam from './BorderBeam';
import Logo from './Logo';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const videoContainerRef = useRef(null);
  const [formData, setFormData] = useState({
    message: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Prevent background body scrolling when resume modal is open
  useEffect(() => {
    if (showResumeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showResumeModal]);

  // Viewport observer to defer 2.7MB video download until user scrolls near
  useEffect(() => {
    const el = videoContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ message: '', email: '' });
    }, 4500);
  };

  const capabilities = [
    "Design Systems",
    "Mobile App & Web Design",
    "App Development",
    "Website Development",
    "System Development",
    "Backend Development",
    "E-commerce & Shopify",
    "CRM, CMS, Web Apps",
    "Accessibility",
  ];

  return (
    <section id="contact" className="relative pt-24 pb-16 bg-transparent overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header matching inspiration image style */}
        <div className="text-center mb-10">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="inspiration-pill-badge mb-3 inline-flex">
              <span className="badge-dot" />
              <span>LET'S WORK TOGETHER</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} distance={20}>
            <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white mb-3">
              Have a{' '}
              <span className="font-editorial text-cyan-300 font-normal italic drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]">
                project
              </span>{' '}
              in mind?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18} distance={15}>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mb-5 leading-relaxed">
              I'm always open to discussing high-impact full-stack roles, scalable SaaS architectures, or ambitious ideas.
            </p>
          </ScrollReveal>

          {/* Email Only with Scroll Reveal */}
          <ScrollReveal direction="up" delay={0.25} distance={15}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/40 transition-all">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base font-mono text-slate-300 hover:text-cyan-300 transition-colors"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 cursor-pointer flex items-center gap-1 pl-1 border-l border-white/10"
              >
                {copied ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 hover:scale-110 transition-transform" />
                )}
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Main Content Area: Form & Keyboard Illustration */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left / Center: The Contact Form with Scroll Reveal */}
          <div className="lg:col-span-7 z-20">
            <ScrollReveal direction="right" delay={0.2} distance={30}>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto lg:mx-0">
                
                {/* Message Box */}
                <div className="relative">
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your message"
                    className="w-full px-5 py-4 rounded-2xl glass-card-premium text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 shadow-2xl resize-none transition-all"
                  />
                </div>

                {/* Email Address + Send Inquiry Button docked together */}
                <div className="rounded-2xl glass-card-premium p-1.5 sm:p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shadow-2xl focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 transition-all">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter email address"
                    className="bg-transparent flex-1 px-4 py-2.5 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="btn-shine bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm px-7 py-3 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/45 active:scale-95 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 group/send"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4 group-hover/send:translate-x-1 group-hover/send:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </div>

                {/* Submission Feedback */}
                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-center justify-center gap-2 animate-fadeIn">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Thank you! Your inquiry was sent successfully. I'll get back to you shortly.</span>
                  </div>
                )}

                {/* View Resume Button Centered Under Form with Magnetic Pull */}
                <div className="pt-4 text-center sm:text-left">
                  <MagneticButton strength={0.3} textStrength={0.15}>
                    <button
                      type="button"
                      onClick={() => setShowResumeModal(true)}
                      className="btn-shine inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full bg-[#1877F2] hover:bg-[#1565C0] text-white font-bold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/55 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer group/resume"
                    >
                      <FileText className="w-4 h-4 group-hover/resume:scale-110 group-hover/resume:-translate-y-0.5 transition-transform duration-200" />
                      <span>View Resume</span>
                    </button>
                  </MagneticButton>
                </div>

              </form>
            </ScrollReveal>
          </div>

          {/* Right: 3D Animated Phone Notifications Video with Scroll Reveal */}
          <div ref={videoContainerRef} className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <ScrollReveal direction="left" delay={0.25} distance={35} className="w-full max-w-lg lg:max-w-none">
              <div className="relative w-full group">
                {/* Dynamic vibrant backglow matching notifications illustration */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-rose-500/25 to-amber-500/20 rounded-3xl blur-2xl pointer-events-none group-hover:opacity-100 opacity-70 transition-opacity duration-700" />
                
                <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080B12]/80 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-cyan-400/40">
                  {/* Cyber Glowing Border Beam */}
                  <BorderBeam duration={8} size={120} colorFrom="#38bdf8" colorTo="#f43f5e" borderWidth={2} />

                  <video
                    src={isVideoInView ? "/contact-notification-video.mp4" : undefined}
                    poster="/contact-illustration.jpg"
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto aspect-video object-cover rounded-3xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  
                  {/* Subtle edge vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Seamless Footer Section matching screenshot */}
        <div className="pt-12 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Brand, Bio & Social Icons */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Geometric Official Logo + Name */}
            <div className="flex items-center gap-3">
              <Logo size="sm" showText={false} animated={false} />
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                Razee Jafri
              </h3>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-normal">
              Full-Stack Developer crafting reliable, high-performance web systems with modern user interfaces and robust architectures.
            </p>

            {/* Social Icons row with Magnetic pull & micro-interaction bounce */}
            <div className="flex items-center gap-3 pt-2">
              <MagneticButton strength={0.4} textStrength={0.2}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="group hover-icon-bounce w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-400/50 hover:bg-blue-600/25 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                >
                  <GithubSvgIcon className="w-4 h-4 transition-transform duration-200" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.4} textStrength={0.2}>
                <a
                  href="https://x.com/razeejafri"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="group hover-icon-bounce w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-400/50 hover:bg-blue-600/25 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                >
                  <XIcon className="w-4 h-4 transition-transform duration-200" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.4} textStrength={0.2}>
                <a
                  href="https://instagram.com/razeejafri"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="group hover-icon-bounce w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-400/50 hover:bg-blue-600/25 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                >
                  <InstagramIcon className="w-4 h-4 transition-transform duration-200" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.4} textStrength={0.2}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="group hover-icon-bounce w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-400/50 hover:bg-blue-600/25 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                >
                  <LinkedinIcon className="w-4 h-4 transition-transform duration-200" />
                </a>
              </MagneticButton>
            </div>

          </div>

          {/* Right Column: Capabilities / Services List with Micro-Interaction Slide */}
          <div className="md:col-span-5 md:text-right">
            <ul className="space-y-1.5">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="inline-block md:block font-bold text-sm sm:text-[15px] text-slate-300 hover:text-cyan-300 md:hover:-translate-x-1.5 hover:translate-x-1 transition-all duration-200 cursor-default select-none tracking-tight"
                >
                  {cap}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Interactive Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0A0D16] border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {personalInfo.name} — Curriculum Vitae
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Full-Stack Developer • MERN &amp; Next.js Specialist
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Summary Content */}
            <div className="py-6 space-y-6 text-sm text-slate-300">
              
              <div>
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                  Professional Summary
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                  Full-Stack Developer specializing in MERN stack and Next.js, with a proven track record of independently designing and shipping end-to-end web applications — from system architecture to production cloud deployment. Experienced with real-time Socket.io systems, payment gateways, containerized Docker deployments, and AI-driven features.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                  Current Experience
                </h4>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex justify-between items-center text-xs font-semibold text-white">
                    <span>Intern – Software Developer</span>
                    <span className="font-mono text-slate-400 text-[11px]">May 2026 – Present</span>
                  </div>
                  <div className="text-xs text-blue-400 mb-2">Pulpy Digital Media OPC Pvt. Ltd.</div>
                  <p className="text-xs text-slate-400">
                    Collaborating on live production codebases, implementing backend caching strategies, microservices, and modern CI/CD pipelines.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                  Education &amp; Credentials
                </h4>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex justify-between items-center text-xs font-semibold text-white">
                    <span>B.Tech in Information Technology</span>
                    <span className="font-mono text-slate-400 text-[11px]">2022 – 2026</span>
                  </div>
                  <div className="text-xs text-slate-400">Dr. Ambedkar Institute of Technology for Divyangjan • Kanpur, UP</div>
                  <div className="text-xs text-emerald-400 mt-1 font-mono">GPA: 7.5 / 10.00 • Oracle Cloud AI Associate Certified (2025)</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                  Key Technical Skills
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {["React 19", "Next.js 16", "Node.js", "Express", "TypeScript", "Socket.io", "Docker", "MongoDB", "PostgreSQL", "Redis", "Tailwind CSS", "WebAssembly"].map(s => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-mono">
                Direct Contact: jafrirazee@gmail.com
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => window.print()}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume Inquiry - Razee Jafri`}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-[#1877F2] hover:bg-blue-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Razee</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
