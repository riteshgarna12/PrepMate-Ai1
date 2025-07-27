const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

// @desc Register a new user
exports.registerUser = async (req, res) => {
  const { name, email, password, education, goal, experience, city } = req.body;

  if (!name || !email || !password || !education || !goal) {
    return res.status(400).json({ message: "Please fill in all required fields." });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      education,
      goal,
      experience,
      city,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      education: user.education,
      goal: user.goal,
      experience: user.experience,
      city: user.city,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const isMatch = user && await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      education: user.education,
      goal: user.goal,
      experience: user.experience,
      city: user.city,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
