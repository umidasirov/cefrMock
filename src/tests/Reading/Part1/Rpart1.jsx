import React, { useState } from "react";

/**
 * Rpart1 - Reading Part 1 (fill-in-the-blanks)
 * - Usloviya ko'rsatiladi: "Write no more than ONE WORD"
 * - Har inputga bitta so'zdan ortiq kiritilsa xatolik ko'rsatiladi
 * - "Bot to'ldirsin" tugmasi avtomatik to'ldiradi (answerKey)
 * - "Check answers" tugmasi javoblarni tekshiradi va natijani ko'rsatadi
 */

export default function Rpart1() {
  // initial answers keys 1..10
  const initialAnswers = Array.from({ length: 10 }, () => "");
  const [answers, setAnswers] = useState(initialAnswers);

  // feedback: null = not checked, true = correct, false = wrong
  const [feedback, setFeedback] = useState(Array.from({ length: 10 }, () => null));
  const [errors, setErrors] = useState(Array.from({ length: 10 }, () => ""));

  // Example answer key (bot uses this to auto-fill). Tahrirlash mumkin.
  const answerKey = [
    "internet", // 1
    "communication", // 2
    "education", // 3
    "entertainment", // 4
    "business", // 5
    "faster", // 6
    "affordable", // 7
    "cybersecurity", // 8
    "digital", // 9
    "shopping" // 10
  ];

  const handleChange = (index, value) => {
    // remove leading/trailing spaces
    const trimmed = value;
    const newAnswers = [...answers];
    newAnswers[index] = trimmed;
    setAnswers(newAnswers);

    // validate ONE WORD rule: no spaces and not empty
    const newErrors = [...errors];
    if (trimmed === "") {
      newErrors[index] = "";
    } else if (/\s/.test(trimmed)) {
      newErrors[index] = "Iltimos, faqat BIR so'z yozing.";
    } else {
      newErrors[index] = "";
    }
    setErrors(newErrors);

    // clear feedback for that index when editing
    const newFeedback = [...feedback];
    newFeedback[index] = null;
    setFeedback(newFeedback);
  };

  const fillByBot = () => {
    setAnswers(answerKey.map((a) => a));
    setErrors(Array.from({ length: 10 }, () => ""));
    setFeedback(Array.from({ length: 10 }, () => null));
  };

  const checkAnswers = () => {
    const newFeedback = answers.map((ans, i) => {
      if (!ans) return false; // empty considered wrong
      // compare case-insensitive, exact single-word match
      return ans.trim().toLowerCase() === answerKey[i].toLowerCase();
    });
    setFeedback(newFeedback);
  };

  const resetAll = () => {
    setAnswers(initialAnswers);
    setFeedback(Array.from({ length: 10 }, () => null));
    setErrors(Array.from({ length: 10 }, () => ""));
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Reading — Part 1</h1>

      {/* Usloviya */}
      <div className="bg-green-100 border-l-4 border-green-400 p-4 rounded-md mb-6">
        <p className="font-medium">Usloviya (Instructions):</p>
        <p>Write no more than <strong>ONE WORD</strong> for each answer.</p>
      </div>

      {/* Passage with blanks */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">Passage</h2>
        <p className="text-lg leading-relaxed">
          The Internet has become a vital part of modern life. People use it for{" "}
          <span className="inline-flex items-center">
            <strong>1.</strong>
            <input
              type="text"
              value={answers[0]}
              onChange={(e) => handleChange(0, e.target.value)}
              className="ml-2 w-36 p-1 border rounded"
              placeholder="1"
            />
          </span>
          , <span className="inline-flex items-center"><strong>2.</strong>
            <input
              value={answers[1]}
              onChange={(e) => handleChange(1, e.target.value)}
              className="ml-2 w-44 p-1 border rounded"
              placeholder="2"
            />
          </span>{" "} and{" "}
          <span className="inline-flex items-center"><strong>3.</strong>
            <input
              value={answers[2]}
              onChange={(e) => handleChange(2, e.target.value)}
              className="ml-2 w-40 p-1 border rounded"
              placeholder="3"
            />
          </span>
          . Over the years, new technologies have made internet access{" "}
          <span className="inline-flex items-center"><strong>4.</strong>
            <input
              value={answers[3]}
              onChange={(e) => handleChange(3, e.target.value)}
              className="ml-2 w-40 p-1 border rounded"
              placeholder="4"
            />
          </span>{" "} and more{" "}
          <span className="inline-flex items-center"><strong>5.</strong>
            <input
              value={answers[4]}
              onChange={(e) => handleChange(4, e.target.value)}
              className="ml-2 w-44 p-1 border rounded"
              placeholder="5"
            />
          </span>
          . Many businesses now operate online, and individuals rely on{" "}
          <span className="inline-flex items-center"><strong>6.</strong>
            <input
              value={answers[5]}
              onChange={(e) => handleChange(5, e.target.value)}
              className="ml-2 w-36 p-1 border rounded"
              placeholder="6"
            />
          </span>{" "} tools for daily activities such as{" "}
          <span className="inline-flex items-center"><strong>7.</strong>
            <input
              value={answers[6]}
              onChange={(e) => handleChange(6, e.target.value)}
              className="ml-2 w-40 p-1 border rounded"
              placeholder="7"
            />
          </span>
          , studying, and even working from home. However, with increased usage comes the need for better{" "}
          <span className="inline-flex items-center"><strong>8.</strong>
            <input
              value={answers[7]}
              onChange={(e) => handleChange(7, e.target.value)}
              className="ml-2 w-44 p-1 border rounded"
              placeholder="8"
            />
          </span>
          {" "} and responsible{" "}
          <span className="inline-flex items-center"><strong>9.</strong>
            <input
              value={answers[8]}
              onChange={(e) => handleChange(8, e.target.value)}
              className="ml-2 w-40 p-1 border rounded"
              placeholder="9"
            />
          </span>
          {" "} behaviour. Many people use the web for{" "}
          <span className="inline-flex items-center"><strong>10.</strong>
            <input
              value={answers[9]}
              onChange={(e) => handleChange(9, e.target.value)}
              className="ml-2 w-36 p-1 border rounded"
              placeholder="10"
            />
          </span>
          .
        </p>

        {/* show per-input error messages */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {errors.map((err, idx) => (
            <div key={idx} className="text-sm text-red-600">
              {err ? `#${idx + 1}: ${err}` : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
