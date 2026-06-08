import { GoogleGenAI } from '@google/genai';

// Initialize the SDK. It expects process.env.API_KEY to be available.
let ai: GoogleGenAI | null = null;

try {
  // @ts-ignore - Assuming process.env is provided by the environment
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
     // @ts-ignore
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY, vertexai: true });
  }
} catch (e) {
  console.warn("Gemini API key not found or initialization failed.", e);
}

export const generateSurvivalGuide = async (festivalName: string): Promise<string> => {
  if (!ai) {
    return "The cosmic web is currently unreachable. Remember to hydrate your vessel, ground your energy, and flow with the music.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Provide a short, mystical, 3-bullet-point spiritual guide for attending ${festivalName}. Focus on harmonizing energy, connecting with others, and flowing with the experience. Keep it under 100 words total.`,
    });
    return response.text || "The visions are cloudy right now.";
  } catch (error) {
    console.error("Error generating guide:", error);
    return "The astral projection failed. Stay grounded and safe!";
  }
};

export const generateSecretRumors = async (festivalName: string): Promise<string> => {
  if (!ai) {
    return "The collective consciousness whispers of a secret gathering near the glowing trees.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Invent a believable but mystical "secret set" or "hidden gathering" rumor for ${festivalName}. Include a vague, ethereal location and time. Keep it to one sentence. Make it sound like a whisper from the collective consciousness.`,
      config: {
        temperature: 0.9,
      }
    });
    return response.text || "The frequencies are quiet right now. Listen closely.";
  } catch (error) {
    console.error("Error generating rumors:", error);
    return "The ethereal link is severed. Follow the bass.";
  }
};

export const chatWithAgent = async (festivalName: string, message: string, apiContext: string): Promise<string> => {
  if (!ai) return "The Oracle is currently meditating. Operating in offline mode.";

  try {
    const prompt = `
      You are The Oracle, an ethereal guide and frequency tuner for ${festivalName}.
      You are deeply connected to the festival's energetic grid and live data.
      
      [CURRENT VIBRATIONS (API DATA)]:
      ${apiContext}
      
      Traveler's Query: "${message}"
      
      Instructions:
      1. Answer the traveler's query using ONLY the provided CURRENT VIBRATIONS if relevant.
      2. Keep your response under 3 sentences.
      3. Use a mystical, flowing, and empathetic tone (e.g., use words like "Resonance", "Vibrations", "Sanctuary", "Flow", "Aura").
      4. If the data doesn't answer the question, provide spiritual or grounding advice.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "The visions are unclear.";
  } catch (error) {
    console.error("Agent error:", error);
    return "The cosmic link is severed. Trust your intuition.";
  }
};
