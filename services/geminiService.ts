
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we assume the API key is always available.
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateWisdom = async (): Promise<string> => {
  try {
    const prompt = `Generate a short, wise, and encouraging quote that a mentor like Bhavana mam might say to a student who has just won an award. The quote should be inspiring, forward-looking, and under 25 words.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const text = response.text.trim();
    // Remove potential markdown like quotes
    return text.replace(/^"|"$/g, '');
  } catch (error) {
    console.error("Error generating wisdom:", error);
    return "The greatest achievements are but stepping stones to what lies ahead. Keep climbing.";
  }
};
