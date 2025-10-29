import React from "react";
import { Link } from "react-router-dom";
import featuresData from "./data";
export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresData.map((item) => (
          <Link
            key={item.key}
            to={`/tests/${item.key}`}
            className="bg-white rounded-lg shadow-md p-6 text-center card-hover cursor-pointer focus:outline-none no-underline"
            aria-label={item.title}
          >
            <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${item.bg}`}>
              <svg className={`w-8 h-8 ${item.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon.path}></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </Link>
        ))}
      </div>

      <style>{`
        .card-hover { transition: transform .22s cubic-bezier(.2,.9,.2,1), box-shadow .22s cubic-bezier(.2,.9,.2,1); }
        @media (hover: hover) and (pointer: fine) {
          .card-hover:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 16px 36px rgba(16,24,40,0.08); }
        }
        .card-hover:focus { transform: translateY(-8px) scale(1.02); box-shadow: 0 16px 36px rgba(16,24,40,0.08); }
      `}</style>
    </section>
  );
}