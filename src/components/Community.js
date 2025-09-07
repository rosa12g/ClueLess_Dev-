import React from 'react';

const Community = () => {
  const handleJoinCommunity = () => {
    window.open('https://t.me/LetsLearnToget', '_blank');
  };

  const handleJoinChannel = () => {
    window.open('https://t.me/we_flutter', '_blank');
  };

  const stats = [
    { number: '500+', label: 'Community Members', icon: '👥' },
    { number: '50+', label: 'Challenges Completed', icon: '🎯' },
    { number: '100+', label: 'Daily Tips Shared', icon: '💡' },
    { number: '24/7', label: 'Community Support', icon: '💬' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-100 via-coffee-200 to-orange-200 dark:from-obsidian-900 dark:via-midnight-900 dark:to-dark-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-800 dark:text-cream-100 font-poppins mb-6">
            Join Our Community
          </h2>
          <p className="text-lg md:text-xl text-coffee-600 dark:text-cream-200 max-w-3xl mx-auto">
            Connect with passionate Flutter developers from around the world. Learn together, share projects, and grow your skills.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="backdrop-blur-sm bg-cream-50/80 dark:bg-midnight-800/80 rounded-2xl p-6 text-center border border-coffee-200/30 dark:border-midnight-600/50 shadow-lg">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-coffee-800 dark:text-cream-100 mb-1">{stat.number}</div>
              <div className="text-coffee-600 dark:text-cream-200 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Telegram Channel Card */}
          <div className="backdrop-blur-sm bg-cream-50/80 dark:bg-midnight-800/80 rounded-3xl p-8 text-center border border-coffee-200/30 dark:border-midnight-600/50 shadow-xl">
            <div className="text-6xl mb-6">📱</div>
            <h3 className="text-2xl md:text-3xl font-bold text-coffee-800 dark:text-cream-100 mb-4 font-poppins">
              Flutter Channel
            </h3>
            <p className="text-coffee-600 dark:text-cream-200 mb-6 leading-relaxed">
              Get daily Flutter tips, tutorials, and updates. Stay informed about the latest in Flutter development.
            </p>
            <button
              onClick={handleJoinChannel}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Join Channel
            </button>
          </div>

          {/* Telegram Group Card */}
          <div className="backdrop-blur-sm bg-cream-50/80 dark:bg-midnight-800/80 rounded-3xl p-8 text-center border border-coffee-200/30 dark:border-midnight-600/50 shadow-xl">
            <div className="text-6xl mb-6">💬</div>
            <h3 className="text-2xl md:text-3xl font-bold text-coffee-800 dark:text-cream-100 mb-4 font-poppins">
              Learning Group
            </h3>
            <p className="text-coffee-600 dark:text-cream-200 mb-6 leading-relaxed">
              Interactive community where you can ask questions, share projects, and collaborate with other developers.
            </p>
            <button
              onClick={handleJoinCommunity}
              className="bg-gradient-to-r from-coffee-600 to-espresso-600 hover:from-coffee-700 hover:to-espresso-700 text-cream-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Join Group
            </button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="backdrop-blur-sm bg-cream-50/80 dark:bg-midnight-800/80 rounded-3xl p-8 md:p-12 inline-block border border-coffee-200/30 dark:border-midnight-600/50 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-coffee-800 dark:text-cream-100 mb-4 font-poppins">
              Ready to Start Your Flutter Journey?
            </h3>
            <p className="text-coffee-600 dark:text-cream-200 mb-8 max-w-2xl">
              Join thousands of developers who are already learning, building, and growing together in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleJoinCommunity}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Join Community Now
              </button>
              <button
                onClick={handleJoinChannel}
                className="bg-cream-100 dark:bg-midnight-700 text-coffee-800 dark:text-cream-200 border-2 border-coffee-300 dark:border-midnight-600 hover:bg-coffee-50 dark:hover:bg-midnight-600 font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Follow Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;