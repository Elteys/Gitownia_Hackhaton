import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeContent } from './Home';
import logo from "./assets/icecube.png";
import Particles from './Particles';

import Questions from './Questions'; // Twój komponent losujący pytania
// Zmień import na zmienioną nazwę
import Names from './Names';
import { Categories1 } from './Categories1';
import { Categories2 } from './Categories2';

function App() {
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
    // APP-SHELL - Cała wysokość ekranu, układ Flex Col
    <div className="app-shell min-h-screen flex flex-col">

      {/* NAGŁÓWEK (jeśli jest potrzebny, można go dodać tutaj) */}
      <header className="p-4 sm:p-6 border-b border-border">
        <div className="app-container">LOGO</div>
      </header>

      {/* GŁÓWNA TREŚĆ (ROUTE) */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6">

        {/* Kontener dla routingu */}
        <div className="app-container w-full max-w-4xl">
          <Routes>
            {/* Przekierowanie z "/" na "/home" */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Strona główna */}
            <Route path="/home" element={<HomeContent />} /> 
            <Route path="/names" element={<Names />} /> 


            {/* Strona z losowaniem pytań */}
            <Route path="/questions" element={<Questions />} />
            {/* Ładujemy samą treść strony, bez ramki */}
            <Route path="/home" element={<HomeContent />} />
            <Route path="/categories1" element={<Categories1 />} />
            <Route path="/categories2" element={<Categories2 />} />
          </Routes>
        </div>
      </main>

      {/* STOPKA */}
      <footer className="text-center text-xs text-text-muted py-6 border-t border-border mt-auto">
        © {new Date().getFullYear()} Gitownia — łączymy ludzi z duszą
      </footer>
    </div>
  );
}

export default App;
