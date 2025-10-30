import React, { useState, useMemo } from "react";

// AllTestsPage.jsx
// React + Tailwind single-file component for the "All Tests" page.
// Default export a React component. Strings are mostly in Uzbek per your preference.

export default function AllTestsPage() {
  const testsData = [
    {
      id: "reading",
      title: "Reading",
      description: "Matnni tushunish va tahlil qilish bo'yicha to'liq testlar",
      level: "A1-C2",
      color: "bg-red-100",
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      href: "/tests/reading",
    },
    {
      id: "listening",
      title: "Listening",
      description: "Audio asosida tinglab tushunish testlari",
      level: "A1-C2",
      color: "bg-blue-100",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      href: "/tests/listening",
    },
    {
      id: "speaking",
      title: "Speaking",
      description: "Interaktiv nutq baholash testlari",
      level: "A1-C2",
      color: "bg-green-100",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      href: "/tests/speaking",
    },
    {
      id: "writing",
      title: "Writing",
      description: "Tuzilgan yozuv vazifalari va baholash",
      level: "A1-C2",
      color: "bg-yellow-100",
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      href: "/tests/writing",
    },
  ];

  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [perPage] = useState(8);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let arr = testsData.filter((t) => {
      return (
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.level.toLowerCase().includes(q)
      );
    });
    if (levelFilter !== "all") {
      arr = arr.filter((t) => t.level.toLowerCase().includes(levelFilter));
    }
    return arr;
  }, [query, levelFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const displayed = filtered.slice((page - 1) * perPage, page * perPage);

  function gotoTest(href) {
    // Minimal navigation helper — if you're using react-router, replace with navigate(href)
    window.location.href = href;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Barcha testlar</h1>
          <div className="hidden sm:flex items-center gap-3">
            <a href="/" className="text-sm px-3 py-2 rounded-md bg-white shadow-sm hover:opacity-95 inline-flex items-center">
              Bosh sahifa
            </a>
            <a href="/results" className="text-sm px-3 py-2 rounded-md bg-white shadow-sm hover:opacity-95 inline-flex items-center">
              Natijalar
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="col-span-2">
              <label htmlFor="search" className="sr-only">Qidiruv</label>
              <input
                id="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                className="block w-full border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                placeholder="Test yoki tavsif bo'yicha qidirish..."
                aria-label="Qidiruv"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={levelFilter}
                onChange={(e) => {
                  setLevelFilter(e.target.value);
                  setPage(1);
                }}
                className="w-full border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                aria-label="Daraja filtri"
              >
                <option value="all">Hammasi</option>
                <option value="a1">A1-A2</option>
                <option value="b1">B1-B2</option>
                <option value="c1">C1-C2</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((t) => (
            <article
              key={t.id}
              tabIndex={0}
              className="bg-white rounded-lg shadow-md p-6 hover:transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-transform duration-200"
              aria-label={t.title}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`rounded-full p-3 ${t.color}`}>{t.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
                  <p className="text-sm text-gray-500">{t.level}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{t.description}</p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => gotoTest(t.href)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transform transition-all duration-150 focus:outline-none"
                >
                  Testni boshlash
                </button>
                <a href={t.href} className="text-sm text-gray-500 underline">
                  Ko'proq ma'lumot
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-gray-600">{`Sahifa ${page} / ${totalPages} — jami ${filtered.length} ta test`}</p>

          <div className="inline-flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-2 rounded-md bg-white border disabled:opacity-50"
            >
              Avvalgi
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-2 rounded-md bg-white border disabled:opacity-50"
            >
              Keyingi
            </button>
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-8 bg-white rounded-lg p-6 text-center text-gray-600">
            Hech narsa topilmadi. Qidiruv so'zini yoki filterni o'zgartirib ko'ring.
          </div>
        )}
      </div>
    </div>
  );
}
