import React, { useState } from "react";
import { useProvide } from "../../../context/Context";

export default function Rpart2() {
  const { tasks } = useProvide();
  const task = tasks.find(t => t.title === "Reading Part 2");
  console.log(tasks);
  
  if (!task) return <p>Loading...</p>;

  // Javoblar holati
  const initialAnswers = {};
  task.questions.forEach(q => {
    initialAnswers[q.question_number] = "";
  });
  const [answers, setAnswers] = useState(initialAnswers);

  const handleChange = (num, value) => {
    setAnswers(prev => ({ ...prev, [num]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Reading Part 2</h1>

      <p className="text-gray-600 mb-6 text-center">
        {task.instruction}
      </p>

      <div className="space-y-6">
        {task.questions.map((q) => (
          <div key={q.id} className="bg-white shadow-md p-5 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Text {q.question_number}</h3>
            <p className="text-gray-700 mb-4">{q.question_text}</p>

            <label className="font-medium text-gray-800">
              Choose the correct statement:
            </label>
            <select
              value={answers[q.question_number]}
              onChange={(e) => handleChange(q.question_number, e.target.value)}
              className="block mt-2 border p-2 rounded-lg w-40 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select...</option>
              {q.dropdown_options.map(option => (
                <option key={option.id} value={option.option_letter}>
                  {option.option_letter}) {option.option_text}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => alert(JSON.stringify(answers, null, 2))}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl transition"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
}
