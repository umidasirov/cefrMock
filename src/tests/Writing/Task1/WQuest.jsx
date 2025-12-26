import React, { useState } from "react";
import { useProvide } from "../../../context/Context";

export default function WQuest() {
  const { tasks } = useProvide();

  // FAFAQAT Writing Part 1 va Writing Part 2
  const writingTasks = tasks.filter(
    t =>
      t.title?.toLowerCase().includes("writing") &&
      (t.part_number === 1 || t.part_number === 2)
  );
  console.log(writingTasks);
  
  const [answers, setAnswers] = useState({});

  const handleChange = (taskId, value) => {
    setAnswers(prev => ({
      ...prev,
      [taskId]: value
    }));
  };

  if (!writingTasks.length) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-yellow-300 rounded-2xl shadow-xl border border-yellow-400 space-y-10">
      {writingTasks.map(task => (
        <div
          key={task.id}
          className="bg-yellow-200 p-6 rounded-xl shadow-inner border border-yellow-400"
        >
          {/* TITLE */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {task.title}
          </h2>

          {/* INSTRUCTION */}
          <p className="text-gray-800 mb-4 whitespace-pre-line">
            {task.instruction}
          </p>

          {/* Writing Part 1 (question yo‘q, faqat topic) */}
          {task.questions.length === 0 && (
            <textarea
              rows={8}
              placeholder="Write your answer here..."
              className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={answers[task.id] || ""}
              onChange={e => handleChange(task.id, e.target.value)}
            />
          )}

          {/* Writing Part 2 (essay question bor) */}
          {task.questions.map(q => (
            <div key={q.id} className="mt-4">
              <p className="font-medium mb-2">
                {q.question_text}
              </p>
              <textarea
                rows={10}
                placeholder="Write at least 250 words..."
                className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={answers[q.id] || ""}
                onChange={e => handleChange(q.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      ))}

      {/* PREVIEW */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Your Answers (preview):</h3>
        <pre className="text-sm">
          {JSON.stringify(answers, null, 2)}
        </pre>
      </div>
    </div>
  );
}
