import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrueFocus from "./TrueFocus";
import GlareHover from "./GlareHover";

export function HomeContent() {
  const navigate = useNavigate();
  const [sloganIndex, setSloganIndex] = useState(0);

  const slogans = [
    "rozpocznijcie rozmowę.",
    "poznajcie się od nowa.",
    "nie czekajcie do wiosny.",
    "zamieńcie ciszę w śmiech.",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  const handleNavigate = (category) => {
    // zapis wybranej kategorii
    localStorage.setItem("selectedCategory", category);

    // opcjonalne czyszczenie drugiej kategorii
    if (category === "categories1") {
      localStorage.removeItem("gameCategoryLevel2");
    } else if (category === "categories2") {
      localStorage.removeItem("gameCategoryLevel1");
    }

    // przejście do strony z imionami
    navigate("/names");
  };

  return (
    <div className="flex flex-col gap-14 w-full">
      {/* SLOGAN */}
      <section className="text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl animate-fade-in-up">
          Przełamcie pierwsze bariery
          <br />
          <div className="relative h-[60px] flex justify-center items-center overflow-hidden">
            <span
              key={sloganIndex}
              className="text-accent absolute animate-slogan"
            >
              {slogans[sloganIndex]}
            </span>
          </div>
        </h1>
      </section>

      {/* SEKCJA FUNKCJI */}
      <section className="w-full flex justify-center">
        <div className="grid gap-6 sm:gap-8 w-full max-w-4xl grid-cols-1 sm:grid-cols-2">

          {/* KARTA 1 - Poznajcie się */}
          <div
            onClick={() => handleNavigate('categories1')}
            role="button"
            tabIndex={0}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleNavigate('categories1')}
          >
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}

              className="card flex flex-col gap-4 p-2 rounded-xl shadow-lg cursor-pointer
              transition-transform transition-colors duration-500 transform
              hover:scale-105 hover:-translate-y-1 hover:shadow-lg
              card-appear hover-grow hover:border-accent
              min-h-[180px]
              focus:outline-none focus:ring-2 focus:ring-accent"
              style={{ position: "relative" }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-accent text-xl sm:text-2xl">
                  Poznajcie się.
                </h3>
                <p className="text-text-muted text-sm sm:text-base text-center">
                  Łączymy Cię z osobami o podobnych zainteresowaniach i stylu życia.
                </p>
              </div>
            </GlareHover>
          </div>

          {/* KARTA 2 - Poznajcie się LEPIEJ */}
          <div
            onClick={() => handleNavigate('categories2')}
            role="button"
            tabIndex={0}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleNavigate('categories2')}
          >
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              onClick={() => handleNavigate("categories2")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") &&
                handleNavigate("/categories2")
              }
              className="card flex flex-col gap-4 p-2 sm:p-10 rounded-2xl shadow-lg cursor-pointer
              transition-transform transition-colors duration-500 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
              card-appear hover-grow hover:border-accent
              min-h-[220px] sm:min-h-[260px]
              focus:outline-none focus:ring-2 focus:ring-accent"
              style={{ position: "relative" }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-accent text-xl sm:text-2xl">
                  Poznajcie się LEPIEJ.
                </h3>
                <p className="text-text-muted text-sm sm:text-base text-center">
                  Moderowane profile i pełna kontrola nad prywatnością.
                </p>
              </div>
            </GlareHover>
          </div>

        </div>
      </section>
    </div>
  );
}
