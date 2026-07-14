/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface GalleryProps {
  darkMode: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ darkMode }) => {
  const [filter, setFilter] = useState<'all' | 'current' | 'past'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="gallery" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <span className={`font-mono text-[10px] tracking-[0.25em] uppercase block mb-3 ${
          darkMode ? 'text-white/60' : 'text-slate-500'
        }`}>
          PORTFOLIO SHOWCASE
        </span>
        <h2 className={`font-display text-2xl sm:text-3xl font-black tracking-tight uppercase ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          PROJECT GALLERY
        </h2>
        
        {/* Minimal Rounded Filters */}
        <div className="flex flex-wrap gap-2 mt-8">
          {(['all', 'current', 'past'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                filter === type
                  ? darkMode 
                    ? 'bg-white text-black font-extrabold'
                    : 'bg-slate-950 text-white font-extrabold'
                  : darkMode
                    ? 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {type === 'all' ? 'All Builds' : type === 'current' ? 'Current Focus' : 'Past Work'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of clean, highly rounded cards with back-glow effect */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer ${darkMode ? 'animated-glow-dark' : 'animated-glow-light'}`}
            >
              <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden border theme-transition ${
                darkMode 
                  ? 'bg-zinc-950 border-white/10 group-hover:border-white/30' 
                  : 'bg-slate-50 border-slate-200 group-hover:border-slate-400'
              }`}>
                {/* Image with zoom effect */}
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Minimal Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/25">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modern Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border ${
                darkMode ? 'bg-zinc-950 border-white/10' : 'bg-white border-slate-200'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Large Project Image */}
                <div className="md:col-span-2 aspect-[4/3] md:aspect-auto md:h-[500px] bg-black">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Minimalist details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between h-full md:h-[500px]">
                  <div>
                    <span className={`text-[9px] font-mono tracking-widest uppercase block mb-1 ${
                      darkMode ? 'text-white/60' : 'text-slate-500'
                    }`}>
                      {selectedProject.category === 'current' ? 'ACTIVE ROBLOX WORK' : 'ARCHIVED BUILD'}
                    </span>
                    <h3 className={`font-display text-xl font-black tracking-tight mb-4 uppercase ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {selectedProject.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${
                      darkMode ? 'text-white/60' : 'text-slate-500'
                    }`}>
                      All structures are built with visual composition and player navigation in mind, optimized directly in Roblox Studio.
                    </p>
                  </div>

                  <div className="mt-8 space-y-3">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full text-center font-mono font-bold text-[10px] py-3.5 rounded-full tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        darkMode
                          ? 'bg-white hover:bg-zinc-200 text-black'
                          : 'bg-slate-950 hover:bg-slate-800 text-white'
                      }`}
                    >
                      VISIT PLACE ON ROBLOX <ExternalLink className="h-3 w-3" />
                    </a>
                    
                    <button
                      onClick={() => setSelectedProject(null)}
                      className={`w-full py-3.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase transition-colors cursor-pointer ${
                        darkMode 
                          ? 'bg-white/5 hover:bg-white/10 text-white/80' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      CLOSE VIEW
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
