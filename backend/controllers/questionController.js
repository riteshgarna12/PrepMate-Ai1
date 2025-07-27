const Question = require("../models/Question");
const Session = require("../models/Session");

// @desc Add questions to a session
exports.addQuestionsToSession = async (req, res) => {
  const { sessionId, questions } = req.body;

  if (!sessionId || !Array.isArray(questions)) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  try {
    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ message: "Session not found" });

    const createdQuestions = await Question.insertMany(
      questions.map((q) => ({
        session: sessionId,
        question: q.question,
        answer: q.answer,
      }))
    );

    session.questions.push(...createdQuestions.map((q) => q._id));
    await session.save();

    res.status(201).json(createdQuestions);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc Toggle pin/unpin for a question
exports.togglePinQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: "Question not found" });

    question.isPinned = !question.isPinned;
    await question.save();

    res.status(200).json({ success: true, question });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc Update question note
exports.updateQuestionNote = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: "Question not found" });

    question.note = req.body.note || "";
    await question.save();

    res.status(200).json({ success: true, question });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
