import React, { useState } from "react";
import { readingTestData } from "./dataTest";

export default function ReadingTest() {
  const [currentPart, setCurrentPart] = useState(0);
  const [answers, setAnswers] = useState({});
  const test = readingTestData[currentPart];

  // 🔹 Next / Previous
  const handleNext = () => {
    if (currentPart < readingTestData.length - 1) setCurrentPart(currentPart + 1);
  };
  const handlePrev = () => {
    if (currentPart > 0) setCurrentPart(currentPart - 1);
  };

  // 🔹 Javob tanlash
  const handleAnswerSelect = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentPart]: { ...prev[currentPart], [key]: value },
    }));
  };

  // 🔹 Part 1: Fill-the-gaps
  const renderFillGaps = () => (
    <>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <p className="text-gray-700 leading-relaxed">
          {test.segments.map((seg, i) =>
            typeof seg === "string" ? (
              <span key={i}>{seg}</span>
            ) : (
              <select
                key={i}
                className="border border-gray-300 rounded px-2 py-1 mx-1"
                value={answers[currentPart]?.[seg.gap] || ""}
                onChange={(e) => handleAnswerSelect(seg.gap, e.target.value)}
              >
                <option value="">(choose)</option>
                {test.options.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {opt.word}
                  </option>
                ))}
              </select>
            )
          )}
        </p>
      </div>

      <div className="p-4 border rounded bg-white">
        <p className="font-semibold mb-2">Options:</p>
        <ul className="grid grid-cols-2 gap-2">
          {test.options.map((opt) => (
            <li key={opt.key}>
              <b>{opt.key}.</b> {opt.word}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mt-2 italic">{test.instructions}</p>
      </div>
    </>
  );

  // 🔹 Part 2: Matching Ads (A–J)
  const renderMatchingAds = () => (
    <>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <p className="text-gray-700 mb-3 italic">{test.instructions}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {test.ads.map((ad) => (
            <div key={ad.key} className="border rounded-lg p-3 bg-white shadow-sm">
              <img
                src={ad.image}
                alt={ad.key}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <p className="text-sm">
                <b>{ad.key}.</b> {ad.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg border">
          {test.questions.map((q) => (
            <div key={q.id} className="mb-3">
              <p className="mb-2 font-semibold">
                {q.id}. {q.text}
              </p>
              <select
                className="border border-gray-300 rounded px-2 py-1"
                value={answers[currentPart]?.[q.id] || ""}
                onChange={(e) => handleAnswerSelect(q.id, e.target.value)}
              >
                <option value="">(choose A–J)</option>
                {test.ads.map((ad) => (
                  <option key={ad.key} value={ad.key}>
                    {ad.key}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // 🔹 Part 3: Match Headings (A–H)
  const renderMatchingHeadings = () => (
    <>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <p className="text-gray-700 mb-3 italic">{test.instructions}</p>

        <div className="space-y-6">
          {test.paragraphs.map((p) => (
            <div key={p.id} className="bg-white p-4 border rounded shadow-sm">

              <div className="mx-auto">
                <select
                  className="border border-gray-300 rounded px-2 py-1 w-full mb-4"
                  value={answers[currentPart]?.[p.id] || ""}
                  onChange={(e) => handleAnswerSelect(p.id, e.target.value)}
                >
                  <option value="">(choose A–H)</option>
                  {test.headings.map((h) => (
                    <option key={h.key} value={h.key}>
                      {h.key}. {h.text}
                    </option>
                  ))}
                </select>
              </div>
              <p className="mb-2">{p.id}. {p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // 🔹 Part 4: Reading Comprehension
  const renderComprehension = () => (
    <>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{test.passage}</p>
      </div>

      <div className="bg-white p-4 rounded-lg border space-y-4">
        {test.questions.map((q) => (
          <div key={q.id} className="mb-3">
            <p className="mb-2 font-semibold">{q.id}. {q.question}</p>

            {q.type === "multiple-choice" ? (
              <select
                className="border border-gray-300 rounded px-2 py-1"
                value={answers[currentPart]?.[q.id] || ""}
                onChange={(e) => handleAnswerSelect(q.id, e.target.value)}
              >
                <option value="">(choose A–D)</option>
                {q.options.map((opt, idx) => (
                  <option key={idx} value={String.fromCharCode(65 + idx)}>
                    {String.fromCharCode(65 + idx)}. {opt}
                  </option>
                ))}
              </select>
            ) : (
              <select
                className="border border-gray-300 rounded px-2 py-1"
                value={answers[currentPart]?.[q.id] || ""}
                onChange={(e) => handleAnswerSelect(q.id, e.target.value)}
              >
                <option value="">(choose True / False / Not Given)</option>
                <option value="True">True</option>
                <option value="False">False</option>
                <option value="Not Given">Not Given</option>
              </select>
            )}
          </div>
        ))}
      </div>
    </>
  );


  return (
    <main className="flex-1 my-12">
      <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          {test.title}
        </h1>

        {test.type === "fill-the-gaps"
          ? renderFillGaps()
          : test.type === "matching" && test.ads
            ? renderMatchingAds()
            : test.type === "matching" && test.paragraphs
              ? renderMatchingHeadings()
              : test.type === "comprehension"
                ? renderComprehension()
                : <p>Unsupported question type</p>}


        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPart === 0}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-gray-600 font-semibold">
            Part {currentPart + 1} of {readingTestData.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPart === readingTestData.length - 1}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
