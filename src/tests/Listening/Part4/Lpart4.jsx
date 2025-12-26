import React, { useState } from "react";
import { useProvide } from "../../../context/Context";

export default function Lpart4() {
  const [answers, setAnswers] = useState({});
  const { tasks } = useProvide();
  const questions = tasks.find(task => task.title === "Listening Part 4")?.questions || [];

  const dropdownLetters = questions.flatMap(q => q.dropdown_options.map(opt => opt.option_letter)); // faqat kerakli harflar
  
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
      <div className="shadow-lg rounded-xl p-4 mb-8 border-l-4 border-blue-400 bg-blue-200">
        <audio controls className="w-full">
          <source src="/audio/part4.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-gray-500 mt-2 text-sm">
          You will hear someone giving a talk. Label the places (19-23) on the map (A-D). There is ONE extra option which you do not need to use.
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-blue-100 shadow-md rounded-xl p-5 w-full flex flex-col justify-between"
          >

            <label className="text-lg font-semibold mb-2" htmlFor={`q${q.id}`}>
              {q.id}. {q.question_text}
            </label>
            <select
              id={`q${q.id}`}
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a letter</option>
              {q.dropdown_options.map((letter) => (
                <option key={letter.id} value={letter.option_letter}>{letter.option_text}</option>
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
