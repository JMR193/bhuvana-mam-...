import React, { useState } from 'react';

// Data for the carousel
const awardImages = [
  {
    src: 'https://images.unsplash.com/photo-1593339772594-5a1a5fe459b5?q=80&w=500&h=400&auto=format&fit=crop',
    alt: 'Best Paper Award Certificate',
    title: 'Best Paper Award',
    description: 'Recognized for outstanding contribution and innovation in VLSI research.',
  },
  {
    src: 'https://images.unsplash.com/photo-1582213782129-28b02422a52d?q=80&w=500&h=400&auto=format&fit=crop',
    alt: 'Research poster presentation',
    title: 'Poster Presentation',
    description: 'Explaining the research findings to the conference attendees.',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=500&h=400&auto=format&fit=crop',
    alt: 'Group photo with mentor',
    title: 'A Proud Moment',
    description: 'Celebrating the achievement with my mentor and team.',
  },
];


const AwardShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? awardImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === awardImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="text-center">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">The Achievement</h2>
      <div className="max-w-xl mx-auto relative group">
        <div className="relative h-96 w-full bg-gray-800 rounded-lg overflow-hidden border-2 border-yellow-400/50 shadow-lg">
          {awardImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover ${index === currentIndex ? 'animate-kenburns' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-yellow-300">{image.title}</h3>
                <p className="mt-1 text-gray-200">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          aria-label="Previous image"
          className="absolute top-1/2 left-3 transform -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right Arrow */}
        <button
          onClick={goToNext}
          aria-label="Next image"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {awardImages.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              aria-label={`Go to image ${slideIndex + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === slideIndex ? 'bg-yellow-300 scale-125' : 'bg-gray-500/50 hover:bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardShowcase;