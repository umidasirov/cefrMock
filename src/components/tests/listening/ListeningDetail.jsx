import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ListeningDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tests = [
    { id: "1", title: "A2 Daily Conversations", level: "A2", description: "Listen to short conversations and answer simple questions." },
    { id: "2", title: "B1 News Report", level: "B1", description: "Listen to a short news report and summarize key points." },
    { id: "3", title: "C1 Lecture Audio", level: "C1", description: "Comprehend long academic lectures and identify main arguments." },
  ];

  const test = tests.find(t => t.id === id);

  if (!test) {
    return (
      <div className="p-10 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Listening test topilmadi 😕</h2>
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
