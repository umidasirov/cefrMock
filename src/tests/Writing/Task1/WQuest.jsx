import React from "react";

export default function WQuest() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-yellow-300 rounded-2xl shadow-xl border border-yellow-400 space-y-8">

      {/* Task 1 */}
      <div className="bg-yellow-200 p-5 rounded-xl shadow-inner border border-yellow-400">
        <h2 className="text-xl font-bold text-gray-900 mb-3">📝 Writing Task 1</h2>
        <p className="text-gray-800 text-lg">
          The chart below shows the percentage of households in one Asian country 
          that owned electrical appliances from 2000 to 2020. Summarise the
          information by selecting and reporting the main features, and make 
          comparisons where relevant.
        </p>
      </div>

      {/* Task 2 */}
      <div className="bg-yellow-200 p-5 rounded-xl shadow-inner border border-yellow-400">
        <h2 className="text-xl font-bold text-gray-900 mb-3">🖊️ Writing Task 2</h2>
        <p className="text-gray-800 text-lg">
          Some people believe that technology is making our lives easier, while 
          others think it is making life more complicated. Discuss both views and 
          give your own opinion.
        </p>
      </div>

    </div>
  );
}
