import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function WritingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tests = [
    { id: "1", title: "A1 Writing Practice", level: "A1", description: "Simple sentence writing for beginners." },
    { id: "2", title: "B2 Opinion Essay", level: "B2", description: "Write an essay expressing your opinion clearly and logically." },
    { id: "3", title: "C1 Report Writing", level: "C1", description: "Formal report structure and academic writing skills." },
  ];

  const test = tests.find(t => t.id === id);

  if (!test) {
    return (
      <div className="p-10 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Writing test topilmadi 😕</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Ortga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">{test.title}</h1>
      <p className="text-gray-500 text-sm mb-6">Level: {test.level}</p>
      <p className="text-lg text-gray-700 mb-8">{test.description}</p>

      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        Ortga
      </button>
    </div>
  );
}
