import { TestProvider } from './context/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/main';
import Test from './tests/Test'
export default function App() {
  return (
      <BrowserRouter>
    <TestProvider>
        <Routes>
          {/* Sizning routelaringiz */}
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/" element={<Test />} />
          {/* ... */}
        </Routes>
        asdassad
    </TestProvider>
      </BrowserRouter>
  );
}