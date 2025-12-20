import React, { useState } from "react";

const headings = [
  "A) All to protect nature",
  "B) To change the outlook on nature",
  "C) For the lovers of quiet",
  "D) Necessary steps to take",
  "E) Impact of global warming",
  "F) Eco-friendly solutions",
  "G) Building of the future",
  "H) Combination of nice and ugly",
];

const paragraphs = [
  {
    id: 15,
    title: "Paragraph I",
    text: `Maybe our children’s future will be an overheated, desert-like world, but if it’s not, 
it will probably look a lot like this. The new, highly environmentally friendly home of the 
World Wide Fund for Nature, a hemispherical glass tube standing above a council car park, 
was officially opened today.`,
  },
  {
    id: 16,
    title: "Paragraph II",
    text: `Known as the ‘Living Planet Centre’, it has jumping panda animations that greet visitors 
to its WWF Experience. Many ideas behind humanity’s attempts to protect nature were 
started by the WWF.`,
  },
  {
    id: 17,
    title: "Paragraph III",
    text: `The concrete is recycled, solar panels installed, rainwater used in toilets, natural 
ventilation and heat pumps applied. New plants and trees are added indoors and outdoors.`,
  },
  {
    id: 18,
    title: "Paragraph IV",
    text: `The calm inside contrasts with the ugly shopping centre and busy main road outside. 
This shows what the future might make possible.`,
  },
  {
    id: 19,
    title: "Paragraph V",
    text: `WWF originally protected individual animals, then ecosystems, and now teaches a global 
approach. The planet is one large ecosystem that must be protected.`,
  },
  {
    id: 20,
    title: "Paragraph VI",
    text: `Sir David says forests cannot be returned quickly and population will not shrink, but we 
can slow growth and reduce carbon emissions. The world must act together.`,
  },
];

export default function Part3() {
  const [answers, setAnswers] = useState({});

  const handleSelect = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          PART 3 — Choose the correct heading
        </h1>

        <h2 className="text-lg mb-4 font-semibold">
          List of Headings (choose one for each paragraph):
        </h2>
      <div className="bg-green-100 border-l-4 border-green-400 p-4 m-2 rounded-3xl">

        <ul className="list-disc ml-6 mb-6">
          {headings.map((h) => (
            <div key={h}>{h}</div>
          ))}
        </ul>
      </div>

      {paragraphs.map((p) => (
        <div
          key={p.id}
          className="border rounded-xl p-5 mb-6 bg-white shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">
            {p.id}. {p.title}
          </h2>

          <p className="text-gray-700 mb-4 whitespace-pre-line leading-relaxed">
            {p.text}
          </p>

          <select
            className="border p-2 rounded w-full"
            value={answers[p.id] || ""}
            onChange={(e) => handleSelect(p.id, e.target.value)}
          >
            <option value="">Choose heading…</option>
            {headings.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="mt-8 p-4 bg-gray-100 rounded-xl">
        <h3 className="font-semibold mb-2">Your Answers:</h3>
        <pre>{JSON.stringify(answers, null, 2)}</pre>
      </div>
    </div>
  );
}
