const express = require("express");
const {
  createSession,
  getSessionById,
  getMySessions,
  deleteSession,
} = require("../controllers/sessionController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route   POST /api/sessions/create
// @desc    Create a new interview session
router.post("/create", protect, createSession);

// @route   GET /api/sessions/my-sessions
// @desc    Get all sessions for the logged-in user
router.get("/my-sessions", protect, getMySessions);

// @route   GET /api/sessions/:id
// @desc    Get session by ID
router.get("/:id", protect, getSessionById);

// @route   DELETE /api/sessions/:id
// @desc    Delete a session by ID
router.delete("/:id", protect, deleteSession);

module.exports = router;
