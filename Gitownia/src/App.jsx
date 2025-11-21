import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
// Zmień import na zmienioną nazwę
import { HomeContent } from './Home';
import { Categories1 } from './Categories1';
import { Categories2 } from './Categories2';

function App() {
  const [count, setCount] = useState(0);

  return (
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
            {/* Navigacja do Home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Ładujemy samą treść strony, bez ramki */}
            <Route path="/home" element={<HomeContent />} />
            <Route path="/categories1" element={<Categories1 />} />
            <Route path="/categories2" element={<Categories2 />} />
          </Routes>
        </div>

      </main>

      {/* STOPKA - Zawsze na dole */}
      <footer className="text-center text-xs text-text-muted py-6 border-t border-border mt-auto">
        © {new Date().getFullYear()} Gitownia — łączymy ludzi z duszą
      </footer>
    </div>
  );
}

export default App;