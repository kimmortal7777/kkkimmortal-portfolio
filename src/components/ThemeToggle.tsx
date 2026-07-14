/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleDarkMode}
      className={`relative inline-flex h-9 w-16 shrink-0 cursor-pointer items-center rounded-full p-0.5 border transition-colors duration-300 focus:outline-none ${
        darkMode 
          ? 'bg-[#121214] border-[#2c2c35] text-white glow-box-white' 
          : 'bg-[#f1f5f9] border-[#cbd5e1] text-[#0f172a]'
      }`}
      aria-label="Toggle visual theme"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Track Background Icons */}
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none opacity-40">
        <Sun className="h-3.5 w-3.5" />
        <Moon className="h-3.5 w-3.5" />
      </div>

      {/* Interactive Switch Thumb */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`flex h-7.5 w-7.5 items-center justify-center rounded-full shadow-md z-10 ${
          darkMode 
            ? 'bg-[#18181b] border border-[#3f3f46]' 
            : 'bg-white border border-[#e2e8f0]'
        }`}
        style={{
          x: darkMode ? 26 : 0
        }}
      >
        {darkMode ? (
          <Moon className="h-4 w-4 text-white" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
};
