import React, { useState, useEffect } from "react";
import { listeningTest } from "./dataTest";

export default function Listening() {
  const [currentPart, setCurrentPart] = useState(0);
  const part = listeningTest[currentPart];

  // store answers per part: { 0: { radios: {qId: value}, inputs: ['','',''] }, 1: {...} }
  const [answersByPart, setAnswersByPart] = useState({});

  // determine inputCount for this part:
  const inputCount =
    // prefer explicit value from dataTest if provided
    part?.inputCount ??
    // fallback: if this is part index 1 (part 2) use 5 inputs as requested
    (currentPart === 1 ? 5 : 0);

  // initialize answers for current part when changed
  useEffect(() => {
    setAnswersByPart((prev) => {
      if (prev[currentPart]) return prev;
      const init = {
        radios: {},
        inputs: Array(inputCount).fill(""),
      };
      return { ...prev, [currentPart]: init };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPart, inputCount]);

  const nextPart = () => {
    if (currentPart < listeningTest.length - 1) setCurrentPart(currentPart + 1);
  };

  const prevPart = () => {
    if (currentPart > 0) setCurrentPart(currentPart - 1);
  };

  const handleRadioChange = (qId, value) => {
    setAnswersByPart((prev) => {
      const partAns = prev[currentPart] || { radios: {}, inputs: [] };
      return {
        ...prev,
        [currentPart]: { ...partAns, radios: { ...partAns.radios, [qId]: value } },
      };
    });
  };

  const handleInputChange = (index, value) => {
    setAnswersByPart((prev) => {
      const partAns = prev[currentPart] || { radios: {}, inputs: Array(inputCount).fill("") };
      const inputs = [...(partAns.inputs || Array(inputCount).fill(""))];
      inputs[index] = value;
      return { ...prev, [currentPart]: { ...partAns, inputs } };
    });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Listening Test</h1>

      <h2 className="text-2xl font-semibold mb-4">{part.title}</h2>

      <audio controls className="w-full mb-6">
        <source src={part.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* If this part expects text inputs (e.g. part 2) render inputs */}
      {inputCount > 0 ? (
        <div className="mb-6 space-y-4">
          <p className="font-semibold mb-2">Type your answers below:</p>
          {Array.from({ length: inputCount }).map((_, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Answer {i + 1}</label>
              <input
                type="text"
                value={(answersByPart[currentPart]?.inputs?.[i]) ?? ""}
                onChange={(e) => handleInputChange(i, e.target.value)}
                className="w-full border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-0"
                placeholder={`Answer ${i + 1}`}
              />
            </div>
          ))}
        </div>
      ) : (
        // default: render multiple-choice questions (radios) if present
        part.questions?.map((q) => (
          <div key={q.id} className="mb-6">
            <p className="font-semibold mb-2">{q.question}</p>
            {q.options.map((opt, i) => (
              <label key={i} className="flex items-center mb-1">
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  className="mr-2"
                  checked={answersByPart[currentPart]?.radios?.[q.id] === opt}
                  onChange={() => handleRadioChange(q.id, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        ))
      )}

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