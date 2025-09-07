import React, { useState } from 'react';

const About = () => {
    const [activeScreen, setActiveScreen] = useState(0);

    const screens = [
        {
            title: 'Dashboard',
            subtitle: 'Your Flutter learning hub',
            icon: '📱',
            gradient: 'from-blue-400 via-blue-500 to-blue-600',
            features: ['Daily Progress', 'Learning Path', 'Quick Access']
        },
        {
            title: 'Tutorials',
            subtitle: 'Step-by-step Flutter guides',
            icon: '📚',
            gradient: 'from-green-400 via-green-500 to-green-600',
            features: ['Video Lessons', 'Code Examples', 'Practice Projects']
        },
        {
            title: 'Code Lab',
            subtitle: 'Interactive coding challenges',
            icon: '⚡',
            gradient: 'from-purple-400 via-purple-500 to-purple-600',
            features: ['Live Coding', 'Debug Practice', 'Code Reviews']
        },
        {
            title: 'Community',
            subtitle: 'Connect with developers',
            icon: '👥',
            gradient: 'from-orange-400 via-orange-500 to-orange-600',
            features: ['Developer Chat', 'Project Sharing', 'Help & Support']
        }
    ];

    const navIcons = ['📱', '📚', '⚡', '👥'];
    return (
        <section className="py-16 md:py-24 bg-cream-50 dark:bg-obsidian-900">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-800 dark:text-cream-100 font-poppins">
                            About Clueless Dev
                        </h2>

                        <p className="text-lg md:text-xl text-coffee-600 dark:text-cream-200 leading-relaxed">
                            Clueless Dev is where beginner and intermediate Flutter developers learn together,
                            share projects, tackle challenges, and grow as a community. We believe that learning
                            is better when it's collaborative, fun, and accessible to everyone.
                        </p>

                        <p className="text-base md:text-lg text-coffee-500 dark:text-cream-300 leading-relaxed">
                            Whether you're just starting your Flutter journey or looking to level up your skills,
                            our community provides the resources, support, and motivation you need to succeed.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full">
                                <span className="text-coffee-800 dark:text-amber-200 font-medium">Beginner Friendly</span>
                            </div>
                            <div className="bg-coffee-100 dark:bg-coffee-800/50 px-4 py-2 rounded-full">
                                <span className="text-coffee-800 dark:text-coffee-200 font-medium">Community Driven</span>
                            </div>
                            <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full">
                                <span className="text-coffee-800 dark:text-orange-200 font-medium">Project Based</span>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="relative flex justify-center">
                        {/* Phone Shadow */}
                        <div className="absolute inset-0 bg-black/20 rounded-[2.5rem] blur-xl transform translate-y-6 scale-105"></div>

                        {/* Phone Frame */}
                        <div className="relative w-64 h-[520px] bg-gradient-to-b from-coffee-dark to-coffee-medium dark:from-obsidian-light dark:to-midnight-medium rounded-[2.5rem] p-2 shadow-2xl">
                            {/* Screen */}
                            <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                                {/* Status Bar */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-black/50 backdrop-blur-sm flex items-center justify-between px-4 z-10">
                                    <div className="text-white text-xs font-medium">9:41</div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-1.5 bg-white rounded-sm opacity-60"></div>
                                        <div className="w-3 h-1.5 bg-white rounded-sm opacity-80"></div>
                                        <div className="w-5 h-2.5 border border-white rounded-sm opacity-90">
                                            <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* App Content with Transitions */}
                                <div className={`w-full h-full bg-gradient-to-br ${screens[activeScreen].gradient} flex flex-col transition-all duration-500 ease-in-out`}>
                                    {/* App Header */}
                                    <div className="pt-12 pb-6 px-4 transition-all duration-300">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-white/90 text-sm font-semibold">Clueless Dev</div>
                                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="text-white text-xl font-bold mb-1 transition-all duration-300">
                                            {screens[activeScreen].title}
                                        </div>
                                        <div className="text-white/80 text-xs transition-all duration-300">
                                            {screens[activeScreen].subtitle}
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-t-2xl p-4 transition-all duration-300">
                                        <div className="text-center mb-6">
                                            <div className="text-4xl mb-3 transition-all duration-500 transform hover:scale-110">
                                                {screens[activeScreen].icon}
                                            </div>
                                            <div className="space-y-2">
                                                {screens[activeScreen].features.map((feature, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="bg-white/20 backdrop-blur-sm rounded-lg p-2 transition-all duration-300 hover:bg-white/30"
                                                        style={{
                                                            transitionDelay: `${idx * 100}ms`,
                                                            opacity: 1,
                                                            transform: 'translateY(0px)'
                                                        }}
                                                    >
                                                        <div className="text-white font-medium text-xs">{feature}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Interactive Bottom Navigation */}
                                    <div className="h-16 bg-black/20 backdrop-blur-sm flex items-center justify-around px-4">
                                        {navIcons.map((icon, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveScreen(idx)}
                                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${idx === activeScreen
                                                        ? 'bg-white/30 scale-110'
                                                        : 'bg-white/10 hover:bg-white/20'
                                                    }`}
                                            >
                                                <span className="text-lg">{icon}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-white/30 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;