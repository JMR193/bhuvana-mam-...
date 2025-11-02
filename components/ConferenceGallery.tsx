import React from 'react';

const images = [
  { src: 'https://images.unsplash.com/photo-1582213782129-28b02422a52d?q=80&w=500&h=400&auto=format&fit=crop', alt: 'Presenting the paper at the conference' },
  { src: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=500&h=400&auto=format&fit=crop', alt: 'Celebrating with mentor and team' },
  { src: 'https://images.unsplash.com/photo-1593339772594-5a1a5fe459b5?q=80&w=500&h=400&auto=format&fit=crop', alt: 'The Best Paper Award certificate' },
  { src: 'https://images.unsplash.com/photo-1596254139883-01c87641c694?q=80&w=500&h=300&auto=format&fit=crop', alt: 'Exploring the vibrant city of Chennai' },
];

const ConferenceGallery: React.FC = () => {
  return (
    <section>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-8">Conference Memory Lane</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg border-2 border-white/10 aspect-video">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConferenceGallery;