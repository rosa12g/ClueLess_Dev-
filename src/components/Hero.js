import React from 'react';
import Logo from './Logo';

const Hero = () => {
  const handleJoinCommunity = () => {
    const telegramGroup = 'https://t.me/LetsLearnToget';
    window.open(telegramGroup, '_blank');
  };

  const handleDownloadApp = () => {
    alert('App download coming soon! Join our community for updates.');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-300/30 to-orange-300/20 dark:bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/25 to-purple-200/20 dark:bg-coffee-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-100/15 via-orange-100/10 to-yellow-100/15 dark:from-amber-900/5 dark:to-coffee-900/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-br from-green-200/20 to-teal-200/15 dark:bg-green-500/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="backdrop-blur-xl bg-white/95 dark:bg-obsidian-800/90 rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-2xl border border-white/50 dark:border-midnight-600/50 animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <Logo />
          </div>
          
          {/* App Name */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-coffee-800 via-amber-600 to-orange-600 dark:from-amber-300 dark:via-cream-200 dark:to-amber-400 bg-clip-text text-transparent mb-6 font-poppins animate-slide-up">
            Clueless Dev
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-coffee-600 dark:text-cream-200 mb-12 font-medium max-w-4xl mx-auto animate-slide-up">
            Learn Flutter, Share Projects, Grow Together
          </p>
          
          {/* Enhanced Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
            <span className="px-5 py-3 bg-gradient-to-r from-amber-50 to-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-200 rounded-full text-sm font-medium shadow-lg border border-amber-200/50 dark:border-amber-800/30">
              Daily Tips
            </span>
            <span className="px-5 py-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:bg-coffee-900/30 text-blue-700 dark:text-coffee-200 rounded-full text-sm font-medium shadow-lg border border-blue-200/50 dark:border-coffee-800/30">
              Community Driven
            </span>
            <span className="px-5 py-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:bg-orange-900/30 text-purple-700 dark:text-orange-200 rounded-full text-sm font-medium shadow-lg border border-purple-200/50 dark:border-orange-800/30">
              Project Based
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button
              onClick={handleJoinCommunity}
              className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50 animate-glow"
            >
              <span className="flex items-center gap-2">
                Join Our Community
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={handleDownloadApp}
              className="bg-white dark:bg-midnight-800 text-gray-700 dark:text-cream-200 border-2 border-gray-200 dark:border-midnight-600 hover:bg-gray-50 dark:hover:bg-midnight-700 font-semibold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
            >
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;