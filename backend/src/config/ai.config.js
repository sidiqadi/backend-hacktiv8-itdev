import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

// Determining the AI model to be used.
export const GEMINI_MODEL = "gemini-2.5-flash";

// Initialize the AI client instance from GoogleGenAI
export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });