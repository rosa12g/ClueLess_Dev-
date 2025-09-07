import React, { useState } from 'react';

const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex justify-center mb-6">
            <div
                className={`
          w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40
          bg-gradient-to-br from-coffee-700 via-amber-500 to-orange-500
          rounded-full 
          flex items-center justify-center 
          shadow-2xl
          transition-all duration-500 ease-in-out
          cursor-pointer
          animate-float
          border-4 border-white/30 dark:border-slate-700/50
          hover:shadow-amber-500/25 hover:shadow-3xl
          ${isHovered ? 'transform scale-110 rotate-12 animate-glow' : 'transform scale-100 rotate-0'}
        `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Logo Text */}
                <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl drop-shadow-lg">
                    CD
                </div>

                {/* Alternative: Use the actual logo image */}
                {/* <img 
          src="/path-to-your-logo.png" 
          alt="Clueless Dev Logo" 
          className="w-full h-full object-cover rounded-full"
        /> */}
            </div>
        </div>
    );
};

export default Logo;