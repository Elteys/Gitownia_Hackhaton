import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import GlareHover from "./GlareHover";

export function Categories2() {
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

    const cardClasses =
        "card bg-surface w-full flex flex-col items-center text-center gap-3 p-5 sm:p-6 \
     rounded-xl shadow-lg cursor-pointer \
     transition-transform transition-colors duration-500 \
     hover:scale-105 hover:-translate-y-1 \
     hover:border-accent-soft hover:shadow-xl \
     min-h-[180px]";

    const sharedProps = {
        glareColor: "#ffffff",
        glareOpacity: 0.3,
        glareAngle: -30,
        glareSize: 300,
        transitionDuration: 800,
        playOnce: false,
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

                {/* Głębokie */}
                <div
                    onClick={() => handleSelect("deep")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("deep")}
                >
                    <GlareHover
                        {...sharedProps}
                        onClick={() => handleSelect("deep")}
                        className={cardClasses}
                    >
                        <span className="text-lg sm:text-xl font-semibold">Głębokie</span>
                        <span className="text-xs sm:text-sm text-text-muted">
                            Na pewno znacie się dobrze, ale możecie jeszcze lepiej.
                        </span>
                    </GlareHover>
                </div>

                {/* Wyzwania */}
                <div
                    onClick={() => handleSelect("wyzwania2")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("wyzwania2")}
                >
                    <GlareHover
                        {...sharedProps}
                        onClick={() => handleSelect("wyzwania2")}
                        className={cardClasses}
                    >
                        <span className="text-lg sm:text-xl font-semibold">Wyzwania</span>
                        <span className="text-xs sm:text-sm text-text-muted">
                            Ruch, akcja i zadania do wykonania przed grupą.
                        </span>
                    </GlareHover>
                </div>
                {/* Wszystkie */}
                <div
                    onClick={() => handleSelect("random")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("random")}
                >
                    <GlareHover
                        {...sharedProps}
                        onClick={() => handleSelect("random")}
                        className={cardClasses}
                    >
                        <span className="text-lg sm:text-xl font-semibold">Wszystkie</span>
                        <span className="text-xs sm:text-sm text-text-muted">
                            Miks pytań i wyzwań – aplikacja wybiera za Was.
                        </span>
                    </GlareHover>
                </div>
                {/* Prawda / Fałsz */}
                <div
                    onClick={() => handleSelect("prawda_falsz")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("prawda_falsz")}
                >
                    <GlareHover
                        {...sharedProps}
                        onClick={() => handleSelect("prawda_falsz")}
                        className={cardClasses}
                    >
                        <span className="text-lg sm:text-xl font-semibold">Prawda / Fałsz</span>
                        <span className="text-xs sm:text-sm text-text-muted">
                            Krótkie stwierdzenia, które odsłaniają zaskakujące rzeczy.
                        </span>
                    </GlareHover>
                </div>
                {/* 18+ — szeroki */}
                <div
                    onClick={() => handleSelect("18plus")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("18plus")}
                >
                    <GlareHover
                        {...sharedProps}
                        
                        className={`${cardClasses} sm:col-span-2`}
                    >
                        <span className="text-lg sm:text-xl font-semibold">18+</span>
                        <span className="text-xs sm:text-sm text-text-muted">
                            Śmielsze pytania i wyzwania – do grania w zaufanym gronie.
                        </span>
                    </GlareHover>
                </div>
                {/* Społeczność — szeroki */}
               <div
                    onClick={() => handleSelect("community")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect("community")}
                >
                    <GlareHover
                        {...sharedProps}
                        onClick={() => handleSelect("community")}
                        className={`${cardClasses} sm:col-span-2`}
                    >
                        <span className="text-lg sm:text-xl font-semibold">Społeczność</span>
                        <span className="text-xs sm:text-sm text-text-muted">
                            Wybierz zestaw społecznościowy albo stwórz własny zestaw.
                        </span>
                    </GlareHover>
                </div>
            </section>
        </div>
    );
}
