import React, { useState, useEffect } from "react";

const questions = [
  "Do you prefer studying alone or with others? Why?",
  "What do you usually do in your free time?",
  "How often do you use public transport?",
  "Do you enjoy listening to music while studying?",
  "Describe a challenge you faced recently.",
  "Do you think young people today face more challenges than in the past?",
  "How important is it for people to set goals in life?",
  "What skills do people need to overcome difficulties?",
  "Does modern technology make life easier or more stressful?",
  "How can schools help students develop problem-solving skills?",
];

export default function SpeakingQuestions() {
  const [index, setIndex] = useState(0);               // Hozirgi savol
  const [prepTime, setPrepTime] = useState(30);        // 30 sec
  const [speakTime, setSpeakTime] = useState(120);     // 2 min
  const [mode, setMode] = useState("prep");            // prep | speak | finish

  // PREP TIMER
  useEffect(() => {
    if (mode !== "prep") return;

    if (prepTime === 0) {
      setMode("speak");
      return;
    }

    const timer = setTimeout(() => setPrepTime(prepTime - 1), 1000);
    return () => clearTimeout(timer);
  }, [prepTime, mode]);

  // SPEAK TIMER
  useEffect(() => {
    if (mode !== "speak") return;

    if (speakTime === 0) {
      goNext();
      return;
    }

    const timer = setTimeout(() => setSpeakTime(speakTime - 1), 1000);
    return () => clearTimeout(timer);
  }, [speakTime, mode]);


  // NEXT QUESTION
  function goNext() {
    if (index + 1 >= questions.length) {
      setMode("finish");
      return;
    }

    setIndex(index + 1);
    setPrepTime(30);     // Reset
    setSpeakTime(120);
    setMode("prep");
  }

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
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl"
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
          {/* SAVOL CARD */}
          <div className="bg-white text-gray-900 p-5 rounded-xl shadow-md mb-6">
            <h3 className="text-lg font-semibold mb-2">
              Question {index + 1} of {questions.length}
            </h3>
            <p className="text-lg">{questions[index]}</p>
          </div>

          {/* TIMER – PREP PHASE */}
          {mode === "prep" && (
            <div className="text-center">
              <p className="text-xl mb-3 font-bold">Prepare</p>
              <div className="text-4xl font-bold">{prepTime}s</div>
            </div>
          )}

          {/* TIMER – SPEAK PHASE */}
          {mode === "speak" && (
            <div className="text-center">
              <p className="text-xl mb-3 font-bold bg-red-400 inline-block p-1 rounded-3xl">🎤 Speak Now!</p>
              <div className="text-4xl font-bold">{speakTime}s</div>
            </div>
          )}

          {/* NEXT BUTTON – faqat speak bo‘lsa bosiladi */}
          {mode === "speak" && (
            <button
              onClick={goNext}
              className="w-full mt-6 px-4 py-3 bg-red-400 hover:bg-red-300 text-gray-100 font-semibold rounded-xl"
            >
              Skip / Next
            </button>
          )}
        </>
      )}
    </div>
  );
}
