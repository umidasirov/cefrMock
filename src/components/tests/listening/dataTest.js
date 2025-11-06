export const listeningTest = [
  {
    id: 1,
    title: "Part 1: Daily Conversation",
    audio: "/audio/conversation1.mp3",
    questions: [
      {
        id: 1,
        question: "Where are the speakers talking?",
        options: ["At a café", "At school", "At the office"],
        correct: 0
      },
      {
        id: 2,
        question: "What are they mainly discussing?",
        options: ["A weekend plan", "A homework assignment", "A new movie"],
        correct: 0
      },
      {
        id: 3,
        question: "Who is busy on Sunday?",
        options: ["John", "Mary", "Both of them"],
        correct: 1
      },
      {
        id: 4,
        question: "What does John suggest?",
        options: ["Going to the park", "Watching a movie", "Having lunch together"],
        correct: 2
      },
      {
        id: 5,
        question: "When do they decide to meet?",
        options: ["Saturday afternoon", "Sunday morning", "Friday night"],
        correct: 0
      },
      {
        id: 6,
        question: "What is Mary’s attitude?",
        options: ["Excited", "Bored", "Angry"],
        correct: 0
      }
    ]
  },
  {
    id: 2,
    title: "Part 2: Short Talk",
    audio: "/audio/part2_short_talk.mp3",
    questions: [
      {
        id: 1,
        question: "The marathon will be held on _______ May.",
        correctAnswer: "15th"
      },
      {
        id: 2,
        question: "The event will start at _______ a.m.",
        correctAnswer: "9"
      },
      {
        id: 3,
        question: "The starting point is _______ Park.",
        correctAnswer: "Central"
      },
      {
        id: 4,
        question: "Runners should arrive _______ minutes early.",
        correctAnswer: "30"
      },
      {
        id: 5,
        question: "Water stations will be set up every _______ kilometers.",
        correctAnswer: "2"
      },
      {
        id: 6,
        question: "After the race, participants can get a _______ lunch.",
        correctAnswer: "free"
      }
    ]
  },

  {
    id: 3,
    title: "Part 3: Academic Lecture",
    audio: "/audio/lecture1.mp3",
    questions: [
      {
        id: 1,
        question: "What is the main topic of the lecture?",
        options: ["Climate change", "Renewable energy", "Water pollution"],
        correct: 1
      },
      {
        id: 2,
        question: "What does the professor explain first?",
        options: ["Solar power", "Wind turbines", "Fossil fuels"],
        correct: 2
      },
      {
        id: 3,
        question: "What is mentioned as a benefit?",
        options: ["Low cost", "No pollution", "More jobs"],
        correct: 1
      },
      {
        id: 4,
        question: "What problem does the speaker mention?",
        options: ["High maintenance cost", "Lack of sunlight", "Noise pollution"],
        correct: 0
      },
      {
        id: 5,
        question: "What does the professor suggest?",
        options: ["Using more solar energy", "Reducing car usage", "Saving water"],
        correct: 0
      },
      {
        id: 6,
        question: "Who will do the next presentation?",
        options: ["Sarah", "David", "Michael"],
        correct: 1
      }
    ]
  }
];
