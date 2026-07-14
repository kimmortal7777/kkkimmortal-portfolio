/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'SHOWCASE', href: '#gallery' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md theme-transition ${
        darkMode 
          ? 'bg-black/90 border-white/10 text-white/90' 
          : 'bg-white/95 border-slate-200 text-slate-800'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Minimal Monogram / Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className={`font-display text-base font-extrabold tracking-wider ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            KKKIMMORTAL<span className={darkMode ? 'text-white' : 'text-slate-900'}>.</span>
          </span>
          <span className={`text-[9px] font-mono tracking-widest uppercase opacity-60 hidden sm:inline ${
            darkMode ? 'text-white' : 'text-slate-500'
          }`}>
            ROBLOX BUILDER
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-mono text-[10px] tracking-widest transition-colors ${
                  darkMode ? 'text-white/60 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className={`h-4 w-px ${darkMode ? 'bg-white/10' : 'bg-slate-200'}`}></div>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1.5 rounded-full transition-colors ${
              darkMode ? 'hover:bg-white/5 text-white' : 'hover:bg-slate-100 text-slate-700'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div 
          id="mobile-nav-panel"
          className={`md:hidden border-b py-4 px-6 theme-transition ${
            darkMode ? 'bg-black border-white/10' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-[10px] tracking-widest py-2 px-3 rounded transition-colors ${
                  darkMode 
                    ? 'text-white/60 hover:bg-white/5 hover:text-white' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
