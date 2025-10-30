import React from "react";
import { useNavigate } from "react-router-dom";
import { testInfo, testTips, expectations, sampleQuestion } from "./data";

export default function SpeakingDetail() {
  const navigate = useNavigate();

  return (
    <div id="speaking-page" className="page fade-in">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <div className="bg-green-100 rounded-full p-3 mr-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            Speaking Test
          </h1>
          <p className="mt-2 text-gray-600">Interactive speaking proficiency assessment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Test Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Test Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{testInfo.questions}</div>
                  <div className="text-gray-600">Questions</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{testInfo.minutes}</div>
                  <div className="text-gray-600">Minutes</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{testInfo.taskTypes}</div>
                  <div className="text-gray-600">Task Types</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                {expectations.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Question */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Task</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h4 className="font-semibold mb-3">{sampleQuestion.taskTitle}</h4>
                <div className="mb-4">
                  <img 
                    src={sampleQuestion.imageUrl} 
                    alt="Sample speaking task" 
                    className="rounded-lg w-full h-48 object-cover mb-4"
                  />
                  <p className="text-gray-700 leading-relaxed">{sampleQuestion.prompt}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Preparation Time:</span>
                    <span className="font-medium">{sampleQuestion.preparation}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Speaking Time:</span>
                    <span className="font-medium">{sampleQuestion.speaking}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Guidelines:</h4>
                <ul className="space-y-2 text-gray-700">
                  {sampleQuestion.guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      {guideline}
                    </li>
                  ))}
                </ul>
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

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Ready to Start?</h3>
              <p className="text-green-700 mb-4 text-sm">
                Test your speaking skills with interactive tasks and receive instant feedback.
              </p>
              <button 
                onClick={() => navigate('/tests/speaking/start')}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Start Speaking Test
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}