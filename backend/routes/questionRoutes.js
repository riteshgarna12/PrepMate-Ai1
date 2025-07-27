const express = require("express");
const {
  addQuestionsToSession,
  togglePinQuestion,
  updateQuestionNote,
} = require("../controllers/questionController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route   POST /api/questions/add
// @desc    Add questions to an existing session
router.post("/add", protect, addQuestionsToSession);

// @route   POST /api/questions/:id/pin
// @desc    Pin or unpin a question
router.post("/:id/pin", protect, togglePinQuestion);

// @route   POST /api/questions/:id/note
// @desc    Add or update a note to a question
router.post("/:id/note", protect, updateQuestionNote);

module.exports = router;
