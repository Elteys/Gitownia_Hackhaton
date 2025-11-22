import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

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
    }, 3000); // co 3 sekundy
    return () => clearInterval(id);
  }, []);

  const handleNavigate = (path) => {
    if (path === "/categories1") {
      localStorage.removeItem("gameCategoryLevel2"); // reset drugiej kategorii
    } else if (path === "/categories2") {
      localStorage.removeItem("gameCategoryLevel1"); // reset pierwszej kategorii
    }
    navigate(path);
  };

  return (
    <div className="flex flex-col gap-14 w-full">
      <section className="text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
          Przełamcie pierwsze lody
          <br />
          <span className="text-accent">
            {slogans[sloganIndex]}
          </span>
        </h1>
      </section>

      {/* SEKCJA FUNKCJI */}
      <section className="w-full flex justify-center position-fixed">
        <div className="grid gap-6 sm:gap-8 w-full max-w-4xl grid-cols-1 sm:grid-cols-2">
          <div
            onClick={() => handleNavigate('/categories1')}
            className="card flex flex-col justify-between gap-4 p-8 sm:p-10 border rounded-2xl shadow-lg hover:border-accent transition-colors w-full cursor-pointer min-h-[220px] sm:min-h-[260px]"
            role="button"
            tabIndex={0}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleNavigate('/categories1')}
          >
            <h3 className="text-accent text-2xl sm:text-3xl">Poznajcie się.</h3>
            <p className="text-text-muted text-base sm:text-lg">
              Łączymy Cię z osobami o podobnych zainteresowaniach i stylu życia.
            </p>
          </div>

          <div
            onClick={() => handleNavigate('/categories2')}
            className="card flex flex-col justify-between gap-4 p-8 sm:p-10 border rounded-2xl shadow-lg hover:border-accent transition-colors w-full cursor-pointer min-h-[220px] sm:min-h-[260px]"
            role="button"
            tabIndex={0}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleNavigate('/categories2')}
          >
            <h3 className="text-accent text-2xl sm:text-3xl">Poznajcie się LEPIEJ.</h3>
            <p className="text-text-muted text-base sm:text-lg">
              Moderowane profile i pełna kontrola nad prywatnością.
            </p>
          </div>
        </div>
      </section>
    </div >
  );
}
