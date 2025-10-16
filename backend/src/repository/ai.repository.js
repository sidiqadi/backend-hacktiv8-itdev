import { ai, GEMINI_MODEL } from "../config/ai.config.js";

// Generateing plain text from a prompt (text generation)
export const generateTextFromAI = async (prompt) => {
  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return response.text;
};

// Generating descriptions or analyses from images (image describe)
export const generateTextFromImage = async (prompt, base64Image, mimeType) => {
  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt },
          { inlineData: { data: base64Image, mimeType } },
        ],
      },
    ],
  });

  return response.text;
};

// Generating summaries from documents (document summarization)
export const generateTextFromDocument = async (prompt, base64Document, mimeType) => {
  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt || "Please make a summary of the following document" },
          { inlineData: { data: base64Document, mimeType } },
        ],
      },
    ],
  });

  return response.text;
};

// Generateing transcript from audio (speech-to-text)
export const generateTextFromAudio = async (prompt, base64Audio, mimeType) => {
  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt || "Please make a transcript from the following recording", },
          { inlineData: { data: base64Audio, mimeType } },
        ],
      },
    ],
  });

  return response.text;
};