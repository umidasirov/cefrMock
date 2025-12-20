import React, { useState } from "react";

export default function Lpart6() {
  const initialAnswers = {
    30: "",
    31: "",
    32: "",
    33: "",
    34: "",
    35: ""
  };

  const [answers, setAnswers] = useState(initialAnswers);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Listening Part 6</h1>

      {/* Audio Player */}
      <div className="shadow-lg rounded-xl p-4 mb-8 border-l-4 border-blue-400 bg-blue-200 shadow-lg rounded-xl p-4 mb-8">
        <audio controls className="w-full">
          <source src="/audio/part6.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-gray-500 mt-2 text-sm">
          You will hear a part of a lecture. For each question, fill in the missing information in the numbered space. Write no more than ONE WORD for each answer.
        </p>
      </div>

      {/* Single Paragraph with inline inputs */}
      <div className="bg-blue-100 shadow-md rounded-xl p-5">
        <p className="text-lg leading-relaxed">
          Cranfield Art Gallery is popular with the Art and Design Department. The art gallery is an example of contemporary{" "}
          <span className="inline-flex items-center">
            <strong>30.</strong>
            <input
              type="text"
              value={answers[30]}
              onChange={(e) => handleChange(30, e.target.value)}
              className="w-24 mx-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </span>
          . There are five acres of{" "}
          <span className="inline-flex items-center">
            <strong>31.</strong>
            <input
              type="text"
              value={answers[31]}
              onChange={(e) => handleChange(31, e.target.value)}
              className="w-24 mx-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </span>{" "}
          around the art gallery. The gallery’s large windows let in a great deal of{" "}
          <span className="inline-flex items-center">
            <strong>32.</strong>
            <input
              type="text"
              value={answers[32]}
              onChange={(e) => handleChange(32, e.target.value)}
              className="w-24 mx-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </span>
          . The building is constructed to protect the works of art from direct sunrays. There are works by{" "}
          <span className="inline-flex items-center">
            <strong>33.</strong>
            <input
              type="text"
              value={answers[33]}
              onChange={(e) => handleChange(33, e.target.value)}
              className="w-24 mx-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </span>{" "}
          and foreign artists on display. Among the paintings is the{" "}
          <span className="inline-flex items-center">
            <strong>34.</strong>
            <input
              type="text"
              value={answers[34]}
              onChange={(e) => handleChange(34, e.target.value)}
              className="w-24 mx-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </span>{" "}
          “Lady in the Rain” by Mac Addams. You can find not only portraits, but also seascapes and{" "}
          <span className="inline-flex items-center">
            <strong>35.</strong>
            <input
              type="text"
              value={answers[35]}
              onChange={(e) => handleChange(35, e.target.value)}
              className="w-24 mx-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </span>
          .
        </p>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => alert(JSON.stringify(answers, null, 2))}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
}
