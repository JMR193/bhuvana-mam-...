import React, { useState, useCallback } from 'react';
import { generateWisdom } from '../services/geminiService';

const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.455-2.455L12.75 18l1.177-.398a3.375 3.375 0 002.455-2.455l.398-1.177.398 1.177a3.375 3.375 0 002.455 2.455l1.177.398-1.177.398a3.375 3.375 0 00-2.455 2.455z" />
    </svg>
);


const WisdomGenerator: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWisdom = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setQuote(''); // Clear previous quote to allow animation on new one
    try {
      const newQuote = await generateWisdom();
      setQuote(newQuote);
    } catch (err) {
      setError('Failed to fetch wisdom. Please try again.');
      setQuote('');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl shadow-purple-500/10">
      <SparklesIcon className="w-12 h-12 text-yellow-300 mx-auto mb-4"/>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Words of Wisdom</h2>
      <p className="text-gray-300 mb-6 max-w-xl mx-auto">Click the button to generate an inspirational quote in the spirit of Bhavana Mam's mentorship.</p>
      
      <div className="min-h-[6rem] flex items-center justify-center p-4 bg-gray-800/50 rounded-lg mb-6 overflow-hidden">
        {isLoading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-300"></div>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : quote ? (
          <p key={quote} className="font-playfair text-2xl italic text-yellow-200 animate-fade-in-up">
            "{quote}"
          </p>
        ) : (
          <p className="text-gray-500">Your quote will appear here...</p>
        )}
      </div>
      
      <button
        onClick={fetchWisdom}
        disabled={isLoading}
        className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed"
        aria-live="polite"
      >
        <SparklesIcon className="w-5 h-5 mr-2" />
        {isLoading ? 'Generating...' : 'Generate New Wisdom'}
      </button>
    </section>
  );
};

export default WisdomGenerator;
