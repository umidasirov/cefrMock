// src/pages/writing/Writing.jsx
import React, { useState } from "react";
import { writingTest } from "./dataWriting";
import EssayCommentForm from "../../textArea/textArea";

export default function Writing() {
  const [currentPart, setCurrentPart] = useState(0);
  const part = writingTest[currentPart];

  const nextPart = () => {
    if (currentPart < writingTest.length - 1) setCurrentPart(currentPart + 1);
  };

  const prevPart = () => {
    if (currentPart > 0) setCurrentPart(currentPart - 1);
  };
  
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Writing Test</h1>

      <h2 className="text-2xl font-semibold mb-2">{part.title}</h2>
      <p className="text-gray-600 mb-4">{part.description}</p>

      <ul className="space-y-4 mb-8">
        {part.themes.map((theme, i) => (
          <li
            key={i}
            className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
          >
            <span className="font-medium text-gray-800">{theme}</span>
          </li>
        ))}
        <EssayCommentForm a={part.type}/>
      </ul>
      <div className="flex justify-between">
        <button
          onClick={prevPart}
          disabled={currentPart === 0}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextPart}
          disabled={currentPart === writingTest.length - 1}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Part {currentPart + 1} of {writingTest.length}
      </p>
    </div>
  );
}
