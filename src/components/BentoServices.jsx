import React from 'react';
import { bentoServices } from '../data/portfolioData';
import { Layers, Zap, Server, Cpu, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import BorderBeam from './BorderBeam';

export default function BentoServices() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const serviceThemes = [
    {
      iconColor: 'text-violet-400',
      iconBg: 'bg-violet-500/10 border-violet-500/25',
      accentColor: 'text-violet-400',
      checkColor: 'text-violet-400',
      glow: 'group-hover:border-violet-500/40',
      borderBeamColors: { from: '#a855f7', to: '#6366f1' },
    },
    {
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500/25',
      accentColor: 'text-cyan-400',
      checkColor: 'text-cyan-400',
      glow: 'group-hover:border-cyan-500/40',
      borderBeamColors: { from: '#06b6d4', to: '#3b82f6' },
    },
    {
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/25',
      accentColor: 'text-emerald-400',
      checkColor: 'text-emerald-400',
      glow: 'group-hover:border-emerald-500/40',
      borderBeamColors: { from: '#10b981', to: '#06b6d4' },
    },
    {
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/25',
      accentColor: 'text-amber-400',
      checkColor: 'text-amber-400',
      glow: 'group-hover:border-amber-500/40',
      borderBeamColors: { from: '#f59e0b', to: '#f43f5e' },
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Clean Header with Scroll Reveal & Character Reveal */}
        <div className="mb-14">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="inspiration-pill-badge mb-3">
              <span className="badge-dot" />
              <span>SERVICES &amp; SPECIALIZATION</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.12} distance={20}>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              What I{' '}
              <span className="font-editorial text-cyan-300 font-normal italic drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                excel at
              </span>
              .
            </h2>
          </ScrollReveal>
        </div>

        {/* Clean Bento Grid with 3D Tilt, Frosted Glass & Multi-Chromatic Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bentoServices.map((service, idx) => {
            const theme = serviceThemes[idx % serviceThemes.length];
            return (
              <ScrollReveal
                key={service.title}
                direction="up"
                delay={idx * 0.1}
                distance={35}
                className="h-full"
              >
                <TiltCard
                  maxTilt={7}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.16}
                  className="h-full rounded-2xl group"
                >
                  <div
                    className={`relative h-full rounded-2xl glass-card-premium p-8 flex flex-col justify-between overflow-hidden ${theme.glow}`}
                  >
                    {/* Featured Card Glowing Border Beam with Themed Aurora colors */}
                    {idx === 0 && (
                      <BorderBeam duration={8} size={90} colorFrom={theme.borderBeamColors.from} colorTo={theme.borderBeamColors.to} borderWidth={2} />
                    )}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-xl border ${theme.iconBg} ${theme.iconColor}`}>
                          {getIcon(service.icon)}
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {service.tagline}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-slate-100 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-3 space-y-2 border-t border-white/[0.06]">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${theme.checkColor}`} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
