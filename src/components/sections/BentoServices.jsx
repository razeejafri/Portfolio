import React from 'react';
import { bentoServices } from '../../data/portfolioData';
import { Layers, Zap, Server, Cpu, CheckCircle2 } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import ScrollReveal from '../ui/ScrollReveal';
import BorderBeam from '../ui/BorderBeam';

export default function BentoServices() {
  const getIcon = (iconName, colorClass) => {
    const cls = `w-5 h-5 ${colorClass}`;
    switch (iconName) {
      case 'Layers':
        return <Layers className={cls} />;
      case 'Zap':
        return <Zap className={cls} />;
      case 'Server':
        return <Server className={cls} />;
      case 'Cpu':
        return <Cpu className={cls} />;
      default:
        return <Layers className={cls} />;
    }
  };

  const serviceThemes = [
    {
      accentHex: '#C84B31',
      accentText: 'text-[#C84B31]',
      iconBg: 'bg-[#FAF6F0] text-[#C84B31]',
      borderBeamColors: { from: '#C84B31', to: '#EAA838' },
    },
    {
      accentHex: '#388087',
      accentText: 'text-[#388087]',
      iconBg: 'bg-[#FAF6F0] text-[#388087]',
      borderBeamColors: { from: '#388087', to: '#10B981' },
    },
    {
      accentHex: '#EAA838',
      accentText: 'text-[#B47B16]',
      iconBg: 'bg-[#FAF6F0] text-[#B47B16]',
      borderBeamColors: { from: '#EAA838', to: '#C84B31' },
    },
    {
      accentHex: '#10B981',
      accentText: 'text-[#10B981]',
      iconBg: 'bg-[#FAF6F0] text-[#10B981]',
      borderBeamColors: { from: '#10B981', to: '#388087' },
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Retro Stamp Header */}
        <div className="mb-14">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="retro-stamp mb-3 inline-flex">
              <span className="w-2 h-2 rounded-full bg-[#C84B31]" />
              <span>SERVICES &amp; SPECIALIZATION</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.12} distance={20}>
            <h2 className="text-3xl sm:text-5xl font-retro font-black text-[#351C15] tracking-tight">
              Core Technical{' '}
              <span className="italic text-[#C84B31]">
                Capabilities
              </span>
              .
            </h2>
          </ScrollReveal>
        </div>

        {/* Retro Hi-Fi Modular Bento Grid */}
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
                  maxTilt={6}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.08}
                  className="h-full rounded-2xl group"
                >
                  <div
                    className="relative h-full rounded-2xl bg-[#EDE3D0] border-2 border-[#351C15] shadow-[6px_6px_0px_#351C15] hover:shadow-[9px_9px_0px_#351C15] hover:-translate-y-1 p-8 flex flex-col justify-between overflow-hidden transition-all duration-300"
                  >
                    {/* Top retro stripe accent */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                      <div className="w-1/3 bg-[#388087]" />
                      <div className="w-1/3 bg-[#EAA838]" />
                      <div className="w-1/3 bg-[#C84B31]" />
                    </div>

                    {/* Featured Card Glowing Border Beam */}
                    {idx === 0 && (
                      <BorderBeam duration={8} size={90} colorFrom={theme.borderBeamColors.from} colorTo={theme.borderBeamColors.to} borderWidth={2} />
                    )}
                    
                    <div className="space-y-4 pt-1">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-xl border-2 border-[#351C15] ${theme.iconBg} shadow-[3px_3px_0px_#351C15]`}>
                          {getIcon(service.icon, theme.accentText)}
                        </div>
                        <span className="text-[11px] font-mono text-[#5A382C] font-bold uppercase tracking-wider bg-[#FAF6F0] px-2.5 py-1 rounded border border-[#351C15]/40 shadow-[1.5px_1.5px_0px_#351C15]">
                          {service.tagline}
                        </span>
                      </div>

                      <h3 className="text-2xl font-retro font-bold text-[#351C15] group-hover:text-[#C84B31] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#5A382C] text-sm leading-relaxed font-sans">
                        {service.description}
                      </p>

                      <div className="pt-3 space-y-2 border-t-2 border-[#351C15]/15">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs font-mono font-bold text-[#4A2D22]">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${theme.accentText}`} />
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
