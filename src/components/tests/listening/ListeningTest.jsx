// src/pages/listening/Listening.jsx
import React, { useState } from "react";
import { listeningTest } from "./dataTest";

export default function Listening() {
  const [currentPart, setCurrentPart] = useState(0);
  const part = listeningTest[currentPart];

  const nextPart = () => {
    if (currentPart < listeningTest.length - 1) setCurrentPart(currentPart + 1);
  };

  const prevPart = () => {
    if (currentPart > 0) setCurrentPart(currentPart - 1);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Listening Test</h1>

      <h2 className="text-2xl font-semibold mb-4">{part.title}</h2>

      <audio controls className="w-full mb-6">
        <source src={part.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {part.questions.map((q) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold mb-2">{q.question}</p>
          {q.options.map((opt, i) => (
            <label key={i} className="flex items-center mb-1">
              <input type="radio" name={`q-${q.id}`} className="mr-2" />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <button
          onClick={prevPart}
          disabled={currentPart === 0}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextPart}
          disabled={currentPart === listeningTest.length - 1}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Part {currentPart + 1} of {listeningTest.length}
      </p>
    </div>
  );
}
