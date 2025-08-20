import mongoose from "mongoose";

const examSubmissionSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    answers: {
      type: Map,
      of: Number,
      default: {},
    },
    score: {
      type: Number,
      default: 0,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    submittedAt: {
      type: Date,
    },
    timeTaken: {
      type: Number,
      default: 0,
    },
    attemptedQuestions: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ExamSubmission =
  mongoose.models.ExamSubmission ||
  mongoose.model("ExamSubmission", examSubmissionSchema);

export default ExamSubmission;
