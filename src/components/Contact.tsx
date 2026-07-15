/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Gamepad2, Copy, Check, User, ArrowRight } from 'lucide-react';
import { ROBLOX_PROFILE_LINK, CURRENT_GAME_LINK, DISCORD_USERNAME } from '../data';
import { motion } from 'motion/react';

// Custom Discord Icon to match Lucide's style
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    className={props.className}
    {...props}
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.4-5c.9-.65,1.76-1.34,2.58-2a75.59,75.59,0,0,0,72.57,0c.82.71,1.68,1.4,2.58,2a68.43,68.43,0,0,1-10.4,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,122.54,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
  </svg>
);

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(DISCORD_USERNAME);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-dashed border-slate-200 dark:border-white/10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Contact Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-6"
        >
          <span className={`font-mono text-[10px] tracking-[0.25em] uppercase block mb-3 ${
            darkMode ? 'text-white/60' : 'text-slate-500'
          }`}>
            COLLABORATION
          </span>
          <h2 className={`font-display text-2xl sm:text-3xl font-black tracking-tight mb-4 uppercase ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            LET'S BUILD TOGETHER
          </h2>
          <p className={`text-xs leading-relaxed mb-6 ${
            darkMode ? 'text-white/60' : 'text-slate-500'
          }`}>
            I am always open to map-building commissions or collaborating on exciting Roblox projects. Whether you need a competitive arena, skate bowl level, or custom structural hub, I am ready to jump in.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              STATUS: COMMISSION OPEN
            </span>
          </div>
        </motion.div>

        {/* Right Column - Beautiful Minimal Direct Options */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-6 space-y-4"
        >
          
          {/* Discord Button */}
          <div className={`p-5 rounded-3xl border theme-transition flex items-center justify-between ${
            darkMode ? 'bg-zinc-950 border-white/10' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-zinc-500/10 text-zinc-400">
                <DiscordIcon className="h-4 w-4" />
              </div>
              <div>
                <span className={`text-[10px] font-mono block opacity-60 uppercase ${
                  darkMode ? 'text-white' : 'text-slate-500'
                }`}>
                  Discord Tag
                </span>
                <span className={`font-display text-sm font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {DISCORD_USERNAME}
                </span>
              </div>
            </div>
            <button
              onClick={handleCopyDiscord}
              className={`px-4 py-2 rounded-full border theme-transition flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold cursor-pointer ${
                copied
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : darkMode
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white hover:border-white/30'
                    : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-800 hover:border-slate-400'
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3" /> COPIED
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" /> COPY ID
                </>
              )}
            </button>
          </div>

          {/* Roblox Profile Card */}
          <a
            href={ROBLOX_PROFILE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-5 rounded-3xl border theme-transition flex items-center justify-between group ${
              darkMode 
                ? 'bg-zinc-950 border-white/10 hover:border-white/30' 
                : 'bg-slate-50 border-slate-200 hover:border-slate-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-zinc-500/10 text-zinc-400">
                <User className="h-4 w-4" />
              </div>
              <div>
                <span className={`text-[10px] font-mono block opacity-60 uppercase ${
                  darkMode ? 'text-white' : 'text-slate-500'
                }`}>
                  ROBLOX CREATOR
                </span>
                <span className={`font-display text-sm font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  View My Roblox Profile
                </span>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

          {/* Play Skate Together Card */}
          <a
            href={CURRENT_GAME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-5 rounded-3xl border theme-transition flex items-center justify-between group ${
              darkMode 
                ? 'bg-white/5 border-white/10 hover:border-white/30 text-white' 
                : 'bg-slate-100/50 border-slate-200 hover:border-slate-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-zinc-500/10 text-zinc-400">
                <Gamepad2 className="h-4 w-4" />
              </div>
              <div>
                <span className={`text-[10px] font-mono block opacity-60 uppercase ${
                  darkMode ? 'text-white' : 'text-slate-500'
                }`}>
                  ACTIVE PROJECT
                </span>
                <span className={`font-display text-sm font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Play Skate Together
                </span>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

        </motion.div>

      </div>
    </section>
  );
};
