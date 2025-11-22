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

        <p className="text-text-muted max-w-xl text-sm sm:text-base">
          Dopasuj klimat do grupy: lekki start, więcej emocji
          albo totalny chaos przy losowaniu pytań.
        </p>
      </section>

      {/* KATEGORIE */}
      <section className="grid gap-4 sm:gap-6 w-full max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2">

        {/* Icebreaker */}
        <GlareHover {...sharedProps} onClick={() => handleSelect("icebreaker")}>
          <span className="text-lg sm:text-xl font-semibold">Icebreaker</span>
          <span className="text-xs sm:text-sm text-text-muted">
            Bezpieczne pytania na start, idealne dla nowych grup.
          </span>
        </GlareHover>

        {/* Wyzwania */}
        <GlareHover {...sharedProps} onClick={() => handleSelect("wyzwania1")}>
          <span className="text-lg sm:text-xl font-semibold">Wyzwania</span>
          <span className="text-xs sm:text-sm text-text-muted">
            Ruch, akcja i zadania do wykonania przed grupą.
          </span>
        </GlareHover>

        {/* 18+ */}
        <GlareHover {...sharedProps} onClick={() => handleSelect("18plus")}>
          <span className="text-lg sm:text-xl font-semibold">18+</span>
          <span className="text-xs sm:text-sm text-text-muted">
            Śmielsze pytania i wyzwania – do grania w zaufanym gronie.
          </span>
        </GlareHover>

        {/* Prawda / Fałsz */}
        <GlareHover {...sharedProps} onClick={() => handleSelect("prawda_falsz")}>
          <span className="text-lg sm:text-xl font-semibold">Prawda / Fałsz</span>
          <span className="text-xs sm:text-sm text-text-muted">
            Krótkie stwierdzenia, które odsłaniają zaskakujące rzeczy.
          </span>
        </GlareHover>

        <GlareHover
  {...sharedProps}
  onClick={() => handleSelect("random")}
  className={sharedProps.className + " sm:col-span-2"}
>
  <span className="text-lg sm:text-xl font-semibold">Wszystkie</span>
  <span className="text-xs sm:text-sm text-text-muted">
    Miks pytań i wyzwań – aplikacja wybiera za Was.
  </span>
</GlareHover>

{/* Społeczność – szeroki */}
<GlareHover
  {...sharedProps}
  onClick={() => handleSelect("community")}
  className={sharedProps.className + " sm:col-span-2"}
>
  <span className="text-lg sm:text-xl font-semibold">Społeczność</span>
  <span className="text-xs sm:text-sm text-text-muted">
    Wybierz zestaw społecznościowy albo stwórz własny zestaw.
  </span>
</GlareHover>

      </section>
    </div>
  );
}
