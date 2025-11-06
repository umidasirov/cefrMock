import React from "react";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./data";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Routing() {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <Navbar />

      <main className="flex-1 my-[50px] px-2">
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {/* 404 sahifa */}
          <Route
            path="*"
            element={
              <div className="p-8 text-center text-gray-700 text-xl">
                404 — Sahifa topilmadi
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
