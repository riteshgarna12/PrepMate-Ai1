const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

async function loadController() {
  return await import("../controllers/aiController.mjs");
}

router.post("/generate-questions", protect, async (req, res) => {
  const controller = await loadController();
  controller.generateInterviewQuestions(req, res);
});

router.post("/generate-explanation", protect, async (req, res) => {
  const controller = await loadController();
  controller.generateConceptExplanation(req, res);
});

module.exports = router;
