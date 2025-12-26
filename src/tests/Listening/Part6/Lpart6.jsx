import React, { useState } from "react";
import { useProvide } from "../../../context/Context";

export default function Lpart6() {
  const { tasks } = useProvide();
  const questions = tasks.find(task => task.title === "Listening Part 6")?.questions || [];

  const initialAnswers = {};
  questions.forEach(q => {
    initialAnswers[q.question_number] = "";
  });

  const [answers, setAnswers] = useState(initialAnswers);

  const handleChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Listening Part 6</h1>

      {/* Audio Player */}
      <div className="shadow-lg rounded-xl p-4 mb-8 border-l-4 border-blue-400 bg-blue-200">
        <audio controls className="w-full">
          <source src="/audio/part6.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-gray-500 mt-2 text-sm">
          You will hear a part of a lecture. For each question, fill in the missing information in the numbered space.
        </p>
      </div>

      {/* Questions */}
      <div className="bg-blue-50 shadow-md rounded-xl p-5 space-y-6">
        {questions.map(q => {
          const parts = q.question_text.split("______");
          return (
            <p key={q.question_number} className="text-lg leading-relaxed">
              {parts.map((part, index) => (
                <span key={index} className="inline-flex items-center">
                  <span>{part}</span>
                  {index < parts.length - 1 && (
                    <input
                      type="text"
                      value={answers[q.question_number]}
                      onChange={e => handleChange(q.question_number, e.target.value)}
                      className="w-28 mx-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
                    />
                  )}
                </span>
              ))}
            </p>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => alert(JSON.stringify(answers, null, 2))}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
}
