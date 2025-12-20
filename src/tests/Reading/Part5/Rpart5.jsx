import React, { useState } from "react";

const fillQuestions = [
  {
    id: 30,
    question:
      "Migratory lifestyles (30) __________ the youth who are eager to have unplanned travel.",
  },
  {
    id: 31,
    question:
      "Nomadic herders tend to choose their way taking (31) __________ into account.",
  },
  {
    id: 32,
    question:
      "The Bedouin community had to be cautious all the time to (32) __________ their farm animals.",
  },
  {
    id: 33,
    question: "The Moken have no words for (33) _________ property.",
  },
];

const mcQuestions = [
  {
    id: 34,
    question: "According to the passage, the Moken ...",
    options: [
      "A) hardly share their own possessions",
      "B) live on the sea during the rainy season",
      "C) changed their lifestyle because of restrictions",
      "D) escaped to become accustomed to the modern world",
    ],
  },
  {
    id: 35,
    question: "What is the writer’s purpose in the reading passage?",
    options: [
      "A) to explain the future of backpacking culture",
      "B) to compare the success of different nomadic groups",
      "C) to criticize the lack of tolerance for travelling communities",
      "D) to highlight the current state of traditional travelling cultures",
    ],
  },
];

export default function Rpart5() {
  const [fillAnswers, setFillAnswers] = useState({});
  const [mcAnswers, setMcAnswers] = useState({});

  const handleFillChange = (id, value) => {
    setFillAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleMcChange = (id, value) => {
    setMcAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">PART 5 — Migratory Lifestyle</h1>

      <div className="bg-green-100 border-l-4 border-green-400 p-4 my-4 rounded-3xl">
      <h2 className="text-xl font-semibold mb-4">Fill in the gaps (30-33)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis doloremque incidunt ea quasi in facilis molestias ullam aut id eum, tempora rerum provident libero quaerat dolores est. Porro, labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias pariatur cupiditate doloremque vero delectus explicabo ab ut nisi eius repudiandae obcaecati blanditiis doloribus expedita eos, architecto voluptatum impedit est?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias pariatur cupiditate doloremque vero delectus explicabo ab ut nisi eius repudiandae obcaecati blanditiis doloribus expedita eos, architecto voluptatum impedit est?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias pariatur cupiditate doloremque vero delectus explicabo ab ut nisi eius repudiandae obcaecati blanditiis doloribus expedita eos, architecto voluptatum impedit est?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias pariatur cupiditate doloremque vero delectus explicabo ab ut nisi eius repudiandae obcaecati blanditiis doloribus expedita eos, architecto voluptatum impedit est?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias pariatur cupiditate doloremque vero delectus explicabo ab ut nisi eius repudiandae obcaecati blanditiis doloribus expedita eos, architecto voluptatum impedit est?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias pariatur cupiditate doloremque vero delectus explicabo ab ut nisi eius repudiandae obcaecati blanditiis doloribus expedita eos, architecto voluptatum impedit est?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias pariatur cupiditate doloremque vero delectus explicabo ab ut nisi eius repudiandae obcaecati blanditiis doloribus expedita eos, architecto voluptatum impedit est?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias pariatur cupiditate doloremque vero delectus explicabo ab ut nisi eius repudiandae obcaecati blanditiis doloribus expedita eos, architecto voluptatum impedit est?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias pariatur cupiditate doloremque vero delectus explicabo ab ut nisi eius repudiandae obcaecati blanditiis doloribus expedita eos, architecto voluptatum impedit est?
      </p>
      </div>
      {fillQuestions.map((q) => (
        <div key={q.id} className="mb-6 p-4 border rounded-xl bg-white shadow-lg">
          <p className="mb-2 font-medium">{q.question}</p>
          <input
            type="text"
            className="border p-2 rounded w-full"
            value={fillAnswers[q.id] || ""}
            onChange={(e) => handleFillChange(q.id, e.target.value)}
            placeholder="Type your answer…"
          />
        </div>
      ))}

      <h2 className="text-xl font-semibold mb-4">
        Multiple Choice Questions (34-35)
      </h2>
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

      <div className="mt-8 p-4 bg-gray-100 rounded-xl">
        <h3 className="font-semibold mb-2">Your Answers:</h3>
        <pre>{JSON.stringify({ ...fillAnswers, ...mcAnswers }, null, 2)}</pre>
      </div>
    </div>
  );
}
