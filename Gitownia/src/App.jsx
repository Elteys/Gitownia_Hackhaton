import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HomeContent } from './Home';
import Particles from './Particles'; // UPEWNIJ SIĘ, ŻE TO JEST ZMEMOIZOWANY KOMPONENT

// Import pozostałych komponentów...
import Questions from './Questions';
import Names from './Names';
import { Categories1 } from './Categories1';
import { Categories2 } from './Categories2';
import Community from './Community.jsx';
import CommunityCreate from './community-create';
import CommunitySelect from './community-select';

// Definicja wariantów animacji (bez zmian)
const pageVariants = {
  initial: { opacity: 0, x: 50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -50 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.35
};

function App() {
  const location = useLocation();

  return (
    <div className="app-shell min-h-screen flex flex-col relative overflow-hidden bg-background"> 
      
      {/* 1. KONTENER PARTICLES - Zmieniono position: 'fixed' i dodano stały 'key' */}
      <div
        key="static-particles-container" // Dodanie stałego klucza
        style={{
          position: 'fixed', 
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Particles amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      {/* GŁÓWNA TREŚĆ */}
      <main className="flex-grow flex items-center justify-center p-0 sm:p-12 relative z-10">
        <div className="app-container w-full max-w-4xl">
          
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              
              <Route path="/" element={<Navigate to="/home" replace />} />

              {/* Opakowanie w motion.div dla animacji przejścia */}
              <Route 
                path="/home" 
                element={
                  <motion.div
                    key="home"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <HomeContent />
                  </motion.div>
                } 
              />
              
              <Route 
                path="/names" 
                element={
                  <motion.div
                    key="names"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Names />
                  </motion.div>
                } 
              />
              
              {/* Pozostałe trasy... (pozostawione z motion.div) */}
              <Route 
                path="/questions" 
                element={<motion.div key="questions" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Questions /></motion.div>} 
              />
              <Route 
                path="/categories1" 
                element={<motion.div key="categories1" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Categories1 /></motion.div>} 
              />
              <Route 
                path="/categories2" 
                element={<motion.div key="categories2" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Categories2 /></motion.div>} 
              />
              <Route 
                path="/community" 
                element={<motion.div key="community" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Community /></motion.div>} 
              />
              <Route 
                path="/community-create" 
                element={<motion.div key="community-create" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><CommunityCreate /></motion.div>} 
              />
              <Route 
                path="/community-select" 
                element={<motion.div key="community-select" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><CommunitySelect /></motion.div>} 
              />


            </Routes>
          </AnimatePresence>
        </div>
      </main>

      {/* STOPKA (Z-index z10, aby była nad cząsteczkami, ale niekoniecznie z z-index cząsteczek) */}
      <footer className="text-center text-xs text-text-muted py-6 border-t border-border mt-auto relative z-10">
        © {new Date().getFullYear()} Gitownia — łączymy ludzi z duszą
      </footer>
    </div>
  );
}

export default App;