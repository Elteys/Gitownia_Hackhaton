import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import GlareHover from "./GlareHover";

export function Categories1() {
  const navigate = useNavigate();

  const handleSelect = (value) => {
    if (value === "community") {
      navigate("/community");
    } else {
      localStorage.setItem("gameCategoryLevel1", value);
      localStorage.setItem("questionSource", "default");
      navigate("/Questions");
    }
  };

  // WSPÓLNE PROPSY DLA KAŻDEGO GLAREHOVER
  const sharedProps = {
    glareColor: "#ffffff",
    glareOpacity: 0.3,
    glareAngle: -30,
    glareSize: 300,
    transitionDuration: 800,
    playOnce: false,
    className:
      "card bg-surface flex flex-col items-center text-center gap-3 p-5 sm:p-6 " +
      "rounded-xl shadow-lg cursor-pointer " +
      "transition-transform transition-colors duration-500 " +
      "hover:scale-105 hover:-translate-y-1 " +
      "hover:border-accent-soft hover:shadow-xl " +
      "min-h-[180px]",
    style: { position: "relative" },
  };

  return (
    <div className="flex flex-col gap-14 w-full">
      <BackButton />

      {/* HERO */}
      <section className="text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="text-3xl sm:text-7xl leading-tight">
          Wybierz swoją
          <br />
          <span className="text-accent">kategorię gry.</span>
        </h1>

        <p className="text-text-muted max-w-xl text-sm sm:text-base bg-opacity-20 backdrop-blur-xs text-white rounded-2xl px-3 py-2">
          Dopasuj klimat do grupy: lekki start, więcej emocji
          albo totalny chaos przy losowaniu pytań.
        </p>
      </section>

      {/* KATEGORIE */}
      <section className="grid gap-4 sm:gap-6 w-full max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2">

        {/* Icebreaker */}
        <div
          onClick={() => handleSelect("icebreaker")}
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("icebreaker")}
        >
          <GlareHover {...sharedProps} onClick={() => handleSelect("icebreaker")}>
            <div className="flex flex-col gap-1">  {/* <-- tutaj ustawiamy kolumnę */}
              <span className="text-lg sm:text-xl font-semibold">Icebreaker</span>
              <span className="text-xs sm:text-sm text-text-muted">
                Bezpieczne pytania na start, idealne dla nowych grup.
              </span>
            </div>
          </GlareHover>
        </div>
        {/* Wyzwania */}
        <div
          onClick={() => handleSelect("wyzwania1")}
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("wyzwania1")}
        >
          <GlareHover {...sharedProps} onClick={() => handleSelect("wyzwania1")}>
            <div className="flex flex-col gap-1">
              <span className="text-lg sm:text-xl font-semibold">Wyzwania</span>
              <span className="text-xs sm:text-sm text-text-muted">
                Ruch, akcja i zadania do wykonania przed grupą.
              </span>
            </div>
          </GlareHover>
        </div>
        {/* 18+ */}
        <div
          onClick={() => handleSelect("18plus")}
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("18plus")}
        >
          <GlareHover {...sharedProps} onClick={() => handleSelect("18plus")}>
            <div className="flex flex-col gap-1">
              <span className="text-lg sm:text-xl font-semibold">18+</span>
              <span className="text-xs sm:text-sm text-text-muted">
                Śmielsze pytania i wyzwania – do grania w zaufanym gronie.
              </span>
            </div>
          </GlareHover>
        </div>
        {/* Prawda / Fałsz */}
        <div
          onClick={() => handleSelect("prawda_falsz")}
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("prawda_falsz")}
        >
          <GlareHover {...sharedProps} onClick={() => handleSelect("prawda_falsz")}>
            <div className="flex flex-col gap-1">
              <span className="text-lg sm:text-xl font-semibold">Prawda / Fałsz</span>
              <span className="text-xs sm:text-sm text-text-muted">
                Krótkie stwierdzenia, które odsłaniają zaskakujące rzeczy.
              </span>
            </div>
          </GlareHover>
        </div>
        <div
          onClick={() => handleSelect("random")}
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("random")}
        >
          <GlareHover
            {...sharedProps}
            onClick={() => handleSelect("random")}
            className={sharedProps.className + " sm:col-span-2"}
          >
            <div className="flex flex-col gap-1">
              <span className="text-lg sm:text-xl font-semibold">Wszystkie</span>
              <span className="text-xs sm:text-sm text-text-muted">
                Miks pytań i wyzwań – aplikacja wybiera za Was.
              </span>
            </div>
          </GlareHover>
        </div>
        {/* Społeczność – szeroki */}
        <div
          onClick={() => handleSelect("community")}
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("community")}
        >
          <GlareHover
            {...sharedProps}
            onClick={() => handleSelect("community")}
            className={sharedProps.className + " sm:col-span-2"}
          >
            <div className="flex flex-col gap-1">
              <span className="text-lg sm:text-xl font-semibold">Społeczność</span>
              <span className="text-xs sm:text-sm text-text-muted">
                Wybierz zestaw społecznościowy albo stwórz własny zestaw.
              </span>
            </div>
          </GlareHover>
        </div>
      </section>
    </div>
  );
}
