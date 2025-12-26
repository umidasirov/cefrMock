import React, { useState, useEffect } from "react";
import { useProvide } from "../../../context/Context";

export default function Rpart1() {
  const { tasks } = useProvide();

  // backenddan kelgan task
  const task = tasks.find(t => t.title === "Reading Part 1");
  
  const [answers, setAnswers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (task && task.questions) {
      setAnswers(Array(task.questions.length).fill(""));
      setFeedback(Array(task.questions.length).fill(null));
      setErrors(Array(task.questions.length).fill(""));
    }
  }, [task]);

  const handleChange = (index, value) => {
    const trimmed = value.trim();
    const newAnswers = [...answers];
    newAnswers[index] = trimmed;
    setAnswers(newAnswers);

    const newErrors = [...errors];
    if (trimmed === "") newErrors[index] = "";
    else if (/\s/.test(trimmed)) newErrors[index] = "Iltimos, faqat BIR so'z yozing.";
    else newErrors[index] = "";
    setErrors(newErrors);

    const newFeedback = [...feedback];
    newFeedback[index] = null;
    setFeedback(newFeedback);
  };

  const fillByBot = () => {
    if (!task) return;
    setAnswers(task.questions.map(q => q.answer));
    setErrors(Array(task.questions.length).fill(""));
    setFeedback(Array(task.questions.length).fill(null));
  };

  const checkAnswers = () => {
    if (!task) return;
    const newFeedback = answers.map((ans, i) => {
      if (!ans) return false;
      return ans.toLowerCase() === task.questions[i].answer.toLowerCase();
    });
    setFeedback(newFeedback);
  };

  const resetAll = () => {
    if (!task) return;
    setAnswers(Array(task.questions.length).fill(""));
    setErrors(Array(task.questions.length).fill(""));
    setFeedback(Array(task.questions.length).fill(null));
  };

  if (!task) return <div>Loading...</div>;

  // passageni bo‘sh joylar bilan split qilish
  const parts = task.passage_text.split(/___\d+___/);

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">{task.title}</h1>
      <div className="bg-green-100 border-l-4 border-green-400 p-4 rounded-md mb-6">
        <p className="font-medium">Usloviya (Instructions):</p>
        <p>{task.instruction}</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">Passage</h2>
        <p className="text-lg leading-relaxed">
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < task.questions.length && (
                <input
                  type="text"
                  value={answers[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  className="ml-2 w-36 p-1 border rounded"
                  placeholder={i + 1}
                />
              )}
            </span>
          ))}
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {errors.map((err, idx) => (
            <div key={idx} className="text-sm text-red-600">
              {err ? `#${idx + 1}: ${err}` : null}
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={fillByBot} className="bg-blue-500 text-white px-4 py-2 rounded">Bot to'ldirsin</button>
          <button onClick={checkAnswers} className="bg-green-500 text-white px-4 py-2 rounded">Check answers</button>
          <button onClick={resetAll} className="bg-gray-400 text-white px-4 py-2 rounded">Reset</button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {feedback.map((f, idx) => f !== null && (
            <div key={idx} className={`text-sm ${f ? 'text-green-600' : 'text-red-600'}`}>
              #{idx + 1}: {f ? "Correct" : "Wrong"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
