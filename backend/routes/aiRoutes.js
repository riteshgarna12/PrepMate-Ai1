const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  generateInterviewQuestions,
  generateConceptExplanation,
} = require("../controllers/aiController");

// @route   POST /api/ai/generate-questions
// @desc    Generate interview questions and answers
// @access  Private
router.post("/generate-questions", protect, generateInterviewQuestions);

// @route   POST /api/ai/generate-explanation
// @desc    Generate explanation for an interview question
// @access  Private
router.post("/generate-explanation", protect, generateConceptExplanation);

module.exports = router;
