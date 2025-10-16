// ai.service.js
// This file serves as a layer service to validate input
// and call functions from the repository that interact with the AI model.

import { generateTextFromAI, generateTextFromImage, generateTextFromDocument, generateTextFromAudio } from "../repository/ai.repository.js";

// Service for generating text from prompt (text generation)
export const generateTextService = async (prompt) => {
  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    throw new Error("The prompt cannot be empty and must be a string.");
  }

  return await generateTextFromAI(prompt);
};

// Service for generating text from image (image describe)
export const generateImageService = async (prompt, file) => {
  if (prompt && typeof prompt !== "string") {
    throw new Error("The prompt must be a string.");
  }

  if (!file) {
    throw new Error("Image files must be uploaded.");
  }

  const base64Image = file.buffer.toString("base64");
  const mimeType = file.mimetype;

  return await generateTextFromImage(prompt, base64Image, mimeType);
};

// Service for generating text from document (document summarization)
export const generateDocumentService = async (prompt, file) => {
  if (prompt && typeof prompt !== "string") {
    throw new Error("The prompt must be a string.");
  }

  if (!file) {
    throw new Error("Required document must be uploaded.");
  }

  const base64Document = file.buffer.toString("base64");
  const mimeType = file.mimetype;

  return await generateTextFromDocument(prompt, base64Document, mimeType);
};

// Service for generating text from audio (speech-to-text)
export const generateAudioService = async (prompt, file) => {
  if (prompt && typeof prompt !== "string") {
    throw new Error("The prompt must be a string.");
  }

  if (!file) {
    throw new Error("Audio files must be uploaded.");
  }

  const base64Audio = file.buffer.toString("base64");
  const mimeType = file.mimetype;

  return await generateTextFromAudio(prompt, base64Audio, mimeType);
};