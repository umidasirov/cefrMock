import React from "react";
import { useNavigate } from "react-router-dom";
import { testInfo,testTips,expectations } from "./data";
export default function Reading() {
  const navigate = useNavigate();
  return (
    <div id="reading-page" className="page fade-in">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <div className="bg-red-100 rounded-full p-3 mr-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            Reading Test
          </h1>
          <p className="mt-2 text-gray-600">Comprehensive reading comprehension assessment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Test Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Test Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{testInfo.questions}</div>
                  <div className="text-gray-600">Questions</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{testInfo.minutes}</div>
                  <div className="text-gray-600">Minutes</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{testInfo.textTypes}</div>
                  <div className="text-gray-600">Text Types</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                {expectations.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Question */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Question</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h4 className="font-semibold mb-3">Reading Passage:</h4>
                <p className="text-gray-700 leading-relaxed">
                  "The concept of sustainable development has gained significant attention in recent decades. It refers to meeting the needs of the present without compromising the ability of future generations to meet their own needs. This approach requires balancing economic growth, environmental protection, and social equity."
                </p>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-3">Question: What does sustainable development primarily focus on?</p>
                <div className="space-y-2">
                  {["Economic growth only", "Environmental protection only", "Balancing present and future needs", "Social equity only"].map((option, index) => (
                    <label key={index} className="flex items-center">
                      <input 
                        type="radio" 
                        name="sample" 
                        className="mr-2"
                        defaultChecked={index === 2}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {testTips.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Ready to Start?</h3>
              <p className="text-red-700 mb-4 text-sm">
                Test your reading comprehension skills across different text types and difficulty levels.
              </p>
              <button 
                onClick={() => navigate('/tests/reading/start')}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Start Reading Test
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}