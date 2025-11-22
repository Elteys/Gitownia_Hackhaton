import React from "react";
import { useNavigate } from "react-router-dom";

export function Categories2() {
    const navigate = useNavigate();

    const handleSelect = (value) => {
        if (value === "community") {
            navigate("/community");
        } else {
            localStorage.setItem("gameCategoryLevel1", value);
            localStorage.setItem("questionSource", "default"); // <-- DODAJ
            navigate("/names");
        }
    };

    return (
        <div className="flex flex-col gap-14 w-full">
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

            {/* PRZYCISKI KATEGORII */}
            <section className="grid gap-4 sm:gap-6 w-full max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2">
                <button
                    onClick={() => handleSelect("deep")}
                    className="card w-full flex flex-col items-start gap-2 px-5 py-4 sm:px-6 sm:py-5 hover:border-accent-soft transition-colors"
                >
                    <span className="text-xs uppercase tracking-wide text-text-muted">
                        WEJDŹCIE W DETALE
                    </span>
                    <span className="text-lg sm:text-xl font-semibold">Głębokie</span>
                    <span className="text-xs sm:text-sm text-text-muted">
                        Na pewno znacie się dobrze, ale możecie jeszcze lepiej.
                    </span>
                </button>

                <button
                    onClick={() => handleSelect("wyzwania2")}
                    className="card w-full flex flex-col items-start gap-2 px-5 py-4 sm:px-6 sm:py-5 hover:border-accent-soft transition-colors"
                >
                    <span className="text-xs uppercase tracking-wide text-text-muted">
                        Więcej emocji
                    </span>
                    <span className="text-lg sm:text-xl font-semibold">Wyzwania</span>
                    <span className="text-xs sm:text-sm text-text-muted">
                        Ruch, akcja i zadania do wykonania przed grupą.
                    </span>
                </button>

                <button
                    onClick={() => handleSelect("random")}
                    className="card w-full flex flex-col items-start gap-2 px-5 py-4 sm:px-6 sm:py-5 hover:border-accent-soft transition-colors"
                >
                    <span className="text-xs uppercase tracking-wide text-text-muted">
                        Dla niezdecydowanych
                    </span>
                    <span className="text-lg sm:text-xl font-semibold">Losowo</span>
                    <span className="text-xs sm:text-sm text-text-muted">
                        Miks pytań i wyzwań – aplikacja wybiera za Was.
                    </span>
                </button>

                <button
                    onClick={() => handleSelect("prawda_falsz")}
                    className="card w-full flex flex-col items-start gap-2 px-5 py-4 sm:px-6 sm:py-5 hover:border-accent-soft transition-colors"
                >
                    <span className="text-xs uppercase tracking-wide text-text-muted">
                        Szybkie rundy
                    </span>
                    <span className="text-lg sm:text-xl font-semibold">Prawda / Fałsz</span>
                    <span className="text-xs sm:text-sm text-text-muted">
                        Krótkie stwierdzenia, które odsłaniają zaskakujące rzeczy.
                    </span>
                </button>

                <button
                    onClick={() => handleSelect("18plus")}
                    className="card w-full flex flex-col items-start gap-2 px-5 py-4 sm:px-6 sm:py-5 hover:border-accent-soft transition-colors sm:col-span-2"
                >
                    <span className="text-xs uppercase tracking-wide text-text-muted">
                        Tylko dla pełnoletnich
                    </span>
                    <span className="text-lg sm:text-xl font-semibold">18+</span>
                    <span className="text-xs sm:text-sm text-text-muted">
                        Śmielsze pytania i wyzwania – do grania w zaufanym gronie.
                    </span>
                </button>
                <button
                    onClick={() => handleSelect("community")}
                    className="card w-full flex flex-col items-start gap-2 px-5 py-4 sm:px-6 sm:py-5 hover:border-accent-soft transition-colors sm:col-span-2"
                >
                    <span className="text-xs uppercase tracking-wide text-text-muted">
                        Potrzebujesz więcej?
                    </span>
                    <span className="text-lg sm:text-xl font-semibold">Społeczność</span>
                    <span className="text-xs sm:text-sm text-text-muted">
                        Wybierz zestaw społecznościowy albo stwórz własny zestaw.
                    </span>
                </button>
            </section>
        </div>
    );
}
