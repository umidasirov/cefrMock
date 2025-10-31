import React, { useState } from "react";
import { readingTestData } from "./dataTest";

export default function ReadingTest() {
  const [currentPart, setCurrentPart] = useState(0);
  const test = readingTestData[currentPart];

  const handleNext = () => {
    if (currentPart < readingTestData.length - 1) {
      setCurrentPart(currentPart + 1);
    }
  };

  const handlePrev = () => {
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
    }
  };

  return (
    <main className="flex-1 my-12">
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          {test.title}
        </h1>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Reading Passage:</h2>
          <p className="text-gray-700 leading-relaxed">{test.passage}</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-3">Question:</p>
          <p className="text-gray-800 mb-4">{test.question}</p>

          <div className="space-y-2">
            {test.options.map((opt, index) => (
              <label key={index} className="flex items-center">
                <input type="radio" name="question" className="mr-2" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPart === 0}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-gray-600 font-semibold">
            Part {currentPart + 1} of {readingTestData.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPart === readingTestData.length - 1}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
