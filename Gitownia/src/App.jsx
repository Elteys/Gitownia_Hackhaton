import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeContent } from './Home';
import logo from "./assets/icecube.png";
import Particles from './Particles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-shell min-h-screen flex flex-col relative overflow-hidden">
      {/* Particles jako tło całej strony */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Particles
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Główna treść */}
      <main className="flex-grow flex items-center justify-center p-2 sm:p-4 relative z-10">
        <div className="app-container w-full max-w-4xl">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeContent />} />
          </Routes>
        </div>
      </main>

      {/* Stopka */}
      <footer className="text-center text-xs text-text-muted py-6 border-t border-border mt-auto relative z-10">
        © {new Date().getFullYear()} Gitownia — łączymy ludzi z duszą
      </footer>
    </div>
  );
}

export default App;
