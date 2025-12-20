import { createRoot } from 'react-dom/client'
import React from 'react'
import { TestProvider } from './context/Context.jsx'  // ← TO'G'RI
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <TestProvider>
      <App />
    </TestProvider>
)
