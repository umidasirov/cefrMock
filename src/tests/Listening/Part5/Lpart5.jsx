import React, { useState } from "react";
import { useProvide } from "../../../context/Context";

export default function Lpart5() {
  const { tasks } = useProvide(); // contextdan olindi
  const [answers, setAnswers] = useState({});

  // Tasksdan savollarni olish va options arrayini yaratish
  const questionsRaw = tasks.find(task => task.title === "Listening Part 5")?.questions || [];
  const questions = questionsRaw.map(q => ({
    id: q.question_number,  // 24, 25, 26 ...
    text: q.question_text,
    options: [q.option_a, q.option_b, q.option_c]
  }));

  const handleChange = (qId, value) => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = () => {
    alert("Your answers: " + JSON.stringify(answers, null, 2));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Listening Part 5</h1>

      {/* Audio Player */}
      <div className="shadow-lg rounded-xl p-4 mb-8 border-l-4 border-blue-400 bg-blue-200">
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
          <div key={q.id} className="bg-blue-100 shadow-md rounded-xl p-5 w-full">
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
