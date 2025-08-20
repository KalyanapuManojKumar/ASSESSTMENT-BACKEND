import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/user.route.js";
import connectDB from "./database/mongodb.js";
import insertSampleQuestions from "./utils/Questions.js";
import questionsRoute from "./routes/questions.route.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
// Uncomment the line below to insert sample questions into the database
//insertSampleQuestions();
app.use(express.json());

const corsOptions = {
  origin: "*", // replace with actual frontend origin
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api", userRouter);
app.use("/exam", questionsRoute);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
