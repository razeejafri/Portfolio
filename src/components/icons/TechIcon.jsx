import React from 'react';
import {
  FileCode2,
  Code2,
  Terminal,
  Cpu,
  Database,
  Atom,
  Globe,
  Workflow,
  Palette,
  MapPin,
  Server,
  Network,
  Radio,
  Layers,
  ShieldCheck,
  HardDrive,
  Box,
  GitBranch,
  Send,
  Cloud,
  Lock,
} from 'lucide-react';

export default function TechIcon({ name, icon, color = 'currentColor', className = 'w-4 h-4' }) {
  const norm = (name || '').toLowerCase();

  // 1. TypeScript
  if (norm.includes('typescript')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="22" height="22" x="1" y="1" rx="4.5" fill="#3178C6" />
        <path
          d="M6 10h5.2m-2.6 0v7.5M14 12.8c.6-.5 1.3-.8 2.2-.8 1.3 0 2 .7 2 1.6 0 1.9-4 1.3-4 3.4 0 1.1.9 1.8 2.4 1.8.9 0 1.7-.3 2.3-.7"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 2. JavaScript
  if (norm.includes('javascript')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="22" height="22" x="1" y="1" rx="4.5" fill="#F7DF1E" />
        <path
          d="M8 12v4.8c0 1.3-.8 1.8-2 1.4M13.8 13.5c.5-.4 1.1-.7 1.9-.7 1.2 0 1.8.6 1.8 1.5 0 1.8-3.6 1.2-3.6 3.1 0 1 .8 1.7 2.1 1.7.8 0 1.6-.3 2.2-.7"
          stroke="#000000"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 3. React / React.js
  if (norm.includes('react') && !norm.includes('leaflet')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke={color || '#61DAFB'} strokeWidth="1.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.8"
          transform="rotate(60 12 12)"
          stroke={color || '#61DAFB'}
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.8"
          transform="rotate(120 12 12)"
          stroke={color || '#61DAFB'}
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="1.8" fill={color || '#61DAFB'} />
      </svg>
    );
  }

  // 4. Next.js
  if (norm.includes('next.js') || norm === 'nextjs') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#FFFFFF" strokeWidth="1.4" />
        <path
          d="M8.5 7.5v9m0-9h1.8l5.4 7.6V7.5h1.8v9h-1.8L10.3 8.9v7.6H8.5v-9z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 5. Python
  if (norm.includes('python')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M11.88 2C6.9 2 7.21 4.16 7.21 4.16l.01 2.24h4.74v.67H5.25S2 6.7 2 11.72c0 5.01 2.84 4.83 2.84 4.83h1.7v-2.4s-.09-2.84 2.78-2.84h4.77s2.68.04 2.68-2.6V4.6S17.26 2 11.88 2zm-2.6 1.48a.86.86 0 110 1.72.86.86 0 010-1.72z"
          fill="#387EB8"
        />
        <path
          d="M12.12 22c4.98 0 4.67-2.16 4.67-2.16l-.01-2.24h-4.74v-.67h6.71S22 17.3 22 12.28c0-5.01-2.84-4.83-2.84-4.83h-1.7v2.4s.09 2.84-2.78 2.84H9.91s-2.68-.04-2.68 2.6v4.11S6.74 22 12.12 22zm2.6-1.48a.86.86 0 110-1.72.86.86 0 010-1.72z"
          fill="#FFE052"
        />
      </svg>
    );
  }

  // 6. Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className={className}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    );
  }

  // 7. Node.js
  if (norm.includes('node')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z"
          stroke="#5FA04E"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M12 6v6m0 0l5 3m-5-3l-5 3"
          stroke="#5FA04E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 8. Docker
  if (norm.includes('docker')) {
    return (
      <svg viewBox="0 0 24 24" fill="#2496ED" className={className}>
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zM23.6 11.297c-.413-.277-1.378-.444-2.316-.277-.16-.92-.68-1.748-1.536-2.227l-.612-.34-.343.613c-.48.855-.494 1.89-.04 2.766-.356.195-.776.326-1.246.363-.49.038-.85.05-1.127.05H1.05A1.05 1.05 0 000 13.54c.003.535.08 1.066.23 1.58.742 2.548 2.87 4.298 5.768 4.757 3.52.556 7.42-.036 10.9-1.685 3.01-1.428 5.16-3.83 5.92-6.526.4-.13.78-.29 1.13-.48l.45-.25-.4-.25z" />
      </svg>
    );
  }

  // 9. MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2C12 2 6.5 6 6.5 13.5c0 4.8 3.5 8 5.5 10.5 2-2.5 5.5-5.7 5.5-10.5C17.5 6 12 2 12 2z"
          fill="#47A248"
        />
        <path
          d="M12 2v20c-.5-.3-1-.8-1.4-1.3-.8-.9-1.3-1.8-1.3-2.7 0-3.3 2.7-7 2.7-7s2.7 3.7 2.7 7c0 .9-.5 1.8-1.3 2.7-.4.5-.9 1-1.4 1.3V2z"
          fill="#13AA52"
        />
        <path d="M12 3v18" stroke="#3FA037" strokeWidth="1" />
      </svg>
    );
  }

  // 10. PostgreSQL
  if (norm.includes('postgres')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 3c-4.97 0-9 3.8-9 8.5 0 3.2 1.86 6 4.6 7.3-.2.8-.7 2-1.6 2.7 1.8 0 3.6-.9 4.6-2.2.8.2 1.6.2 2.4.2 4.97 0 9-3.8 9-8.5S16.97 3 12 3z"
          fill="#4169E1"
          fillOpacity="0.2"
          stroke="#4169E1"
          strokeWidth="1.6"
        />
        <path
          d="M9 10c0-1.7 1.3-3 3-3s3 1.3 3 3v2c0 1.7-1.3 3-3 3s-3-1.3-3-3v-2z"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  // 11. Redis
  if (norm.includes('redis')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 3L2 8l10 5 10-5-10-5z"
          fill="#FF4438"
          stroke="#DC382D"
          strokeWidth="1.2"
        />
        <path
          d="M2 12l10 5 10-5"
          stroke="#FF4438"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 16l10 5 10-5"
          stroke="#DC382D"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 12. Git & GitHub
  if (norm.includes('git')) {
    return (
      <svg viewBox="0 0 24 24" fill="#F05032" className={className}>
        <path d="M21.6 10.3l-7.9-7.9c-.8-.8-2.1-.8-2.9 0L8.6 4.6l3.3 3.3c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.2 3.2c.8-.3 1.7-.1 2.3.5.9.9.9 2.3 0 3.1-.9.9-2.3.9-3.1 0-.7-.7-.8-1.7-.4-2.5l-3-3v5.1c.3.2.6.5.7.9.5 1.1 0 2.5-1.1 3-1.1.5-2.5 0-3-1.1-.5-1.1 0-2.5 1.1-3 .4-.2.9-.2 1.3-.1v-5.2c-.4-.1-.9-.1-1.3-.3L5.4 13.1c-.8.8-.8 2.1 0 2.9l7.9 7.9c.8.8 2.1.8 2.9 0l7.9-7.9c.8-.8.8-2.1 0-2.9z" />
      </svg>
    );
  }

  // 13. Redux
  if (norm.includes('redux')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" stroke="#764ABC" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" stroke="#764ABC" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2" fill="#764ABC" />
      </svg>
    );
  }

  // 14. Vercel
  if (norm.includes('vercel')) {
    return (
      <svg viewBox="0 0 24 24" fill="#FFFFFF" className={className}>
        <path d="M12 2L23 21H1L12 2Z" />
      </svg>
    );
  }

  // 15. Postman
  if (norm.includes('postman')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path
          d="M8 12l8-5-4 10-1.5-4L8 12z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 16. C++
  if (norm.includes('c++')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2.5l8 4.6v9.2l-8 4.6-8-4.6V7.1l8-4.6z"
          fill="#00599C"
          fillOpacity="0.15"
          stroke="#00599C"
          strokeWidth="1.5"
        />
        <path
          d="M10 9.8c-1.3 0-2.2 1-2.2 2.2s.9 2.2 2.2 2.2c.8 0 1.5-.4 1.8-1"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 12h2.5m-1.25-1.25v2.5M18 12h2.5m-1.25-1.25v2.5"
          stroke="#0086D6"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 17. Linux / Bash
  if (norm.includes('linux') || norm.includes('bash')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="22" height="18" x="1" y="3" rx="3" fill="#18181B" stroke="#FCC624" strokeWidth="1.4" />
        <path d="M5 8l4 4-4 4M11 16h6" stroke="#FCC624" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 18. Socket.io
  if (norm.includes('socket')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" stroke="#38BDF8" strokeWidth="1.5" />
        <path
          d="M13 3L8 13h5l-2 8 8-11h-5l2-7z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // 19. WebAssembly
  if (norm.includes('webassembly') || norm.includes('wasm')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
          fill="#654FF0"
          fillOpacity="0.2"
          stroke="#654FF0"
          strokeWidth="1.5"
        />
        <path
          d="M7 9l2.5 6.5L12 11l2.5 4.5L17 9"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 20. React-Leaflet
  if (norm.includes('leaflet')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"
          fill="#199900"
          fillOpacity="0.2"
          stroke="#199900"
          strokeWidth="1.5"
        />
        <path
          d="M12 6c-2 2-2 4 0 6 2-2 2-4 0-6z"
          fill="#199900"
        />
      </svg>
    );
  }

  // 21. Express.js
  if (norm.includes('express')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#18181B" stroke="#FFFFFF" strokeWidth="1.2" />
        <text
          x="12"
          y="15.5"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#FFFFFF"
          fontFamily="system-ui, sans-serif"
        >
          ex
        </text>
      </svg>
    );
  }

  // 22. MySQL
  if (norm.includes('mysql')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="7" rx="8" ry="3.5" fill="#00758F" fillOpacity="0.3" stroke="#00758F" strokeWidth="1.5" />
        <path d="M4 7v6c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V7" stroke="#00758F" strokeWidth="1.5" />
        <path d="M4 13v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4" stroke="#F29111" strokeWidth="1.5" />
      </svg>
    );
  }

  // 23. SQL
  if (norm === 'sql') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#E38C00" strokeWidth="1.6" />
        <path d="M4 6v5c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="#E38C00" strokeWidth="1.6" />
        <path d="M4 11v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5" stroke="#E38C00" strokeWidth="1.6" />
        <circle cx="16" cy="16" r="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.4" />
        <path d="M14.5 16h3M16 14.5v3" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 24. REST APIs
  if (norm.includes('rest api')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }

  // 25. JWT & Auth
  if (norm.includes('jwt') || norm.includes('auth')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  // Fallback by icon string name to Lucide components
  const iconMap = {
    FileCode2,
    Code2,
    Terminal,
    Cpu,
    Database,
    Atom,
    Globe,
    Workflow,
    Palette,
    MapPin,
    Server,
    Network,
    Radio,
    Layers,
    ShieldCheck,
    HardDrive,
    Box,
    GitBranch,
    Send,
    Cloud,
    Lock,
  };

  const LucideIcon = iconMap[icon] || Code2;
  return <LucideIcon className={className} style={{ color }} />;
}
