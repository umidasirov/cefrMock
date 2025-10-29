import React from "react";

export default function Baneer() {
  return (
    <div>
      <style>{`
        @keyframes scalePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        .scale-pulse {
          animation: scalePulse 2s ease-in-out infinite;
          will-change: transform;
        }
        /* Respect user preference for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .scale-pulse { animation: none !important; }
        }
      `}</style>

      <section className="w-[90%] p-4 md:w-4/5 lg:w-3/4 mx-auto mt-20 py-10 px-6 md:px-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg text-white text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold leading-tight">
          Test Your English Level
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Test your English level with our comprehensive CEFR assessment
        </p>

        <button
          className="mt-8 inline-block p-4 rounded-full px-6 bg-white shadow-lg hover:scale-105 transform transition-all duration-200 focus:outline-none scale-pulse"
          aria-label="Start testing now"
        >
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">
            Start testing Now
          </span>
        </button>
      </section>
    </div>
  );
}