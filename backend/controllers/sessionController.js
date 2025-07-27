const Session = require("../models/Session");
const Question = require("../models/Question");

// @desc Create a session and questions
exports.createSession = async (req, res) => {
  const { role, experience, topicsToFocus, description, questions } = req.body;

  try {
    const session = await Session.create({
      user: req.user._id,
      role,
      experience,
      topicsToFocus,
      description,
    });

    const questionDocs = await Question.insertMany(
      questions.map((q) => ({
        session: session._id,
        question: q.question,
        answer: q.answer,
      }))
    );

    session.questions = questionDocs.map((q) => q._id);
    await session.save();

    res.status(201).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc Get all sessions of user
exports.getMySessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate("questions");

    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc Get session by ID
exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id).populate({
      path: "questions",
      options: { sort: { isPinned: -1, createdAt: 1 } },
    });

    if (!session) return res.status(404).json({ message: "Session not found" });

    res.status(200).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc Delete session + its questions
exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await Question.deleteMany({ session: session._id });
    await session.deleteOne();

    res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};