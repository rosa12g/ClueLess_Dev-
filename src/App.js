import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-cream-50 via-coffee-50 to-amber-50 dark:from-obsidian-900 dark:via-midnight-900 dark:to-dark-900 transition-colors duration-300">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="community">
          <Community />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;