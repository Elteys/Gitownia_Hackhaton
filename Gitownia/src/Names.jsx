import { useState } from "react";
import BackButton from "./BackButton";

export default function Names() {
  const [names, setNames] = useState([""]); // zawsze pusty start
  const [randomizePlayers, setRandomizePlayers] = useState(true);

  const handleNameChange = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };

  const addPerson = () => setNames([...names, ""]);

  const handleNext = () => {
  const cleaned = names.map((n) => n.trim()).filter((n) => n.length > 0);
  if (cleaned.length === 0) return;

  // zapis do localStorage
  localStorage.setItem("names", JSON.stringify(cleaned));
  localStorage.setItem("randomizePlayers", String(randomizePlayers));

  // odczyt wybranej kategorii
  const selectedCategory = localStorage.getItem("selectedCategory") || "categories1";

  // przekierowanie na odpowiednią stronę
  if (selectedCategory === "categories1") {
    window.location.hash = "#/categories1";
  } else if (selectedCategory === "categories2") {
    window.location.hash = "#/categories2";
  } else {
    // fallback na jakąś domyślną stronę np. questions
    window.location.hash = "#/questions";
  }
};


  const hasAnyName = names.some((n) => n.trim().length > 0);

  return (
    <div className="flex flex-col gap-10 w-full">
      <BackButton />
      {/* HERO */}
      <section className="text-center flex flex-col items-center gap-3 sm:gap-4">
        <h1 className="text-3xl sm:text-5xl leading-tight">
          Wpisz imiona
          <br />
          <span className="text-accent">
            z kim dziś przełamujesz lody?
          </span>
        </h1>
        <p className="text-text-muted max-w-xl text-sm sm:text-base">
          Dodaj wszystkich uczestników gry – dzięki temu każdy dostanie swoją
          kolej na odpowiedź.
        </p>
      </section>

      {/* KARTA Z IMIONAMI */}
      <section className="card w-full max-w-3xl mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm sm:text-base text-text">
              Losuj gracza do odpowiedzi
            </p>
            <p className="text-xs text-text-muted">
              Jeśli wyłączysz, gracze mogą wybierać się sami.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setRandomizePlayers((prev) => !prev)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              randomizePlayers ? "bg-accent" : "bg-slate-600"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-slate-950 transition-transform ${
                randomizePlayers ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* LISTA IMION */}
        <div className="space-y-3">
          {names.map((name, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-surface rounded-xl border border-border px-4 py-3"
            >
              <span className="text-xs text-text-muted w-16 shrink-0">
                Osoba {index + 1}
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                placeholder="Wpisz imię"
                className="input bg-transparent border-none px-0 py-1 focus:ring-0"
              />
            </div>
          ))}

          <button
            onClick={addPerson}
            className="w-full inline-flex items-center justify-center rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-text hover:bg-surface-muted transition-colors"
          >
            + Dodaj kolejną osobę
          </button>
        </div>

        {/* PRZYCISK DALEJ */}
        <div className="flex justify-end pt-2">
          <button
            onClick={handleNext}
            disabled={!hasAnyName}
            className="primary-btn px-8 py-2 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Dalej
          </button>
        </div>
      </section>
    </div>
  );
}
