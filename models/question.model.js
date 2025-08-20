import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  correctAnswer: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    default: "General",
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    default: "Medium",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Question =
  mongoose.models.question || mongoose.model("question", questionSchema);

export default Question;
