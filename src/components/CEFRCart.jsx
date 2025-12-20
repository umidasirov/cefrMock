import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function CEFRCart() {
    const navigate = useNavigate()
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-6">
                <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 text-indigo-600" />
            </div>

            <h2 className="text-gray-900 mb-3 text-xl font-semibold">CEFR Test</h2>

            <p className="text-gray-600 mb-6">
                Common European Framework of Reference - Standardized measure of language proficiency used across Europe and internationally.
            </p>

            <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span>Levels: A1 - C2</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span>Reading Comprehension</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span>Listening Skills</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span>Writing & Speaking</span>
                </div>
            </div>

            <button onClick={()=>navigate('/registr')} className="mouseover w-full mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                Start CEFR Test
            </button>
        </div>
    );
}
