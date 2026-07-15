/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import BackgroundDots from './components/BackgroundDots';
import { CURRENT_GAME_LINK, ROBLOX_PROFILE_LINK, DISCORD_USERNAME } from './data';
import { Gamepad2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kkkimmortal_portfolio_theme');
      return saved !== 'light';
    }
    return true;
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    localStorage.setItem('kkkimmortal_portfolio_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isHovered) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen theme-transition overflow-x-hidden relative ${
      darkMode ? 'bg-[#030303] text-white/90' : 'bg-[#fafafa] text-slate-800'
    }`}>
      
      {/* Elegant Radial Light following the user's cursor */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: darkMode
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), rgba(16, 185, 129, 0.015), transparent 70%)`
            : `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(15, 23, 42, 0.035), rgba(59, 130, 246, 0.01), transparent 70%)`
        }}
      />
      
      {/* Dynamic Glowing Starry Background Dots */}
      <BackgroundDots darkMode={darkMode} />
      
      {/* Sleek Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="relative z-10">

        {/* HERO SECTION - Beautifully minimalist & typographic */}
        <section className="relative pt-24 pb-16 px-6 max-w-5xl mx-auto flex flex-col items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-center uppercase leading-none mb-12 select-none w-full ${
              darkMode ? 'text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] text-glow-heavy' : 'text-slate-900 drop-shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
            }`}
          >
            kkkimmortal
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[45vh] w-full">
            
            {/* Hero Left: Ultra-clean copywriting */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <div className="flex flex-wrap gap-2 mb-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[9px] font-mono tracking-widest uppercase ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 text-white/60' 
                      : 'bg-slate-100 border-slate-200 text-slate-600'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${darkMode ? 'bg-white' : 'bg-black'}`}></span>
                  MAP DESIGNER & BUILDER
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[9px] font-mono tracking-widest uppercase ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 text-white/60' 
                      : 'bg-slate-100 border-slate-200 text-slate-600'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  CONTRIBUTED TO 300K+ VISITS
                </motion.div>
              </div>

              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className={`font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 uppercase leading-[1.1] ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                I BUILD <br />
                <span className={darkMode ? 'text-white glow-white' : 'text-slate-900'}>ROBLOX MAPS.</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className={`text-xs sm:text-sm max-w-lg mb-8 leading-relaxed font-sans ${
                  darkMode ? 'text-white/60' : 'text-slate-500'
                }`}
              >
                I focus on immersive layouts and keeping layers more in the game. I design rich, cohesive environments in Roblox Studio where every detail feels deeply integrated and optimized for gameplay.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              >
                <a
                  href="#gallery"
                  className={`px-6 py-3.5 text-center font-mono font-bold text-[10px] tracking-widest uppercase rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    darkMode
                      ? 'bg-white hover:bg-zinc-200 text-black'
                      : 'bg-slate-950 hover:bg-slate-800 text-white'
                  }`}
                >
                  VIEW WORK SHOWCASE <ArrowRight className="h-3 w-3" />
                </a>
                <a
                  href="#contact"
                  className={`px-6 py-3.5 text-center font-mono font-bold text-[10px] tracking-widest uppercase rounded-full border transition-all cursor-pointer ${
                    darkMode 
                      ? 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10' 
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  GET IN TOUCH
                </a>
              </motion.div>
            </div>

            {/* Hero Right: A simple elegant snapshot with glow back-light */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-5"
            >
              <div className={darkMode ? 'animated-glow-dark' : 'animated-glow-light'}>
                <div className={`p-2 rounded-3xl border theme-transition ${
                  darkMode ? 'bg-zinc-950/60 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src="https://i.ibb.co/rGQ5Dccf/image.png" 
                      alt="Active Skate Together Build"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                      <div>
                        <span className="text-[8px] font-mono tracking-widest text-white/80 uppercase block mb-0.5">
                          LATEST MAP RELEASE
                        </span>
                        <h4 className="text-white font-display text-xs font-black uppercase tracking-wider">
                          SKATE TOGETHER - PLAZA
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* PROJECT SHOWCASE SECTION */}
        <Gallery darkMode={darkMode} />

        {/* BUILDER PROFILE & IMPROVEMENT GOALS */}
        <About darkMode={darkMode} />

        {/* CONTACT & DISCORD COMMISSION CARD */}
        <Contact darkMode={darkMode} />

        {/* PARTNER / SCRIPTER RECOMMENDATION SECTION */}
        <section className={`py-12 border-t theme-transition ${
          darkMode ? 'border-white/5' : 'border-slate-150'
        }`}>
          <div className="max-w-5xl mx-auto px-6">
            <div className={`p-6 sm:p-8 rounded-3xl border theme-transition flex flex-col md:flex-row items-center justify-between gap-6 ${
              darkMode ? 'bg-zinc-950/40 border-white/10' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className={`text-[9px] font-mono tracking-widest uppercase mb-1.5 block ${
                  darkMode ? 'text-white/40' : 'text-slate-400'
                }`}>
                  COLLABORATOR
                </span>
                <p className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? 'text-white/90' : 'text-slate-800'
                }`}>
                  Need a scripter or thumbnails? Check out <span className="font-bold">ycy's work</span>. Years of experience in Luau scripting.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://ycys-work.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap ${
                  darkMode 
                    ? 'bg-white text-black hover:bg-neutral-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Visit ycy's site
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
            </div>
          </div>
        </section>

      </main>

      {/* MINIMAL FOOTER */}
      <footer className={`py-12 border-t theme-transition ${
        darkMode ? 'bg-black/95 border-white/10 text-white/40' : 'bg-slate-50 border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className={`font-display text-xs font-extrabold tracking-wider ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              KKKIMMORTAL
            </span>
            <p className="text-[9px] mt-1 font-mono opacity-60">
              Roblox Environment Map Portfolio. All images represent native building work.
            </p>
          </div>

          <div className="flex gap-4 font-mono text-[9px] uppercase tracking-wider">
            <a 
              href={ROBLOX_PROFILE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:text-black dark:hover:text-white transition-colors`}
            >
              Profile
            </a>
            <span>•</span>
            <a 
              href={CURRENT_GAME_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:text-black dark:hover:text-white transition-colors`}
            >
              Active Build
            </a>
            <span>•</span>
            <span className="cursor-default">
              Discord: <span className={darkMode ? 'text-white' : 'text-slate-800'}>{DISCORD_USERNAME}</span>
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
