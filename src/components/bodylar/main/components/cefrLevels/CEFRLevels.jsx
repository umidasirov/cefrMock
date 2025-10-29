// ...existing code...
import React from "react";
import cards from "./data";
export default function CEFRLevels() {
  return (
    <section className="mb-12 px-4 sm:px-6 lg:px-0 mt-[40px]">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">CEFR Levels</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {cards.map((c) => (
          <article
            key={c.title}
            role="article"
            tabIndex={0}
            className="bg-white rounded-lg shadow-md p-5 sm:p-6 card-hover focusable-card"
            aria-label={c.title}
          >
            <div className="flex items-center mb-4">
              <div className={`${c.tagBg} rounded-full p-2 sm:p-3`}>
                <span className={`font-bold sm:text-lg text-sm ${c.tagText}`}>{c.tag}</span>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">{c.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{c.desc}</p>
          </article>
        ))}
      </div>

      <style>{`
        /* Smooth card transition */
        .card-hover { transition: transform .28s cubic-bezier(.2,.9,.2,1), box-shadow .28s cubic-bezier(.2,.9,.2,1); }

        /* Apply hover effects only on devices that support hover (avoids interfering on touch) */
        @media (hover: hover) and (pointer: fine) {
          .card-hover:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 18px 40px rgba(16,24,40,0.08);
          }
        }

        /* Make cards keyboard-focusable with same visual lift (no border) */
        .focusable-card:focus {
          outline: none;
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 18px 40px rgba(16,24,40,0.08);
        }

        /* Slightly larger spacing on wide screens */
        @media (min-width:1024px) {
          .card-hover { padding: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
// ...existing code...