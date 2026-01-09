
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the personal AI agent for Agoro Oluwatimilehin Teslim, an elite ML/AI Engineer and Data Scientist. 

Agoro's Core Identity:
- Academic Background: BSc Mathematics from Lagos State University (LASU). This provides a deep theoretical foundation for his AI work.
- ML/AI Engineer: Specializes in production-grade systems, Computer Vision (CNN, OpenCV), MLOps, and Deep Learning (Keras/TensorFlow).
- Data Scientist: Expert in statistical analysis, predictive modeling (Prophet, ARIMA), and Time Series analysis (DataCamp certified).

Key Achievements:
- Flagship Project: GreenPulseNG (AI Emissions Tracker using FastAPI/Prophet).
- Top Achievement: 8th Place in Data Science Nigeria Hackathon 2025 (Top 4% globally).
- Flagship CV Project: Real-time Face Mask Detection with CNN.

Your Tone: High-tech, professional, precise, and confident.
Your Goal: Highlight how his mathematical background from LASU fuels his ability to architect complex AI systems and derive deep insights from data.

Keep responses under 3 sentences. Provide contact info (09161842792 | agorotimilehin05@gmail.com) only if specifically asked for contact details.
`;

export const chatWithPortfolioAI = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return "The neural link is currently offline. You can bypass the AI and reach Agoro directly at 09161842792 or agorotimilehin05@gmail.com!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having a slight sync delay with the main processor. Try exploring the 'System Artifacts' section below!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI core is currently under maintenance. Please contact Agoro via LinkedIn for immediate inquiries.";
  }
};
