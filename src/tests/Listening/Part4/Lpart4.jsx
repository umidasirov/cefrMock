import React, { useState } from "react";

export default function Lpart4() {
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 19, text: "Recreation centre" },
    { id: 20, text: "Health centre" },
    { id: 21, text: "Swimming pool and sauna" },
    { id: 22, text: "Health-food store" },
    { id: 23, text: "Jenny's Restaurant" },
  ];

  const options = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const handleChange = (qId, value) => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = () => {
    alert("Your answers: " + JSON.stringify(answers, null, 2));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Listening Part 4</h1>

      {/* Audio Player */}
      <div className="shadow-lg rounded-xl p-4 mb-8 border-l-4 border-blue-400 bg-blue-200 shadow-lg rounded-xl p-4 mb-8">
        <audio controls className="w-full">
          <source src="/audio/part4.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-gray-500 mt-2 text-sm">
          You will hear someone giving a talk. Label the places (19-23) on the map (A-H). There are THREE extra options which you do not need to use. Mark your answers on the answer sheet.
        </p>
      </div>

      {/* Map */}
      <div className="relative w-full mb-8">
        <img src={"https://img.freepik.com/premium-vector/village-doodle-map-hand-drawn_237723-74.jpg"} alt="Map" className="w-full rounded-xl shadow-md" />
        {/* Optional: Interactive markers */}
        {questions.map((q) => (
          answers[q.id] && (
            <div
              key={q.id}
              className={`absolute bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center top-[${q.id * 10}%] left-[${q.id * 10}%]`}
            >
              {answers[q.id]}
            </div>
          )
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-blue-100 shadow-md rounded-xl p-5 w-full flex flex-col justify-between"
          >
            <label className="text-lg font-semibold mb-2" htmlFor={`q${q.id}`}>
              {q.id}. {q.text}
            </label>
            <select
              id={`q${q.id}`}
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a letter</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
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
