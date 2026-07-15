/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, ShieldAlert, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-24 px-6 border-t border-dashed border-slate-200 dark:border-white/10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column - Biography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5"
        >
          <span className={`font-mono text-[10px] tracking-[0.25em] uppercase block mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            BUILDER PROFILE
          </span>
          <h3 className={`font-display text-2xl font-black tracking-tight mb-6 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            KKKIMMORTAL
          </h3>
          <p className={`text-xs leading-relaxed mb-6 ${
            darkMode ? 'text-white/60' : 'text-slate-500'
          }`}>
            I am a dedicated Roblox map builder specializing in clean, highly playable environment layouts and smooth structural geometry. I am currently focused on bigger stud and low poly maps, designing worlds optimized for smooth player movement and flawless collision paths.
          </p>
          <p className={`text-xs leading-relaxed ${
            darkMode ? 'text-white/60' : 'text-slate-500'
          }`}>
            Whether designing competitive bowls for skate games or classic arcade arenas, I focus on spatial composition and pure building craft to create worlds players love spending time in.
          </p>
        </motion.div>

        {/* Right Column - Improvement Goals */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-7 flex flex-col justify-center"
        >
          <div className={`${darkMode ? 'animated-glow-dark' : 'animated-glow-light'}`}>
            <div className={`p-6 sm:p-8 rounded-3xl border theme-transition ${
              darkMode ? 'bg-zinc-950 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <h4 className={`font-display text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                <Target className={`h-4 w-4 ${darkMode ? 'text-white' : 'text-slate-900'}`} />
                How I'm Looking to Improve
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className={`font-display text-sm font-bold mb-1.5 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Spatial Map Flow & Routing
                  </h5>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-white/60' : 'text-slate-500'}`}>
                    Designing smoother visual sightlines and movement paths that elevate competitive gameplay and navigation.
                  </p>
                </div>

                <div>
                  <h5 className={`font-display text-sm font-bold mb-1.5 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Roblox-Native Optimization
                  </h5>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-white/60' : 'text-slate-500'}`}>
                    Perfecting asset division and clean physics partitioning to ensure maps load instantly and perform flawless on both high-end PCs and mobile devices.
                  </p>
                </div>

                <div>
                  <h5 className={`font-display text-sm font-bold mb-1.5 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Structural World Scale
                  </h5>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-white/60' : 'text-slate-500'}`}>
                    Studying architectural patterns to design larger, more cohesive worlds that capture the imagination of players without feeling empty.
                  </p>
                </div>

                <div>
                  <h5 className={`font-display text-sm font-bold mb-1.5 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    3D Modeling in Blender
                  </h5>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-white/60' : 'text-slate-500'}`}>
                    Learning custom 3D asset creation and mesh modeling in Blender to design highly unique structures and props beyond default studio geometry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
