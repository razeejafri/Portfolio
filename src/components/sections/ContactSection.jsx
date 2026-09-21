import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Check, Copy, X, FileText, Download, Send } from 'lucide-react';
import { GithubSvgIcon, XIcon, InstagramIcon, LinkedinIcon } from '../icons/SocialIcons';
import MagneticButton from '../ui/MagneticButton';
import ScrollReveal from '../ui/ScrollReveal';
import Logo from '../icons/Logo';

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
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="retro-stamp mb-3 inline-flex">
              <span className="w-2 h-2 rounded-full bg-[#EAA838]" />
              <span>LET'S WORK TOGETHER</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} distance={20}>
            <h2 className="text-4xl sm:text-6xl font-retro font-black tracking-tight text-[#351C15] mb-3">
              Have a{' '}
              <span className="italic text-[#C84B31]">
                project
              </span>{' '}
              in mind?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18} distance={15}>
            <p className="text-[#5A382C] text-xs sm:text-sm max-w-md mx-auto mb-5 leading-relaxed font-sans">
              I'm always open to discussing high-impact full-stack roles, scalable SaaS architectures, or ambitious ideas.
            </p>
          </ScrollReveal>

          {/* Email Only with Scroll Reveal */}
          <ScrollReveal direction="up" delay={0.25} distance={15}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF6F0] border-2 border-[#351C15] shadow-[3px_3px_0px_#351C15] hover:shadow-[5px_5px_0px_#351C15] hover:-translate-y-0.5 transition-all">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base font-mono font-bold text-[#351C15] hover:text-[#C84B31] transition-colors"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="text-xs font-mono font-bold text-[#5A382C] hover:text-[#C84B31] cursor-pointer flex items-center gap-1 pl-1 border-l-2 border-[#351C15]/20"
              >
                {copied ? (
                  <span className="text-[#10B981] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 hover:scale-110 transition-transform" />
                )}
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Main Content Area: Form & Vintage Chassis Video */}
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
                    className="w-full px-5 py-4 rounded-2xl bg-[#FAF6F0] border-2 border-[#351C15] shadow-[4px_4px_0px_#351C15] text-[#351C15] placeholder-[#7A5042]/70 text-sm sm:text-base focus:outline-none resize-none transition-all focus:shadow-[6px_6px_0px_#351C15]"
                  />
                </div>

                {/* Email Address + Send Inquiry Button docked together */}
                <div className="rounded-2xl bg-[#EDE3D0] border-2 border-[#351C15] shadow-[4px_4px_0px_#351C15] p-1.5 sm:p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 transition-all">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter email address"
                    className="bg-transparent flex-1 px-4 py-2.5 text-sm sm:text-base text-[#351C15] placeholder-[#7A5042]/70 focus:outline-none w-full font-mono font-medium"
                  />
                  <button
                    type="submit"
                    className="clay-btn-primary text-sm px-7 py-3 rounded-xl font-bold whitespace-nowrap flex items-center justify-center gap-2 group/send cursor-pointer text-[#FAF6F0]"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4 group-hover/send:translate-x-1 group-hover/send:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </div>

                {/* Submission Feedback */}
                {submitted && (
                  <div className="p-4 rounded-xl bg-[#FAF6F0] border-2 border-[#10B981] text-[#10B981] font-mono font-bold text-sm flex items-center justify-center gap-2 animate-fadeIn shadow-[4px_4px_0px_#10B981]">
                    <Check className="w-4 h-4" />
                    <span>Thank you! Your inquiry was sent successfully. I'll get back to you shortly.</span>
                  </div>
                )}

                {/* View Resume Button Centered Under Form with Magnetic Pull */}
                <div className="pt-4 text-center sm:text-left">
                  <MagneticButton strength={0.3} textStrength={0.15}>
                    <button
                      type="button"
                      onClick={() => setShowResumeModal(true)}
                      className="clay-btn-secondary inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full font-bold text-base cursor-pointer group/resume text-[#351C15]"
                    >
                      <FileText className="w-4 h-4 text-[#C84B31] group-hover/resume:scale-110 group-hover/resume:-translate-y-0.5 transition-transform duration-200" />
                      <span>View Resume</span>
                    </button>
                  </MagneticButton>
                </div>

              </form>
            </ScrollReveal>
          </div>

          {/* Right: Vintage Bezel Notification Video with Retro Stripes */}
          <div ref={videoContainerRef} className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <ScrollReveal direction="left" delay={0.25} distance={35} className="w-full max-w-lg lg:max-w-none">
              <div className="relative w-full group">
                <div className="relative overflow-hidden rounded-3xl border-2 border-[#351C15] bg-[#23120B] shadow-[8px_8px_0px_#351C15] transition-all duration-500 p-2.5">
                  {/* Top retro stripe accent */}
                  <div className="h-1.5 w-full flex mb-2 rounded-full overflow-hidden">
                    <div className="w-1/3 bg-[#388087]" />
                    <div className="w-1/3 bg-[#EAA838]" />
                    <div className="w-1/3 bg-[#C84B31]" />
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-[#351C15]">
                    <video
                      src={isVideoInView ? "/contact-notification-video.mp4" : undefined}
                      poster="/contact-illustration.jpg"
                      preload="none"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto aspect-video object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Seamless Footer Section */}
        <div className="pt-12 border-t-2 border-[#351C15]/15 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Brand, Bio & Social Icons */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Geometric Official Logo + Name */}
            <div className="flex items-center gap-3">
              <Logo size="sm" showText={false} animated={false} />
              <h3 className="text-2xl sm:text-3xl font-retro font-black text-[#351C15] tracking-tight">
                Razee Jafri
              </h3>
            </div>
            <p className="text-[#5A382C] text-sm max-w-md leading-relaxed font-sans">
              Full-Stack Developer crafting reliable, high-performance web systems with modern user interfaces and robust architectures.
            </p>

            {/* Social Icons row with Tactile Retro Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <MagneticButton strength={0.4} textStrength={0.2}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl bg-[#FAF6F0] border-2 border-[#351C15] shadow-[3px_3px_0px_#351C15] hover:shadow-[4px_4px_0px_#351C15] hover:-translate-y-0.5 flex items-center justify-center text-[#351C15] hover:text-[#C84B31] transition-all cursor-pointer"
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
                  className="w-11 h-11 rounded-xl bg-[#FAF6F0] border-2 border-[#351C15] shadow-[3px_3px_0px_#351C15] hover:shadow-[4px_4px_0px_#351C15] hover:-translate-y-0.5 flex items-center justify-center text-[#351C15] hover:text-[#C84B31] transition-all cursor-pointer"
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
                  className="w-11 h-11 rounded-xl bg-[#FAF6F0] border-2 border-[#351C15] shadow-[3px_3px_0px_#351C15] hover:shadow-[4px_4px_0px_#351C15] hover:-translate-y-0.5 flex items-center justify-center text-[#351C15] hover:text-[#C84B31] transition-all cursor-pointer"
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
                  className="w-11 h-11 rounded-xl bg-[#FAF6F0] border-2 border-[#351C15] shadow-[3px_3px_0px_#351C15] hover:shadow-[4px_4px_0px_#351C15] hover:-translate-y-0.5 flex items-center justify-center text-[#351C15] hover:text-[#C84B31] transition-all cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 transition-transform duration-200" />
                </a>
              </MagneticButton>
            </div>

          </div>

          {/* Right Column: Capabilities / Services List */}
          <div className="md:col-span-5 md:text-right">
            <ul className="space-y-1.5">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="inline-block md:block font-bold text-sm sm:text-[15px] text-[#351C15] hover:text-[#C84B31] md:hover:-translate-x-1.5 hover:translate-x-1 transition-all duration-200 cursor-default select-none tracking-tight font-sans"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#351C15]/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#FAF6F0] border-2 border-[#351C15] rounded-2xl p-6 sm:p-8 shadow-[12px_12px_0px_#351C15] text-left">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#351C15]/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C84B31] text-[#FAF6F0] border-2 border-[#351C15] shadow-[2px_2px_0px_#351C15] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-retro font-bold text-[#351C15]">
                    {personalInfo.name} — Curriculum Vitae
                  </h3>
                  <p className="text-xs text-[#7A5042] font-mono font-bold">
                    Full-Stack Developer • MERN &amp; Next.js Specialist
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-lg bg-[#EDE3D0] hover:bg-[#DDD0BA] text-[#351C15] border border-[#351C15] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Summary Content */}
            <div className="py-6 space-y-6 text-sm text-[#351C15]">
              
              <div>
                <h4 className="text-xs font-mono font-bold text-[#C84B31] uppercase tracking-wider mb-2">
                  Professional Summary
                </h4>
                <p className="text-[#5A382C] leading-relaxed text-xs sm:text-sm font-sans">
                  Full-Stack Developer specializing in MERN stack and Next.js, with a proven track record of independently designing and shipping end-to-end web applications — from system architecture to production cloud deployment. Experienced with real-time Socket.io systems, payment gateways, containerized Docker deployments, and AI-driven features.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-[#C84B31] uppercase tracking-wider mb-2">
                  Current Experience
                </h4>
                <div className="p-3.5 rounded-xl bg-[#EDE3D0] border-2 border-[#351C15]">
                  <div className="flex justify-between items-center text-xs font-bold text-[#351C15]">
                    <span>Intern – Software Developer</span>
                    <span className="font-mono text-[#7A5042] text-[11px]">May 2026 – Present</span>
                  </div>
                  <div className="text-xs text-[#C84B31] font-bold mb-2">Pulpy Digital Media OPC Pvt. Ltd.</div>
                  <p className="text-xs text-[#5A382C] font-sans">
                    Collaborating on live production codebases, implementing backend caching strategies, microservices, and modern CI/CD pipelines.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-[#C84B31] uppercase tracking-wider mb-2">
                  Education &amp; Credentials
                </h4>
                <div className="p-3.5 rounded-xl bg-[#EDE3D0] border-2 border-[#351C15]">
                  <div className="flex justify-between items-center text-xs font-bold text-[#351C15]">
                    <span>B.Tech in Information Technology</span>
                    <span className="font-mono text-[#7A5042] text-[11px]">2022 – 2026</span>
                  </div>
                  <div className="text-xs text-[#5A382C] font-sans">Dr. Ambedkar Institute of Technology for Divyangjan • Kanpur, UP</div>
                  <div className="text-xs text-[#C84B31] mt-1 font-mono font-bold">GPA: 7.5 / 10.00 • Oracle Cloud AI Associate Certified (2025)</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-[#C84B31] uppercase tracking-wider mb-2">
                  Key Technical Skills
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {["React 19", "Next.js 16", "Node.js", "Express", "TypeScript", "Socket.io", "Docker", "MongoDB", "PostgreSQL", "Redis", "Tailwind CSS", "WebAssembly"].map(s => (
                    <span key={s} className="px-2.5 py-1 rounded bg-[#EDE3D0] text-[#351C15] font-bold border border-[#351C15] shadow-[1.5px_1.5px_0px_#351C15]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t-2 border-[#351C15]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#7A5042] font-mono font-bold">
                Direct Contact: jafrirazee@gmail.com
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => window.print()}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl clay-btn-secondary text-[#351C15] text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume Inquiry - Razee Jafri`}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-xl clay-btn-primary text-[#FAF6F0] text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
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
