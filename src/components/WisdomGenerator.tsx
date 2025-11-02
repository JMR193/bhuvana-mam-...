// FIX: Replaced invalid placeholder content with a functional React component.
// This component uses the Gemini API to generate inspirational quotes related to mentorship and technology.
import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';

const WisdomGenerator: React.FC = () => {
  const [wisdom, setWisdom] = useState<string>('Your guidance was the compass that led me through the challenges. Click the button to get an inspired quote.');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generateWisdom = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Per Gemini API guidelines, initialize with API key from environment variables.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Per Gemini API guidelines, use generateContent for text generation.
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Generate a short, insightful quote about mentorship and innovation in the medical technology field. It should be one or two sentences.',
      });

      // Per Gemini API guidelines, extract text using the .text property.
      const text = response.text;
      if (text) {
        setWisdom(text);
      } else {
        setError('Failed to generate wisdom. The response was empty.');
      }
    } catch (e: any) {
      console.error(e);
      setError('An error occurred while generating wisdom. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section className="text-center">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">A Drop of Wisdom</h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Inspired by your mentorship, here's a little piece of generated wisdom.
      </p>
      <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 min-h-[150px] flex items-center justify-center shadow-lg transition-all duration-300">
        {isLoading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-300"></div>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <blockquote className="font-playfair text-xl md:text-2xl text-yellow-100 italic">
            &ldquo;{wisdom}&rdquo;
          </blockquote>
        )}
      </div>
      <button
        onClick={generateWisdom}
        disabled={isLoading}
        className="mt-8 px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed transform hover:scale-105"
      >
        {isLoading ? 'Generating...' : 'Inspire Me'}
      </button>
    </section>
  );
};

export default WisdomGenerator;
