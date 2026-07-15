import React, { useEffect, useState } from 'react';

interface Dot {
  id: number;
  x: number; // percentage
  y: number; // percentage
  size: number; // px
  minOpacity: number;
  maxOpacity: number;
  pulseSpeed: number; // seconds
  driftX: number; // horizontal drift offset in px
  driftY: number; // vertical drift offset in px
}

interface BackgroundDotsProps {
  darkMode: boolean;
}

export default function BackgroundDots({ darkMode }: BackgroundDotsProps) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // Generate 80 random, elegantly spaced dots across the full document height
    const generatedDots: Dot[] = Array.from({ length: 80 }).map((_, index) => {
      const baseOpacity = Math.random() * 0.5 + 0.2; // 0.2 to 0.7 base opacity
      return {
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1, // 1px to 3px
        minOpacity: baseOpacity * 0.25,
        maxOpacity: baseOpacity,
        pulseSpeed: Math.random() * 16 + 12, // 12s to 28s for extremely smooth, slow movement
        driftX: Math.random() * 160 - 80, // drift up to 80px left/right
        driftY: Math.random() * 160 - 80, // drift up to 80px up/down
      };
    });
    setDots(generatedDots);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {dots.map((dot) => {
        const glowClass = darkMode 
          ? 'shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
          : 'shadow-[0_0_6px_rgba(15,23,42,0.15)]';
        
        return (
          <div
            key={dot.id}
            className={`absolute rounded-full transition-colors duration-1000 ${glowClass}`}
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: darkMode ? '#ffffff' : '#94a3b8',
              animation: `driftAndPulse ${dot.pulseSpeed}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
              animationDelay: `${dot.id * -0.15}s`, // staggered start times
              '--tx': `${dot.driftX}px`,
              '--ty': `${dot.driftY}px`,
              '--min-op': dot.minOpacity,
              '--max-op': dot.maxOpacity,
            } as React.CSSProperties}
          />
        );
      })}
      
      {/* Inject custom drifting and scaling keyframe inline */}
      <style>{`
        @keyframes driftAndPulse {
          0%, 100% {
            transform: translate(0, 0) scale(0.85);
            opacity: var(--min-op);
          }
          50% {
            transform: translate(var(--tx), var(--ty)) scale(1.15);
            opacity: var(--max-op);
          }
        }
      `}</style>
    </div>
  );
}

