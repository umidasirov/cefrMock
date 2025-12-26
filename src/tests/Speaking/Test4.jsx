import React, { useState, useEffect, useMemo } from "react";
import { useProvide } from "../../context/Context";

export default function SpeakingQuestions() {
  const { tasks } = useProvide();

  // 🔹 FAQAT SPEAKING TASKLAR
  const speakingQuestions = useMemo(() => {
    return tasks
      .filter(t => t.title?.toLowerCase().includes("speaking"))
      .sort((a, b) => a.order - b.order)
      .map(t => ({
        id: t.id,
        title: t.title,
        instruction: t.instruction
      }));
  }, [tasks]);

  // 🔹 STATES
  const [index, setIndex] = useState(0);
  const [prepTime, setPrepTime] = useState(30);
  const [speakTime, setSpeakTime] = useState(120);
  const [mode, setMode] = useState("prep"); // prep | speak | finish

  // 🔹 PREP TIMER
  useEffect(() => {
    if (mode !== "prep") return;
    if (prepTime === 0) {
      setMode("speak");
      return;
    }
    const timer = setTimeout(() => setPrepTime(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [prepTime, mode]);

  // 🔹 SPEAK TIMER
  useEffect(() => {
    if (mode !== "speak") return;
    if (speakTime === 0) {
      goNext();
      return;
    }
    const timer = setTimeout(() => setSpeakTime(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [speakTime, mode]);

  // 🔹 NEXT QUESTION
  function goNext() {
    if (index + 1 >= speakingQuestions.length) {
      setMode("finish");
      return;
    }
    setIndex(i => i + 1);
    setPrepTime(30);
    setSpeakTime(120);
    setMode("prep");
  }

  if (!speakingQuestions.length) {
    return <p className="text-center mt-10">Loading speaking tasks...</p>;
  }

  const current = speakingQuestions[index];

  return (
    <div className="p-6 rounded-xl shadow-xl max-w-lg mx-auto bg-red-600 text-white mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        IELTS Speaking Trainer
      </h2>

      {/* FINISH */}
      {mode === "finish" ? (
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">🏁 You Finished!</h1>
          <button
            className="px-6 py-3 bg-green-500 rounded-xl"
            onClick={() => {
              setIndex(0);
              setPrepTime(30);
              setSpeakTime(120);
              setMode("prep");
            }}
          >
            Restart
          </button>
        </div>
      ) : (
        <>
          {/* QUESTION CARD */}
          <div className="bg-white text-gray-900 p-5 rounded-xl shadow-md mb-6">
            <h3 className="text-sm text-gray-500 mb-1">
              Question {index + 1} of {speakingQuestions.length}
            </h3>

            <h4 className="text-lg font-bold mb-2">
              {current.title}
            </h4>

            <p className="text-base text-gray-700">
              {current.instruction}
            </p>
          </div>

          {/* PREP MODE */}
          {mode === "prep" && (
            <div className="text-center">
              <p className="text-xl mb-3 font-bold">🧠 Prepare</p>
              <div className="text-4xl font-bold">{prepTime}s</div>
            </div>
          )}

          {/* SPEAK MODE */}
          {mode === "speak" && (
            <div className="text-center">
              <p className="text-xl mb-3 font-bold bg-red-400 inline-block px-4 py-1 rounded-full">
                🎤 Speak Now!
              </p>
              <div className="text-4xl font-bold">{speakTime}s</div>
            </div>
          )}

          {/* NEXT */}
          {mode === "speak" && (
            <button
              onClick={goNext}
              className="w-full mt-6 px-4 py-3 bg-red-400 rounded-xl"
            >
              Skip / Next
            </button>
          )}
        </>
      )}
    </div>
  );
}
