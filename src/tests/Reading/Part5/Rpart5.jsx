import React, { useState } from "react";
import { useProvide } from "../../../context/Context";

export default function Rpart5() {
  const { tasks } = useProvide();

  const task = tasks?.find(
    t =>
      t.part_number === 5 &&
      t.title?.toLowerCase().includes("fill in the gaps")
  );

  const [answers, setAnswers] = useState({});

  if (!task) return <p>Loading...</p>;

  const handleChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">
        {task.title}
      </h1>

      {/* INSTRUCTION */}
      {task.instruction && (
        <p className="mb-6 text-gray-700 font-medium">
          {task.instruction}
        </p>
      )}

      {/* READING PASSAGE */}
      <div className="bg-green-100 border-l-4 border-green-400 p-6 mb-8 rounded-3xl">
        <h2 className="text-xl font-semibold mb-4">Reading Passage</h2>
        <p className="leading-relaxed text-gray-800">
          {task.passage_text}
        </p>
      </div>

      {/* FILL IN THE BLANK QUESTIONS */}
      {task.questions
        .sort((a, b) => a.order - b.order)
        .map(question => (
          <div
            key={question.id}
            className="mb-6 p-4 border rounded-xl bg-white shadow-lg"
          >
            <p className="mb-2 font-medium">
              {question.question_text}
            </p>

            {question.question_type === "fill_blank" && (
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={answers[question.id] || ""}
                onChange={e =>
                  handleChange(question.id, e.target.value)
                }
                placeholder="Type your answer…"
              />
            )}
          </div>
        ))}

      {/* ANSWERS PREVIEW */}
      <div className="mt-8 p-4 bg-gray-100 rounded-xl">
        <h3 className="font-semibold mb-2">Your Answers:</h3>
        <pre className="text-sm">
          {JSON.stringify(answers, null, 2)}
        </pre>
      </div>
    </div>
  );
}
