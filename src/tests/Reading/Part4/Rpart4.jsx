import React, { useState } from "react";

const mcQuestions = [
  {
    id: 21,
    question: "It is stated that Charles I ...",
    options: [
      "A) used to be the first postman",
      "B) sent letters to the public only",
      "C) was the founder of the Royal Mail",
      "D) established the postal service",
    ],
  },
  {
    id: 22,
    question: "When was the first stamp created?",
    options: ["A) 1635", "B) 1840", "C) 1843", "D) 1964"],
  },
  {
    id: 23,
    question: "The Penny Black had a huge impact on ...",
    options: ["A) stamp", "B) economy", "C) letters", "D) standards"],
  },
  {
    id: 24,
    question: "Unlike the UK, in some countries, stamps ...",
    options: [
      "A) reflected individuals’ way of thinking",
      "B) were the symbol of possessions",
      "C) had the portraits of local buildings",
      "D) were produced by high-class people",
    ],
  },
];

const tfQuestions = [
  {
    id: 25,
    question: "The author herself changed her name because of stamps.",
  },
  {
    id: 26,
    question: "The number of pages was estimated to set exact price.",
  },
  {
    id: 27,
    question: "Stamps made a great contribution to the development of the UK.",
  },
  {
    id: 28,
    question: "Italian stamps often pictured Christopher Columbus’s ships.",
  },
  {
    id: 29,
    question:
      "The US government decided that a canal in Central America should be in Nicaragua.",
  },
];

export default function Rpart4() {
  const [mcAnswers, setMcAnswers] = useState({});
  const [tfAnswers, setTfAnswers] = useState({});

  const handleMcChange = (id, value) => {
    setMcAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleTfChange = (id, value) => {
    setTfAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">PART 4 — Stamps</h1>

      <h2 className="text-xl font-semibold mb-4">Multiple Choice Questions (21-24)</h2>

      <div className="mb-10 p-6 bg-green-100 border-l-4 border-green-500 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-3">Reading Passage</h2>

        <p className="leading-relaxed text-gray-800">
          {/* Bu yerga katta reading matnini yozasiz */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus perspiciatis, velit id enim pariatur doloribus
          ratione consectetur aliquid voluptate amet nesciunt sint
          ipsum recusandae tempore ducimus! Minima est consequuntur ad!
        </p>
      </div>
      {mcQuestions.map((q) => (
        <div key={q.id} className="mb-6 p-4 border rounded-xl bg-white shadow-lg">
          <p className="mb-2 font-medium">{q.id}. {q.question}</p>
          <select
            className="border p-2 rounded w-full"
            value={mcAnswers[q.id] || ""}
            onChange={(e) => handleMcChange(q.id, e.target.value)}
          >
            <option value="">Select answer…</option>
            {q.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}

      <h2 className="text-xl font-semibold mb-4">True / False / No Information (25-29)</h2>
      {tfQuestions.map((q) => (
        <div key={q.id} className="mb-6 p-4 border rounded-xl bg-white shadow-lg">
          <p className="mb-2 font-medium">{q.id}. {q.question}</p>
          <select
            className="border p-2 rounded w-full"
            value={tfAnswers[q.id] || ""}
            onChange={(e) => handleTfChange(q.id, e.target.value)}
          >
            <option value="">Select answer…</option>
            <option value="A) True">A) True</option>
            <option value="B) False">B) False</option>
            <option value="C) No Information">C) No Information</option>
          </select>
        </div>
      ))}

      <div className="mt-8 p-4 bg-gray-100 rounded-xl">
        <h3 className="font-semibold mb-2">Your Answers:</h3>
        <pre>{JSON.stringify({ ...mcAnswers, ...tfAnswers }, null, 2)}</pre>
      </div>
    </div>
  );
}
