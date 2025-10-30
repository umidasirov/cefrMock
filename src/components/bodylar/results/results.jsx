import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const navigate = useNavigate();

  // Example results (can come from backend later)
  const results = [
    {
      id: 1,
      type: "Writing",
      score: 85,
      date: "October 29, 2025",
      level: "B2 (Upper-Intermediate)",
      color: "yellow",
    },
    {
      id: 2,
      type: "Reading",
      score: 90,
      date: "October 27, 2025",
      level: "C1 (Advanced)",
      color: "blue",
    },
    {
      id: 3,
      type: "Listening",
      score: 78,
      date: "October 20, 2025",
      level: "B1 (Intermediate)",
      color: "green",
    },
    {
      id: 4,
      type: "Speaking",
      score: 88,
      date: "October 15, 2025",
      level: "B2 (Upper-Intermediate)",
      color: "purple",
    },
  ];

  return (
    <div id="results-page" className="page fade-in">
      <main className="max-w-7xl mx-auto py-10 px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 flex justify-center items-center gap-3">
            <div className="bg-gray-100 rounded-full p-3">
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
                />
              </svg>
            </div>
            Your Test Results
          </h1>
          <p className="mt-2 text-gray-600">
            Overview of your completed CEFR English tests
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((res) => (
            <div
              key={res.id}
              onClick={() =>
                navigate(`/tests/${res.type.toLowerCase()}/results`)
              }
              className={`cursor-pointer bg-white hover:shadow-xl transition-all rounded-xl shadow-md border-t-4 border-${res.color}-500`}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {res.type} Test
                  </h2>
                  <span
                    className={`text-${res.color}-600 font-bold text-lg`}
                  >
                    {res.score}%
                  </span>
                </div>

                <p className="text-gray-600 text-sm">{res.level}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>📅 {res.date}</span>
                  <span className="text-gray-700 font-medium">View details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
