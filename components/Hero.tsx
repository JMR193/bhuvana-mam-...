import React from 'react';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <header className="text-center pt-16 md:pt-24">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-300 mb-4 animate-bounce">
        <StarIcon />
        <span>Award Winner at ISVTEC - 2025</span>
      </div>
      <h1 className="font-playfair text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400 text-transparent bg-clip-text animate-fade-in-up">
        Thank You, Bhavana Mam
      </h1>
      <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 animate-fade-in-up animation-delay-300">
        Your guidance was the light that illuminated the path to success at the conference in Chennai.
      </p>

      <div className="mt-8 max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 animate-fade-in-up animation-delay-600 text-center shadow-lg">
        <p className="font-playfair text-xl font-bold text-yellow-300 mb-3">
          International Conference on Intelligent Systems and Vision Technology in Eye Care (ISVTEC - 2025)
        </p>
        <p className="text-gray-300"><span className="font-semibold text-gray-100">Theme:</span> Technology in Eyecare</p>
        <p className="text-gray-300"><span className="font-semibold text-gray-100">Dates:</span> 24th and 25th October 2025</p>
        <a 
          href="https://licet.ac.in/isvtec2025/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 inline-block text-yellow-400 hover:text-yellow-300 font-semibold hover:underline transition-colors"
        >
          Visit Conference Website &rarr;
        </a>
      </div>
    </header>
  );
};

export default Hero;