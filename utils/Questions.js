import Question from "../models/question.model.js";

async function insertSampleQuestions() {
  try {
    const existingQuestions = await Question.countDocuments();
    if (existingQuestions === 0) {
      const sampleQuestions = [
        {
          question: "What is the capital of France?",
          options: ["London", "Berlin", "Paris", "Madrid"],
          correctAnswer: 2,
          subject: "Geography",
          difficulty: "Easy",
        },
        {
          question:
            "Which programming language is known as the 'language of the web'?",
          options: ["Python", "JavaScript", "Java", "C++"],
          correctAnswer: 1,
          subject: "Programming",
          difficulty: "Easy",
        },
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language",
          ],
          correctAnswer: 0,
          subject: "Web Development",
          difficulty: "Easy",
        },
        {
          question: "Which of the following is a NoSQL database?",
          options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
          correctAnswer: 2,
          subject: "Database",
          difficulty: "Medium",
        },
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
          correctAnswer: 1,
          subject: "Algorithms",
          difficulty: "Medium",
        },
        {
          question: "Which HTTP method is used to update a resource?",
          options: ["GET", "POST", "PUT", "DELETE"],
          correctAnswer: 2,
          subject: "Web Development",
          difficulty: "Medium",
        },
        {
          question: "What is the default port for HTTPS?",
          options: ["80", "443", "8080", "3000"],
          correctAnswer: 1,
          subject: "Networking",
          difficulty: "Easy",
        },
        {
          question: "Which of the following is NOT a JavaScript framework?",
          options: ["React", "Angular", "Vue.js", "Django"],
          correctAnswer: 3,
          subject: "Programming",
          difficulty: "Easy",
        },
        {
          question: "What does CSS stand for?",
          options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
          ],
          correctAnswer: 0,
          subject: "Web Development",
          difficulty: "Easy",
        },
        {
          question:
            "Which data structure uses LIFO (Last In, First Out) principle?",
          options: ["Queue", "Stack", "Array", "Linked List"],
          correctAnswer: 1,
          subject: "Data Structures",
          difficulty: "Medium",
        },
        {
          question: "What is the purpose of the 'npm' command in Node.js?",
          options: [
            "Node Package Manager",
            "New Project Manager",
            "Node Process Manager",
            "Network Package Manager",
          ],
          correctAnswer: 0,
          subject: "Node.js",
          difficulty: "Easy",
        },
        {
          question:
            "Which of the following is a valid way to declare a variable in JavaScript?",
          options: [
            "var x = 5;",
            "let x = 5;",
            "const x = 5;",
            "All of the above",
          ],
          correctAnswer: 3,
          subject: "JavaScript",
          difficulty: "Easy",
        },
        {
          question:
            "What is the main difference between SQL and NoSQL databases?",
          options: [
            "SQL databases are faster",
            "NoSQL databases use structured schemas",
            "SQL databases use structured schemas, NoSQL databases are more flexible",
            "There is no difference",
          ],
          correctAnswer: 2,
          subject: "Database",
          difficulty: "Medium",
        },
        {
          question: "Which of the following is NOT a HTTP status code?",
          options: ["200", "404", "500", "600"],
          correctAnswer: 3,
          subject: "Web Development",
          difficulty: "Medium",
        },
        {
          question: "What does API stand for?",
          options: [
            "Application Programming Interface",
            "Advanced Programming Interface",
            "Automated Programming Interface",
            "Application Process Interface",
          ],
          correctAnswer: 0,
          subject: "Programming",
          difficulty: "Easy",
        },
        {
          question:
            "Which sorting algorithm has the best average time complexity?",
          options: [
            "Bubble Sort",
            "Selection Sort",
            "Quick Sort",
            "Insertion Sort",
          ],
          correctAnswer: 2,
          subject: "Algorithms",
          difficulty: "Hard",
        },
        {
          question: "What is the purpose of Git in software development?",
          options: [
            "Code compilation",
            "Version control",
            "Code execution",
            "Database management",
          ],
          correctAnswer: 1,
          subject: "Tools",
          difficulty: "Easy",
        },
        {
          question: "Which of the following is a relational database?",
          options: ["MongoDB", "CouchDB", "PostgreSQL", "Redis"],
          correctAnswer: 2,
          subject: "Database",
          difficulty: "Easy",
        },
        {
          question:
            "What is the difference between '==' and '===' in JavaScript?",
          options: [
            "No difference",
            "'==' checks type and value, '===' checks only value",
            "'===' checks type and value, '==' checks only value",
            "'===' is faster than '=='",
          ],
          correctAnswer: 2,
          subject: "JavaScript",
          difficulty: "Medium",
        },
        {
          question:
            "Which of the following is NOT a principle of Object-Oriented Programming?",
          options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Compilation",
          ],
          correctAnswer: 3,
          subject: "Programming",
          difficulty: "Medium",
        },
        {
          question: "What is the purpose of middleware in Express.js?",
          options: [
            "To handle database connections",
            "To process requests between client and server",
            "To compile JavaScript code",
            "To manage user authentication only",
          ],
          correctAnswer: 1,
          subject: "Node.js",
          difficulty: "Medium",
        },
        {
          question: "Which HTML tag is used to create a hyperlink?",
          options: ["<link>", "<href>", "<a>", "<url>"],
          correctAnswer: 2,
          subject: "HTML",
          difficulty: "Easy",
        },
        {
          question: "What does DOM stand for in web development?",
          options: [
            "Document Object Model",
            "Data Object Management",
            "Dynamic Object Model",
            "Document Oriented Model",
          ],
          correctAnswer: 0,
          subject: "Web Development",
          difficulty: "Easy",
        },
        {
          question:
            "Which of the following is a characteristic of RESTful APIs?",
          options: [
            "Stateful communication",
            "Uses only POST requests",
            "Stateless communication",
            "Requires specific client software",
          ],
          correctAnswer: 2,
          subject: "API Design",
          difficulty: "Medium",
        },
        {
          question:
            "What is the main advantage of using a CDN (Content Delivery Network)?",
          options: [
            "Reduces server costs",
            "Improves website loading speed",
            "Increases security",
            "Simplifies code deployment",
          ],
          correctAnswer: 1,
          subject: "Web Performance",
          difficulty: "Medium",
        },
      ];

      await Question.insertMany(sampleQuestions);
      console.log("Sample questions inserted successfully");
    } else {
      console.log("Questions already exist in database");
    }
  } catch (error) {
    console.error("Error inserting sample questions:", error);
  }
}

export default insertSampleQuestions;
