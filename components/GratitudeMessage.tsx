import React from 'react';

const GratitudeMessage: React.FC = () => {
  return (
    <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl shadow-purple-500/10">
      <div className="flex items-start space-x-4 md:space-x-6">
        <div className="flex-shrink-0 group">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=128&h=128&auto=format&fit=crop"
            alt="Bhavana Mam"
            className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-yellow-400 object-cover animate-subtle-pulse group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-yellow-300">A Heartfelt Thanks</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Dear Bhavana Mam,
            <br /><br />
            I am writing this to express my deepest gratitude. Your mentorship was more than just guidance; it was a source of inspiration. You challenged me to think critically, to push beyond my limits, and to never lose sight of the goal. Your belief in my potential gave me the confidence to pursue this achievement.
            <br /><br />
            Thank you for every piece of advice, for every late-night review, and for fostering an environment where curiosity and hard work could flourish. This award is as much yours as it is mine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GratitudeMessage;