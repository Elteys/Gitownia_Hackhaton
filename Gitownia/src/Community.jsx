import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import GlareHover from "./GlareHover";

function Community() {
  const navigate = useNavigate();

  const handleSelectCommunity = () => {
    navigate('/community-select');
  };

  const handleCreateCustom = () => {
    navigate('/community-create');
  };

  return (
    <div className="flex flex-col gap-14 w-full">
      <BackButton />
      {/* HERO */}
      <section className="text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="text-3xl sm:text-7xl leading-tight">
          Wybierz własny
          <br />
          <span className="text-accent">format gry.</span>
        </h1>
        <p className="text-text-muted max-w-xl text-sm sm:text-base bg-opacity-20 backdrop-blur-xs text-white rounded-2xl px-3 py-2">
          Zainspiruj się społecznością lub stwórz własny zestaw od zera.
        </p>
      </section>

      {/* PRZYCISKI WYBORU FORMA TU */}
      <section className="grid gap-4 sm:gap-6 w-full max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2">
        <button
          onClick={handleSelectCommunity}
          className="card w-full flex flex-col items-start gap-2 px-5 py-4 sm:px-6 sm:py-5 hover:border-accent-soft transition-colors text-left"
        >
          
          <span className="text-lg sm:text-xl font-semibold">Wybierz zestaw</span>
          <span className="text-xs sm:text-sm text-text-muted">
            Zobacz, co zasugerowała społeczność i wybierz zestaw do gry.
          </span>
        </button>
        <button
          onClick={handleCreateCustom}
          className="card w-full flex flex-col items-start gap-2 px-5 py-4 sm:px-6 sm:py-5 hover:border-accent-soft transition-colors text-left"
        >
        
          <span className="text-lg sm:text-xl font-semibold">Stwórz własny zestaw</span>
          <span className="text-xs sm:text-sm text-text-muted">
            Stwórz własny zestaw kart i podziel się z innymi.
          </span>
        </button>
      </section>
    </div>
  );
}

export default Community
