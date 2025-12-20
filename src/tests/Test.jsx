import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BiExit, BiBook } from 'react-icons/bi';
import TestsList from '../components/TestList';
import { useProvide } from '../context/Context';
import CountdownTimer from '../components/CountDown';
import { FaHeadphones, FaBook, FaPen, FaMicrophone } from 'react-icons/fa';
import { useEffect, useState } from "react";

const iconMap = {
    BiHeadphones: FaHeadphones,
    BiBookOpen: FaBook,
    BiPencil: FaPen,
    BiMicrophone: FaMicrophone
};

export default function Test() {
    const { Text, savedData, navdata, SetNavdata } = useProvide();
    const location = useLocation();
    const navigate = useNavigate();

    const currentTest = Text.find(test => location.pathname.startsWith(`/test${test.link}`));

    useEffect(() => {
        if (currentTest) {
            SetNavdata(currentTest.title);
        }
    }, [currentTest, SetNavdata]);

    const CurrentIcon = currentTest ? (iconMap[currentTest.icon] || FaBook) : BiBook;

    return (
        <div className="flex justify-center mt-1 ">
            <nav className="sm:w-8/10 max-md:w-full text-sky-600 p-4 flex items-center shadow-lg backdrop-blur-2xl justify-between fixed h-20 rounded-2xl z-10">

                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => navigate('/test')}
                >
                    <div className={`p-4 mr-4 text-2xl rounded-xl ${currentTest?.color || 'bg-sky-500'} border-sky-500`}>
                        <CurrentIcon className="text-white w-8 h-8" />
                    </div>
                    <div className={`flex flex-col h-full`}>
                        <h2 className="font-bold">{currentTest ? currentTest.title : 'Choosing'}</h2>
                        <p>{currentTest ? currentTest.description : 'Choose test'}</p>
                    </div>
                </div>

                <div>
                    {currentTest && location.pathname !== "/test" && location.pathname !== "/test/test4" && (
                        <CountdownTimer
                            minutes={parseInt(currentTest.duration)}
                            onEnd={() => alert("Tugadi")}
                        />
                    )}
                </div>

                <div className="text-sky-400 font-bold flex items-center gap-4">
                    {savedData?.firstName}
                    <BiExit className="cursor-pointer hover:text-red-500 transition-colors" />
                </div>
            </nav>

            <div className="mt-24 w-8/10 shadow-2xl rounded-2xl mx-auto px-4 py-24">
                {location.pathname === "/test" && <TestsList />}
                <Outlet />
            </div>
        </div>
    );
}
