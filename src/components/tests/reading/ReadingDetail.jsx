import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ReadingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tests = [
    { id: "1", title: "A2 Short Story Reading", level: "A2", description: "Read a short story and answer comprehension questions." },
    { id: "2", title: "B1 Article Analysis", level: "B1", description: "Read and analyze an informative article." },
    { id: "3", title: "C2 Academic Paper", level: "C2", description: "Critical reading and summary of an academic paper." },
  ];

  const test = tests.find(t => t.id === id);

  if (!test) {
    return (
      <div className="p-10 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Reading test topilmadi 😕</h2>
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
