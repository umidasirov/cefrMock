import React from "react";
import { teamMembers } from "./data";

export default function About() {
  return (
    <main className="flex-1 my-12">
      <section className="w-[90%] md:w-4/5 lg:w-3/4 mx-auto py-10 px-6 md:px-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg text-white text-center shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4">About Our Team</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are a passionate team dedicated to creating engaging English tests and educational platforms.
        </p>
      </section>

      <section className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Meet the Creators
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-200 hover:scale-105"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
              <p className="text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
