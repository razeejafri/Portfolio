import React from 'react';
import { 
  FileText, 
  MapPin, 
  Sparkles, 
  Send, 
  CloudSun, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Radio, 
  Image as ImageIcon 
} from 'lucide-react';

export default function ProjectMockup({ type, project }) {
  // If real screenshot image is provided, display it with rich hover and depth effects
  if (project?.image) {
    return (
      <div className="w-full h-full relative group/mockup overflow-hidden bg-[#120E0C] flex items-center justify-center">
        {/* Real Project Screenshot */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover/mockup:scale-105 group-hover/mockup:-translate-y-1.5"
        />

        {/* Ambient Gradient Overlay for high-end look */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/80 via-transparent to-black/20 pointer-events-none" />

        {/* Floating Snapshot / Click to Preview Indicator */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#171412]/90 backdrop-blur-md border border-amber-500/20 text-[10px] font-mono text-amber-300 opacity-80 group-hover/mockup:opacity-100 group-hover/mockup:border-amber-400/50 group-hover/mockup:bg-[#1E1915]/90 transition-all duration-300 flex items-center gap-1.5 shadow-xl pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>Click to Preview</span>
        </div>
      </div>
    );
  }

  // ConvertHub / ConvertRova Fallback Mockup
  if (type === 'convertrova' || project?.id === 'pdf-saas') {
    return (
      <div className="w-full h-full bg-[#120E0C] text-stone-200 flex flex-col font-sans select-none overflow-hidden">
        {/* Sub-header */}
        <div className="px-4 py-2 bg-[#1A1512] border-b border-amber-500/15 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-[#120E04] text-[10px]">C</span>
            <span className="font-bold text-white font-heading tracking-tight">ConvertRova</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">v2.1</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[10px] text-stone-400 font-mono">
            <span>PDF Tools</span>
            <span>Converter</span>
            <span>OCR Studio</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        </div>

        {/* Hero banner inside app */}
        <div className="p-4 bg-gradient-to-r from-amber-950/60 via-stone-900/40 to-stone-950 border-b border-amber-500/10 flex flex-col items-center text-center">
          <div className="text-[11px] font-bold text-white leading-tight">
            50+ In-Memory Document &amp; Developer Utilities
          </div>
          <div className="text-[9px] text-stone-400 mt-0.5">
            Zero Disk Storage • Client WebAssembly Engine • Dockerized Full Stack
          </div>
        </div>

        {/* Tools Grid inside preview */}
        <div className="p-3.5 grid grid-cols-2 gap-2 bg-[#0E0B09]">
          <div className="p-2.5 rounded-lg bg-[#191411] border border-amber-500/10 flex items-center gap-2.5 hover:border-amber-500/30 transition-all">
            <div className="w-7 h-7 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
              <FileText className="w-3.5 h-3.5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-bold text-white truncate">PDF to Word</div>
              <div className="text-[8px] text-stone-400 truncate">Wasm In-Memory</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#191411] border border-amber-500/10 flex items-center gap-2.5 hover:border-amber-500/30 transition-all">
            <div className="w-7 h-7 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-bold text-white truncate">Merge &amp; Split</div>
              <div className="text-[8px] text-stone-400 truncate">Fast Batch Engine</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#191411] border border-amber-500/10 flex items-center gap-2.5 hover:border-amber-500/30 transition-all">
            <div className="w-7 h-7 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-bold text-white truncate">OCR Scanner</div>
              <div className="text-[8px] text-stone-400 truncate">Tesseract OCR</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#191411] border border-amber-500/10 flex items-center gap-2.5 hover:border-amber-500/30 transition-all">
            <div className="w-7 h-7 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-bold text-white truncate">Privacy Crypt</div>
              <div className="text-[8px] text-slate-400 truncate">Zero File Leaks</div>
            </div>
          </div>
        </div>

        {/* Console footer */}
        <div className="mt-auto px-3 py-1.5 bg-[#070A12] border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500">
          <span>Docker Engine: Healthy</span>
          <span className="text-emerald-400">Memory Stream: 0MB disk</span>
        </div>
      </div>
    );
  }

  // Vingo Mockup (Live Food Delivery & GPS Tracking)
  if (type === 'vingo' || project.id === 'vingo-food') {
    return (
      <div className="w-full h-full bg-[#0B0F19] text-slate-200 flex flex-col font-sans select-none overflow-hidden">
        {/* Top App Bar */}
        <div className="px-4 py-2 bg-[#121826] border-b border-white/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-amber-500 flex items-center justify-center font-black text-black text-[10px]">V</span>
            <span className="font-bold text-white tracking-tight font-heading">Vingo Live</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-mono bg-emerald-950/60 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
            <Radio className="w-2.5 h-2.5 animate-pulse" />
            <span>DRIVER EN ROUTE</span>
          </div>
        </div>

        {/* Map Telemetry Box */}
        <div className="relative h-32 bg-[#161F33] p-3 flex flex-col justify-between overflow-hidden border-b border-white/5">
          {/* Faux Map Grid Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:12px_12px]" />
          
          {/* Route path line */}
          <div className="absolute top-1/2 left-8 right-12 h-0.5 bg-gradient-to-r from-amber-400 via-blue-400 to-emerald-400 -translate-y-1/2 opacity-70" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="px-2 py-1 rounded bg-[#0B0F19]/90 border border-white/10 text-[9px] font-mono text-amber-300 flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5" />
              <span>Spice Kitchen, Kanpur</span>
            </div>
            <div className="px-2 py-1 rounded bg-[#0B0F19]/90 border border-white/10 text-[9px] font-mono text-emerald-300 flex items-center gap-1">
              <span>Customer Drop</span>
            </div>
          </div>

          <div className="relative z-10 bg-[#0B0F19]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-semibold text-white">Live ETA: 12 Mins</span>
            </div>
            <span className="text-[9px] font-mono text-slate-400">Razorpay Verified</span>
          </div>
        </div>

        {/* Order Details */}
        <div className="p-3 bg-[#080C14] flex items-center justify-between text-[10px]">
          <div>
            <div className="text-white font-medium">Deluxe Gourmet Burger + Shake</div>
            <div className="text-[9px] text-slate-500 font-mono">Order #VG-9842 • 3 User Roles RBAC</div>
          </div>
          <span className="text-emerald-400 font-bold font-mono">₹449</span>
        </div>
      </div>
    );
  }

  // Vybe Mockup (AI Social Network)
  if (type === 'vybe' || project.id === 'vybe-social') {
    return (
      <div className="w-full h-full bg-[#080B14] text-slate-200 flex flex-col font-sans select-none overflow-hidden">
        {/* App Bar */}
        <div className="px-4 py-2 bg-[#0F1424] border-b border-white/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="font-heading font-black text-white text-xs tracking-wider">VYBE</span>
            <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">AI Feed</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="font-mono text-[9px]">Gemini 1.5</span>
          </div>
        </div>

        {/* Stories row */}
        <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2.5 overflow-hidden bg-[#0A0E1A]">
          {['Dev', 'Alex', 'Sarah', 'Code'].map((name) => (
            <div key={name} className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-purple-500 to-pink-500">
                <div className="w-full h-full rounded-full bg-[#121728] flex items-center justify-center text-[9px] font-bold text-white">
                  {name[0]}
                </div>
              </div>
              <span className="text-[8px] text-slate-400">{name}</span>
            </div>
          ))}
        </div>

        {/* Post Card */}
        <div className="p-3 bg-[#060810] flex-1 flex flex-col justify-between">
          <div className="p-2.5 rounded-xl bg-[#0E1324] border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-bold text-white">@razeejafri</span>
              <span className="text-[8px] font-mono text-slate-500">Socket.io Live</span>
            </div>
            
            {/* AI auto caption badge */}
            <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/20 text-[9px] text-purple-200 leading-snug flex items-start gap-1.5">
              <Sparkles className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
              <span>AI Auto-Caption: "Engineering real-time architectures with zero latency. Building the future stack! #MERN #NextJS"</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Imagify Mockup (AI Text-to-Image SaaS)
  if (type === 'ai-generation' || project.id === 'imagify') {
    return (
      <div className="w-full h-full bg-[#080B12] text-slate-200 flex flex-col font-sans select-none overflow-hidden">
        {/* App Bar */}
        <div className="px-4 py-2 bg-[#0E1420] border-b border-white/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-black text-[10px]">AI</span>
            <span className="font-bold text-white font-heading">Imagify Studio</span>
          </div>
          <div className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
            50 Credits Available
          </div>
        </div>

        {/* Prompt Input Preview */}
        <div className="p-3 bg-[#0A0F1A] border-b border-white/5 space-y-2">
          <div className="flex items-center gap-2 bg-[#121929] border border-white/10 px-3 py-1.5 rounded-xl text-[10px] text-slate-300">
            <Sparkles className="w-3 h-3 text-blue-400 shrink-0" />
            <span className="truncate">"Cyberpunk hacker coding at terminal, neon rainy street, 8K ultra"</span>
            <span className="ml-auto px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[9px] shrink-0">Generate</span>
          </div>
        </div>

        {/* Generated Art Grid */}
        <div className="p-3 grid grid-cols-2 gap-2 bg-[#06080F]">
          <div className="h-24 rounded-lg bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 border border-white/10 flex flex-col items-center justify-center p-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/10 opacity-50" />
            <ImageIcon className="w-6 h-6 text-cyan-300 mb-1" />
            <span className="text-[9px] font-mono text-cyan-200 text-center">Cyberpunk Studio.png</span>
          </div>
          <div className="h-24 rounded-lg bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950 border border-white/10 flex flex-col items-center justify-center p-2 relative overflow-hidden">
            <ImageIcon className="w-6 h-6 text-purple-300 mb-1" />
            <span className="text-[9px] font-mono text-purple-200 text-center">Neon Terminal.png</span>
          </div>
        </div>
      </div>
    );
  }

  // Weather App Mockup
  if (type === 'weather-telemetry' || project.id === 'weather-app') {
    return (
      <div className="w-full h-full bg-gradient-to-b from-[#0F1E38] to-[#080D1A] text-slate-200 flex flex-col font-sans select-none overflow-hidden">
        <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 font-mono text-slate-300">
            <MapPin className="w-3 h-3 text-blue-400" />
            <span>Kanpur, IN</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">Live OpenWeather</span>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div>
            <div className="text-3xl font-heading font-black text-white tracking-tight">28°C</div>
            <div className="text-xs text-blue-300 font-medium">Clear Sky &bull; Light Breeze</div>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center">
            <CloudSun className="w-7 h-7 text-amber-300 animate-pulse" />
          </div>
        </div>

        <div className="mt-auto p-3 grid grid-cols-3 gap-2 bg-[#050810] border-t border-white/5 text-[9px] font-mono">
          <div className="p-1.5 rounded bg-white/5 text-center">
            <div className="text-slate-400">Humidity</div>
            <div className="text-white font-bold">64%</div>
          </div>
          <div className="p-1.5 rounded bg-white/5 text-center">
            <div className="text-slate-400">Wind</div>
            <div className="text-white font-bold">12 km/h</div>
          </div>
          <div className="p-1.5 rounded bg-white/5 text-center">
            <div className="text-slate-400">Pressure</div>
            <div className="text-white font-bold">1014 hPa</div>
          </div>
        </div>
      </div>
    );
  }

  // Multimedia Chatbot Mockup
  if (type === 'ai-chat' || project.id === 'multimedia-chatbot') {
    return (
      <div className="w-full h-full bg-[#080B12] text-slate-200 flex flex-col font-sans select-none overflow-hidden">
        <div className="px-4 py-2 bg-[#0F1626] border-b border-white/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-bold text-white font-heading">Multimedia Assistant</span>
          </div>
          <span className="text-[9px] font-mono text-slate-400">Multimodal v2</span>
        </div>

        <div className="p-3 space-y-2.5 flex-1 bg-[#060810] text-[10px]">
          <div className="flex justify-end">
            <div className="px-3 py-1.5 rounded-xl rounded-tr-none bg-blue-600 text-white max-w-[80%]">
              Describe this image &amp; transcribe attached voice memo
            </div>
          </div>
          <div className="flex justify-start">
            <div className="px-3 py-1.5 rounded-xl rounded-tl-none bg-[#121A2C] border border-white/10 text-slate-300 max-w-[85%] leading-relaxed">
              Analyzing both audio frequency and pixel matrix... Synthesis complete.
            </div>
          </div>
        </div>

        <div className="p-2.5 bg-[#0A0E18] border-t border-white/5 flex items-center gap-2 text-[10px] text-slate-400">
          <input
            type="text"
            readOnly
            value="Type prompt or record voice..."
            className="w-full bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 text-[9px] focus:outline-none"
          />
          <Send className="w-3.5 h-3.5 text-blue-400 shrink-0" />
        </div>
      </div>
    );
  }

  // Simon Game / Fallback Mockup
  return (
    <div className="w-full h-full bg-[#070912] text-slate-200 flex flex-col items-center justify-center p-6 font-sans select-none overflow-hidden">
      <div className="w-32 h-32 rounded-full bg-[#0A0D1A] border-4 border-white/10 grid grid-cols-2 gap-1.5 p-2 shadow-2xl">
        <div className="rounded-tl-full bg-emerald-500/80 hover:bg-emerald-400 cursor-pointer transition-colors" />
        <div className="rounded-tr-full bg-rose-500/80 hover:bg-rose-400 cursor-pointer transition-colors" />
        <div className="rounded-bl-full bg-amber-500/80 hover:bg-amber-400 cursor-pointer transition-colors" />
        <div className="rounded-br-full bg-blue-500/80 hover:bg-blue-400 cursor-pointer transition-colors" />
      </div>
      <div className="mt-3 text-center">
        <div className="text-xs font-bold font-mono text-white">LEVEL 08</div>
        <div className="text-[10px] font-mono text-slate-400">Web Audio API &bull; Pattern Logic</div>
      </div>
    </div>
  );
}
