import React, { useState } from "react";

export default function Lpart2() {
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 1, text: "The speaker's full name, including first and last name, is ________." },
    { id: 2, text: "The lecture duration will last exactly for ________ minutes in total." },
    { id: 3, text: "The main topic of this academic talk is about ________." },
    { id: 4, text: "The most important point the speaker emphasizes is ________." },
    { id: 5, text: "The recommended reading resource mentioned during the talk is ________." },
    { id: 6, text: "The speaker's official contact email address is ________ for queries." }
  ];

  const handleChange = (qId, value) => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = () => {
    alert("Your answers: " + JSON.stringify(answers, null, 2));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Listening Part 2</h1>

      {/* Audio Player */}
      <div className="shadow-lg rounded-xl p-4 mb-8 shadow-lg rounded-xl p-4 mb-8 border-l-4 border-blue-400 bg-blue-200">
        <audio controls className="w-full">
          <source src="/audio/part2.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-gray-500 mt-2 text-sm">
          You will hear someone giving a talk. Fill in the missing information in the numbered spaces. Write ONE WORD or a NUMBER for each answer.
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-blue-100 shadow-md rounded-xl p-5 w-full h-40 flex flex-col justify-between"
          >
            <label className="text-lg font-semibold mb-2" htmlFor={`q${q.id}`}>
              {q.id}. {q.text}
            </label>
            <input
              type="text"
              id={`q${q.id}`}
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              placeholder="Write ONE WORD or a NUMBER"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
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
