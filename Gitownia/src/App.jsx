import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Button'
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-shell">
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
