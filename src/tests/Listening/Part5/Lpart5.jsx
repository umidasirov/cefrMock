import React, { useState } from "react";

export default function Lpart5() {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 24,
      text: "Anne was very astonished because the union ...",
      options: [
        "A) did not fire Frank soon",
        "B) made him so popular",
        "C) gave him an award",
      ],
    },
    {
      id: 25,
      text: "What is the main reason for losing a job for Frank?",
      options: [
        "A) Sexist remarks toward his colleagues",
        "B) The advertisement for the receptionist",
        "C) Taking time to meet the deadline",
      ],
    },
    {
      id: 26,
      text: "Smoke-jumping is an ideal job for most of the women as ...",
      options: [
        "A) they have a fitting weight",
        "B) they weigh more than 80 kilos",
        "C) they have a right attitude",
      ],
    },
    {
      id: 27,
      text: "A speaker says that you are not able to get the right spot if ...",
      options: [
        "A) you are heavier",
        "B) you leave a parachute",
        "C) you are lighter",
      ],
    },
    {
      id: 28,
      text: "According to the female speaker, what problem did the male teacher mention earlier?",
      options: [
        "A) He is strictly following the schedule",
        "B) Some students are unable to do well",
        "C) A student has emotional problems",
      ],
    },
    {
      id: 29,
      text: "Brian tends to ... while acting.",
      options: [
        "A) daydream",
        "B) listen",
        "C) walk",
      ],
    },
  ];

  const handleChange = (qId, value) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = () => {
    alert("Your answers: " + JSON.stringify(answers, null, 2));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Listening Part 5</h1>

      {/* Audio Player */}
      <div className="shadow-lg rounded-xl p-4 mb-8 border-l-4 border-blue-400 bg-blue-200 shadow-lg rounded-xl p-4 mb-8">
        <audio controls className="w-full">
          <source src="/audio/part5.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-gray-500 mt-2 text-sm">
          You will hear three extracts. Choose the correct answer (A, B or C) for each question (24-29). There are TWO questions for each extract. Mark your answers on the answer sheet.
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-blue-100 shadow-md rounded-xl p-5 w-full"
          >
            <p className="text-lg font-semibold mb-3">{q.id}. {q.text}</p>
            <div className="flex flex-col space-y-2">
              {q.options.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    value={opt}
                    checked={answers[q.id] === opt}
                    onChange={() => handleChange(q.id, opt)}
                    className="accent-blue-500 w-5 h-5"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
}
