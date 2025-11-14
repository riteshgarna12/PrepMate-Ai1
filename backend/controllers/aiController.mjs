import { GoogleGenAI } from "@google/genai";
import { conceptExplainPrompt, questionAnswerPrompt } from "../utils/prompts.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Clean Gemini response
const cleanGeminiResponse = (text) =>
  text.replace(/^```json\s*/, "").replace(/```$/, "").trim();

// Generate Interview Q&A
export const generateInterviewQuestions = async (req, res) => {
  const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

  if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    const cleanedText = cleanGeminiResponse(response.text);
    const data = JSON.parse(cleanedText);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate questions",
      error: error.message,
    });
  }
};

// Generate Concept Explanation
export const generateConceptExplanation = async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const prompt = conceptExplainPrompt(question);

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    const cleanedText = cleanGeminiResponse(response.text);
    const data = JSON.parse(cleanedText);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate explanation",
      error: error.message,
    });
  }
};
