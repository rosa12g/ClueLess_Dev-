import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleChannelClick = () => {
        window.open('https://t.me/we_flutter', '_blank');
    };

    const handleGroupClick = () => {
        window.open('https://t.me/LetsLearnToget', '_blank');
    };

    const footerLinks = [
        { label: 'About', href: '#about' },
        { label: 'Features', href: '#features' },
        { label: 'Community', href: '#community' },
        { label: 'Contact', onClick: handleGroupClick }
    ];

    return (
        <footer className="bg-gradient-to-br from-coffee-900 via-coffee-800 to-espresso-900 text-cream-50">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">CD</span>
                            </div>
                            <h3 className="text-2xl font-bold font-poppins text-cream-100">Clueless Dev</h3>
                        </div>
                        <p className="text-white text-opacity-80 mb-6 max-w-md">
                            Empowering Flutter developers to learn, share, and grow together. Join our community and accelerate your development journey.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <button
                                onClick={handleChannelClick}
                                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
                                title="Flutter Channel"
                            >
                                <span className="text-xl">📱</span>
                            </button>
                            <button
                                onClick={handleGroupClick}
                                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
                                title="Learning Group"
                            >
                                <span className="text-xl">💬</span>
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    {link.href ? (
                                        <a
                                            href={link.href}
                                            className="text-white text-opacity-80 hover:text-opacity-100 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={link.onClick}
                                            className="text-white text-opacity-80 hover:text-opacity-100 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-poppins">Community</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={handleChannelClick}
                                    className="text-white text-opacity-80 hover:text-opacity-100 transition-colors duration-300"
                                >
                                    Flutter Channel
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleGroupClick}
                                    className="text-white text-opacity-80 hover:text-opacity-100 transition-colors duration-300"
                                >
                                    Learning Group
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white border-opacity-20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white text-opacity-60 text-sm">
                            © {currentYear} Clueless Dev. All rights reserved.
                        </p>

                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;