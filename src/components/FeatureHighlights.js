import React from 'react';

const FeatureHighlights = () => {
  const features = [
    {
      icon: '💡',
      text: 'Daily coding tips',
      delay: '0ms'
    },
    {
      icon: '🎯',
      text: 'Mini challenges',
      delay: '200ms'
    },
    {
      icon: '🤝',
      text: 'Community learning',
      delay: '400ms'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 mb-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center group cursor-pointer"
          style={{ animationDelay: feature.delay }}
        >
          <div className="text-3xl md:text-4xl mb-2 group-hover:animate-bounce-slow transition-all duration-300">
            {feature.icon}
          </div>
          <span className="text-brown-medium font-medium text-sm md:text-base group-hover:text-brown-dark transition-colors duration-300">
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureHighlights;