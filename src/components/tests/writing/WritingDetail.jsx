import React from "react";
import { useNavigate } from "react-router-dom";
import { testInfo, testTips, expectations, sampleQuestion } from "./data";

export default function WritingDetail() {
  const navigate = useNavigate();

  return (
    <div id="writing-page" className="page fade-in">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            Writing Test
          </h1>
          <p className="mt-2 text-gray-600">Written expression and essay composition assessment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Test Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Test Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{testInfo.tasks}</div>
                  <div className="text-gray-600">Tasks</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{testInfo.minutes}</div>
                  <div className="text-gray-600">Minutes</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{testInfo.wordCount}</div>
                  <div className="text-gray-600">Words per Task</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                {expectations.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
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
                <p className="text-gray-700 leading-relaxed mb-4">{sampleQuestion.prompt}</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Word Count:</span>
                    <span className="font-medium">{sampleQuestion.requirements.wordCount}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Time Allowed:</span>
                    <span className="font-medium">{sampleQuestion.requirements.time}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="space-y-2 text-gray-700">
                  {sampleQuestion.requirements.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Writing Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {testTips.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">Ready to Start?</h3>
              <p className="text-yellow-700 mb-4 text-sm">
                Test your writing skills with various tasks and receive detailed feedback.
              </p>
              <button 
                onClick={() => navigate('/tests/writing/start')}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Start Writing Test
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}