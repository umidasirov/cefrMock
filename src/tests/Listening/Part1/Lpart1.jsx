import React, { useState } from "react";

export default function Lpart1() {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      text: "What is the man talking about?",
      options: ["A book", "A lecture", "A movie", "A class"]
    },
    {
      id: 2,
      text: "Where is the conversation taking place?",
      options: ["Library", "Cafeteria", "Office", "Classroom"]
    },
    {
      id: 3,
      text: "What time of day is it?",
      options: ["Morning", "Afternoon", "Evening", "Night"]
    },
    {
      id: 4,
      text: "Who is the woman?",
      options: ["Teacher", "Student", "Librarian", "Manager"]
    },
    {
      id: 5,
      text: "What does the man want to do?",
      options: ["Borrow a book", "Attend class", "Watch a movie", "Go shopping"]
    },
    {
      id: 6,
      text: "How does the woman respond?",
      options: ["Positively", "Negatively", "Indifferently", "Angrily"]
    }
  ];

  const handleAnswer = (qId, option) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleSubmit = () => {
    alert("Your answers: " + JSON.stringify(answers, null, 2));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Listening Part 1</h1>

      {/* Audio Player */}
      <div className="shadow-lg rounded-xl p-4 mb-8 border-l-4 border-blue-400 bg-blue-200">
        <audio controls className="w-full">
          <source src="/audio/part1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-blue-100 p-4 m-2 rounded-3xl shadow-md rounded-xl p-5 w-full h-56 flex flex-col justify-between"
          >
            <h2 className="text-lg font-semibold mb-2">{q.id}. {q.text}</h2>
            <div className="grid grid-cols-2 gap-4">
              {q.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(q.id, option)}
                  className={`border rounded-lg p-3 text-gray-100 hover:bg-blue-300 transition 
                    ${answers[q.id] === option ? 'bg-blue-300 border-blue-400' : 'bg-blue-500 border-blue-200'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
}
