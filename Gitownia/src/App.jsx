import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeContent } from './Home'; // Twój komponent Home
import Losowo from './losowo'; // Twój komponent losujący pytania

function App() {
  return (
    // APP-SHELL - Cała wysokość ekranu, układ Flex Col
    <div className="app-shell min-h-screen flex flex-col">
      
      {/* NAGŁÓWEK */}
      <header className="p-4 sm:p-6 border-b border-border">
         <div className="app-container font-bold text-xl">LOGO</div>
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

            {/* Strona z losowaniem pytań */}
            <Route path="/losowo" element={<Losowo />} />
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
