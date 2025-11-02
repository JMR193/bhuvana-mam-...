
import React from 'react';
import Hero from './components/Hero';
import GratitudeMessage from './components/GratitudeMessage';
import AwardShowcase from './components/AwardShowcase';
import WisdomGenerator from './components/WisdomGenerator';
import SkillsLearned from './components/SkillsLearned';
import Footer from './components/Footer';
import Confetti from './components/Confetti';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 opacity-80"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <Confetti />

      <main className="relative z-10 p-4 sm:p-6 md:p-8">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          <Hero />
          <GratitudeMessage />
          <AwardShowcase />
          <WisdomGenerator />
          <SkillsLearned />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;