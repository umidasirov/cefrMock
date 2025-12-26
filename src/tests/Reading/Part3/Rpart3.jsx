import React, { useState } from "react";
import { useProvide } from "../../../context/Context";

export default function Part3() {
  const { tasks } = useProvide();
  const task = tasks.find(
    t =>
      t.part_number === 3 &&
      t.title.toLowerCase().includes("choose the correct heading")
  );

  console.log(task);

  const [answers, setAnswers] = useState({});

  const handleSelect = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{task.title}</h1>
      <p className="mb-6 text-gray-600">{task.instruction}</p>

      {/* List of all possible options (statements/headings) */}
      <div className="bg-green-100 border-l-4 border-green-400 p-4 m-2 rounded-3xl">
        <h2 className="text-lg mb-3 font-semibold">List of options:</h2>
        <ul className="list-disc ml-6">
          {task.questions[0]?.dropdown_options.map(option => (
            <li key={option.option_letter}>
              <strong>{option.option_letter})</strong> {option.option_text}
            </li>
          ))}
        </ul>
      </div>

      {/* Questions / paragraphs */}
      {task.questions.map(q => (
        <div
          key={q.id}
          className="border rounded-xl p-5 mb-6 bg-white shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">
            Question {q.question_number}
          </h2>
          <p className="text-gray-700 mb-4">{q.question_text}</p>

          <select
            className="border p-2 rounded w-full"
            value={answers[q.id] || ""}
            onChange={e => handleSelect(q.id, e.target.value)}
          >
            <option value="">Choose answer…</option>
            {q.dropdown_options.map(opt => (
              <option key={opt.option_letter} value={opt.option_letter}>
                {opt.option_letter}) {opt.option_text}
              </option>
            ))}
          </select>
        </div>
      ))}

      {/* Display answers */}
      <div className="mt-8 p-4 bg-gray-100 rounded-xl">
        <h3 className="font-semibold mb-2">Your Answers:</h3>
        <pre>{JSON.stringify(answers, null, 2)}</pre>
      </div>
    </div>
  );
}
