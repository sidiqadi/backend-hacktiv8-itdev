// ai.controller.js
// This file functions as a layer controller that handles HTTP requests and responses.
// Each route will call the appropriate service based on the type of input (text, image, document, audio).

import express from "express";
import multer from "multer";
import { generateTextService, generateImageService, generateDocumentService, generateAudioService } from "../services/ai.service.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Route for generating text from a prompt (text generation)
router.post("/generate-text", async (req, res) => {
  try {
    const { prompt } = req.body;
    const output = await generateTextService(prompt);
    res.status(200).json({ output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Route for generating text from image (image describe)
router.post("/generate-from-image", upload.single("image"), async (req, res) => {
  try {
    const { prompt } = req.body;
    const output = await generateImageService(prompt, req.file);
    res.status(200).json({ output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Route for generating text from document (document summarization)
router.post("/generate-from-document", upload.single("document"), async (req, res) => {
  try {
    const { prompt } = req.body;
    const output = await generateDocumentService(prompt, req.file);
    res.status(200).json({ output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Route for generating text from audio (speech-to-text)
router.post("/generate-from-audio", upload.single("audio"), async (req, res) => {
  try {
    const { prompt } = req.body;
    const output = await generateAudioService(prompt, req.file);
    res.status(200).json({ output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
})

export default router;