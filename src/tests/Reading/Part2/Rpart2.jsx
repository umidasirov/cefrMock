import React, { useState } from "react";

export default function Rpart2() {
  const statements = {
    A: "You need to learn the language for your job.",
    B: "You would like to continue your studies in another country.",
    C: "You want to learn the language and do interesting things in your free time.",
    D: "You want to learn the language in London.",
    E: "You want to have a higher education in England.",
    F: "You want to learn the language next summer.",
    G: "You need a free place to stay while studying.",
    H: "You would like to learn more than one language.",
    I: "You need to take an exam, finishing the course.",
    J: "You want to meet people from local companies during the course."
  };

  const texts = {
    7: "Oxford Language Academy – Intensive English courses for professionals. Includes business vocabulary, emails and meetings.",
    8: "London Summer School – Learn English in London next June and July. Enjoy the city and improve your English.",
    9: "International Exchange College – Study-abroad programmes and help with university applications in foreign countries.",
    10: "Cambridge University Foundation Course – Special programme for students planning to enter British universities.",
    11: "City Language Centre – Free accommodation with local host families for students joining our 4-month programme.",
    12: "Global Activities Camp – English lessons with sports, music, robotics and creative workshops.",
    13: "Multilingual Institute – Study English, French and German in one course.",
    14: "Business Connect Programme – Improve English and meet representatives from local companies."
  };

  const [answers, setAnswers] = useState({
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: ""
  });

  const handleChange = (num, value) => {
    setAnswers((prev) => ({ ...prev, [num]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 ">
      <h1 className="text-3xl font-bold text-center mb-8">Reading Part 2</h1>

      <p className="text-gray-600 mb-6 text-center">
        Read the texts 7–14 and match them with statements A–J.  
        There are TWO extra statements you do not need to use.
      </p>
      <div className="bg-green-100 border-l-4 border-green-400 p-4 m-2 rounded-3xl">

      {/* Statement List */}
      <div className="bg-transparent mb-8">
        <h2 className="text-xl font-semibold mb-3">Statements (A–J)</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
          {Object.entries(statements).map(([key, text]) => (
            <li key={key}>
              <strong>{key})</strong> {text}
            </li>
          ))}
        </ul>
      </div>
      </div>

      {/* Texts 7–14 */}
      <div className="space-y-6">
        {Object.entries(texts).map(([num, text]) => (
          <div
            key={num}
            className="bg-white shadow-md p-5 rounded-xl border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-2">Text {num}</h3>
            <p className="text-gray-700 mb-4">{text}</p>

            <label className="font-medium text-gray-800">
              Choose the correct statement:
            </label>
            <select
              value={answers[num]}
              onChange={(e) => handleChange(num, e.target.value)}
              className="block mt-2 border p-2 rounded-lg w-40 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select...</option>
              {Object.keys(statements).map((letter) => (
                <option key={letter} value={letter}>
                  {letter}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => alert(JSON.stringify(answers, null, 2))}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl transition"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
}
