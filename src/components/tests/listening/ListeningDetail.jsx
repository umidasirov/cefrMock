import React from "react";
import { useNavigate } from "react-router-dom";
import { testInfo, testTips, expectations, sampleQuestion } from "./data";

export default function ListeningDetail() {
  const navigate = useNavigate();

  return (
    <div id="listening-page" className="page fade-in">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            Listening Test
          </h1>
          <p className="mt-2 text-gray-600">Comprehensive listening comprehension assessment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Test Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Test Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{testInfo.questions}</div>
                  <div className="text-gray-600">Questions</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{testInfo.minutes}</div>
                  <div className="text-gray-600">Minutes</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{testInfo.audioTypes}</div>
                  <div className="text-gray-600">Audio Types</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                {expectations.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Question */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Question</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h4 className="font-semibold mb-3">{sampleQuestion.audioTitle}</h4>
                <p className="text-gray-700 leading-relaxed">{sampleQuestion.transcript}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-3">Question: {sampleQuestion.question}</p>
                <div className="space-y-2">
                  {sampleQuestion.options.map((option, index) => (
                    <label key={index} className="flex items-center">
                      <input 
                        type="radio" 
                        name="sample" 
                        className="mr-2"
                        defaultChecked={index === sampleQuestion.correctAnswer}
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

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Ready to Start?</h3>
              <p className="text-blue-700 mb-4 text-sm">
                Test your listening comprehension skills with various audio types and difficulty levels.
              </p>
              <button 
                onClick={() => navigate('/tests/listening/start')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Start Listening Test
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}