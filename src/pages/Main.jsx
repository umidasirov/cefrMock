import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faGlobe } from "@fortawesome/free-solid-svg-icons";
import CEFRCart from "../components/CEFRCart";

export default function Main() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
            <FontAwesomeIcon icon={faGraduationCap} className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-gray-900 mb-4 text-2xl font-semibold">
            CEFR Mock Test Platform
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to the interactive English proficiency test platform. Choose your preferred test format and begin your assessment journey.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
            <CEFRCart/>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>O'zbekistonda IELTS va CEFR testlari uchun professional tayyorgarlik platformasi</p>
        </div>
      </div>
    </div>
  );
}
