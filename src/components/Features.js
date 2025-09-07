import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '💡',
      title: 'Daily Dose',
      description: 'Get daily Flutter tips and tricks to improve your coding skills',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '📚',
      title: 'Glossary & Terms',
      description: 'Comprehensive Flutter terminology and concepts explained simply',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '🎯',
      title: 'Challenges & Projects',
      description: 'Hands-on coding challenges and real-world project ideas',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '💬',
      title: 'Community Chat',
      description: 'Connect with fellow developers and get help when you need it',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: '🤖',
      title: 'AI Suggestions',
      description: 'Smart recommendations for your learning path and projects',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: '💼',
      title: 'Freelance Integration',
      description: 'Find Flutter freelance opportunities and build your portfolio',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-100 to-cream-50 dark:from-midnight-800 dark:to-obsidian-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-800 dark:text-cream-100 font-poppins mb-6 drop-shadow-lg">
            App Features
          </h2>
          <p className="text-lg md:text-xl text-coffee-600 dark:text-cream-200 max-w-3xl mx-auto">
            Everything you need to master Flutter development and connect with a thriving community
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-midnight-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100 dark:border-midnight-600"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-cream-100 mb-4 font-poppins">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-cream-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;