import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiExit, BiBook } from 'react-icons/bi'
import { useTestContext } from '../../context/Context'
import CountdownTimer from '../CountDown'
import {
  FaHeadphones,
  FaBook,
  FaPen,
  FaMicrophone,
} from 'react-icons/fa'

const iconMap = {
  Listening: FaHeadphones,
  Reading: FaBook,
  Writing: FaPen,
  Speaking: FaMicrophone,
}

const TestHeader = ({ currentTest, testEndTime }) => {
  const navigate = useNavigate()
  const { savedData } = useTestContext()

  const CurrentIcon = currentTest ? iconMap[currentTest.title] || FaBook : BiBook

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-white/80 backdrop-blur-lg text-neutral-dark p-4 flex items-center justify-between shadow-lg rounded-2xl z-10">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate('/test')}
      >
        <div
          className={`p-4 mr-4 text-2xl rounded-xl bg-primary/10 text-primary`}
        >
          <CurrentIcon className="w-8 h-8" />
        </div>
        <div className="flex flex-col h-full">
          <h2 className="font-bold text-lg">
            {currentTest ? currentTest.title : 'Choosing'}
          </h2>
          <p className="text-sm text-neutral-dark/80">
            {currentTest ? currentTest.description : 'Choose test'}
          </p>
        </div>
      </div>

      <div>
        {currentTest && testEndTime && (
          <CountdownTimer
            endTime={testEndTime}
            onEnd={() => alert('Test finished!')}
          />
        )}
      </div>

      <div className="text-neutral-dark font-bold flex items-center gap-4">
        <span>{savedData?.firstName}</span>
        <BiExit className="cursor-pointer hover:text-error transition-colors" />
      </div>
    </nav>
  )
}

export default TestHeader
