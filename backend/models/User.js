const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    education: { type: String, required: true },
    goal: { type: String, required: true },
    experience: { type: String, default: "" }, // Optional
    city: { type: String, default: "" },       // Optional
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
