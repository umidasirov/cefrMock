import React from "react";
import { useNavigate } from "react-router-dom";
import { useProvide } from "../context/Context";
import { FaHeadphones, FaBook, FaPen, FaMicrophone } from "react-icons/fa";

const iconMap = {
    BiHeadphones: FaHeadphones,
    BiBookOpen: FaBook,
    BiPencil: FaPen,
    BiMicrophone: FaMicrophone
};

export default function CEFRTestCards() {
    const navigate = useNavigate();
    const { Text } = useProvide();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 mt-24 max-w-4xl mx-auto">
            {Text.map(test => {
                const Icon = iconMap[test.icon] || FaBook; // Default icon
                return (
                    <div
                        key={test.id}
                        className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all border-2 border-transparent hover:border-sky-500"
                        onClick={() =>
                            navigate(`/test${test.link}${test.id < 3 ? '/part1' : ''}`)
                        }

                    >
                        <div className={`flex items-center justify-center w-16 h-16 ${test.color || 'bg-sky-500'} rounded-xl mb-4`}>
                            <Icon className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.title}</h3>
                        <p className="text-gray-600 mb-2">{test.description}</p>
                        <p className="text-gray-500 text-sm">Duration: {test.duration}</p>
                        <p className="text-gray-500 text-sm">Parts: {test.parts}</p>
                    </div>
                );
            })}
        </div>
    );
}
