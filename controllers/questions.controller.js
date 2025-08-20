import Question from "../models/question.model.js";
import ExamSubmission from "../models/examsubmission.model.js";

const GetQuestions = async (req, res) => {
  try {
    const questions = await Question.find({}).select("-correctAnswer");

    return res.status(200).json({
      success: true,
      message: "Questions fetched successfully",
      data: questions,
    });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch questions",
      error: error.message,
    });
  }
};

const SubmitExam = async (req, res) => {
  try {
    const { answers, timeTaken, answeredCount } = req.body;

    const studentId = req.user._id;

    if (!answers) {
      return res.status(400).json({
        success: false,
        message: "Answers are required",
      });
    }

    const questions = await Question.find({});
    const questionMap = new Map();
    questions.forEach((q) =>
      questionMap.set(q._id.toString(), q.correctAnswer)
    );

    let score = 0;
    const totalQuestions = questions.length;

    for (const [questionId, selectedAnswer] of Object.entries(answers)) {
      if (questionMap.get(questionId) === selectedAnswer) score++;
    }

    let submission = await ExamSubmission.findOne({
      studentId,
    });

    if (!submission) {
      submission = new ExamSubmission({
        studentId,
        totalQuestions,
      });
    }

    submission.answers = new Map(Object.entries(answers));
    submission.score = score;
    submission.totalQuestions = totalQuestions;
    submission.timeTaken = timeTaken || submission.timeTaken;
    submission.submittedAt = new Date();
    submission.attemptedQuestions =
      answeredCount || submission.attemptedQuestions;

    await submission.save();

    const percentage = Math.round((score / totalQuestions) * 100);

    return res.status(201).json({
      success: true,
      message: "Exam submitted successfully",
      data: {
        submissionId: submission._id,
        score,
        totalQuestions,
        percentage,
        timeTaken: submission.timeTaken,
        submittedAt: submission.submittedAt,
        attemptedQuestions: submission.attemptedQuestions,
      },
    });
  } catch (error) {
    console.error("Error submitting exam:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit exam",
      error: error.message,
    });
  }
};

export { GetQuestions, SubmitExam };
