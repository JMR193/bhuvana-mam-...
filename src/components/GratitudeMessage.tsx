import React from 'react';

const GratitudeMessage: React.FC = () => {
  return (
    <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl shadow-purple-500/10">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-yellow-300">A Heartfelt Thanks</h2>
      <p className="mt-4 text-gray-300 leading-relaxed">
        Dear Bhuvana Mam,
        <br /><br />
        I am writing this to express my deepest gratitude. Your mentorship was more than just guidance; it was a source of inspiration. You challenged me to think critically, to push beyond my limits, and to never lose sight of the goal. Your belief in my potential gave me the confidence to pursue this achievement.
        <br /><br />
        Thank you for every piece of advice, for every late-night review, and for fostering an environment where curiosity and hard work could flourish. This award is as much yours as it is mine.
      </p>
    </section>
  );
};

export default GratitudeMessage;