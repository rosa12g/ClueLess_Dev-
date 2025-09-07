import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#community' },
  ];

  const handleJoinCommunity = () => {
    window.open('https://t.me/LetsLearnToget', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'backdrop-blur-xl bg-cream-50/95 dark:bg-obsidian-900/95 shadow-2xl shadow-coffee-500/20 border-b border-coffee-200/30 dark:border-midnight-600/50'
      : 'backdrop-blur-sm bg-cream-50/80 dark:bg-obsidian-900/80'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-coffee-600 to-amber-500 rounded-xl flex items-center justify-center shadow-xl shadow-coffee-500/30">
              <span className="text-white font-bold text-lg">CD</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-coffee-800 dark:text-cream-200 font-poppins">
              Clueless Dev
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-coffee-700 dark:text-cream-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-all duration-200 relative group hover:drop-shadow-lg"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 dark:bg-amber-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-amber-500/50"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-coffee-100 dark:bg-coffee-800 hover:bg-coffee-200 dark:hover:bg-coffee-700 transition-all duration-200 shadow-lg shadow-coffee-200/50 hover:shadow-xl hover:shadow-coffee-300/60"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-coffee-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={handleJoinCommunity}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-amber-500/40 hover:shadow-2xl hover:shadow-amber-600/50"
            >
              Join Community
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-coffee-100 dark:bg-coffee-800 hover:bg-coffee-200 dark:hover:bg-coffee-700 transition-all duration-200 shadow-lg shadow-coffee-200/50"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-coffee-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-coffee-100 dark:bg-coffee-800 hover:bg-coffee-200 dark:hover:bg-coffee-700 transition-all duration-200 shadow-lg shadow-coffee-200/50"
            >
              <svg className="w-6 h-6 text-coffee-700 dark:text-cream-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-cream-50/95 dark:bg-obsidian-900/95 border-b border-coffee-200/30 dark:border-midnight-600/50 shadow-2xl shadow-coffee-500/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-coffee-700 dark:text-cream-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-all duration-200 py-2 hover:drop-shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  handleJoinCommunity();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 mt-4 shadow-xl shadow-amber-500/40"
              >
                Join Community
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;