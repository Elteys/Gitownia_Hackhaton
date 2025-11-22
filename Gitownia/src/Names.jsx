import { useState } from "react";
import BackButton from "./BackButton";

// Funkcja pomocnicza do tworzenia unikalnych ID dla graczy
const createNewPlayer = () => ({
  // Używamy unikalnego ID dla stabilności kluczy React
  id: crypto.randomUUID(), 
  name: "",
});

export default function Names() {
  // Zaczynamy z jednym graczem
  const [players, setPlayers] = useState([createNewPlayer()]); 
  const [randomizePlayers, setRandomizePlayers] = useState(true);

  const handleNameChange = (id, value) => {
    setPlayers(prev => 
      prev.map(player => 
        player.id === id ? { ...player, name: value } : player
      )
    );
  };

  const addPerson = () => {
    // Dodajemy nowe pole.
    setPlayers([...players, createNewPlayer()]);
  };

  const removePerson = (id) => {
    // Zapobiegamy usunięciu, jeśli została tylko jedna osoba
    if (players.length === 1) return;

    // Usuwamy gracza
    setPlayers(prev => prev.filter(player => player.id !== id));
  };

  const handleNext = () => {
    const cleaned = players.map((p) => p.name.trim()).filter((n) => n.length > 0);
    
    if (cleaned.length === 0) {
      alert("Wpisz przynajmniej jedno imię, aby kontynuować.");
      return;
    }

    localStorage.setItem("names", JSON.stringify(cleaned));
    localStorage.setItem("randomizePlayers", String(randomizePlayers));

    const selectedCategory = localStorage.getItem("selectedCategory") || "categories1";

    if (selectedCategory === "categories1") {
      window.location.hash = "#/categories1";
    } else if (selectedCategory === "categories2") {
      window.location.hash = "#/categories2";
    } else {
      window.location.hash = "#/questions";
    }
  };

  // Sprawdzamy, czy w którymś polu jest niepuste imię
  const hasAnyName = players.some((p) => p.name.trim().length > 0);

  return (
    <div className="flex flex-col gap-10 w-full p-4 sm:p-0">
      <BackButton />
      
      {/* HERO - Animacja wjazdu z dołu (fade-in-up) z opóźnieniem */}
      <section className="text-center flex flex-col items-center gap-3 sm:gap-4 animate-fade-in-up">
        <h1 className="text-3xl sm:text-5xl leading-tight">
          Wpisz imiona
          <br />
          <span className="text-accent">
            z kim dziś przełamujesz bariery?
          </span>
        </h1>
        <p className="text-text-muted max-w-xl text-sm sm:text-base animate-delay-150">
          Dodaj wszystkich uczestników gry – dzięki temu każdy dostanie swoją
          kolej na odpowiedź.
        </p>
      </section>

      {/* KARTA Z IMIONAMI - Animacja pojawiania (fade-in) z większym opóźnieniem */}
      <section className="card w-full max-w-3xl mx-auto flex flex-col gap-6 p-4 sm:p-6 bg-background rounded-2xl shadow-xl animate-fade-in animate-delay-300">
        
        {/* Toggle Losowanie */}
        <div className="flex items-center justify-between gap-4 border-b border-border/50 pb-4">
          <div className="text-left">
            <p className="text-sm sm:text-base text-text font-semibold">
              Losuj gracza do odpowiedzi
            </p>
            <p className="text-xs text-text-muted">
              Jeśli wyłączysz, gracze mogą wybierać się sami.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setRandomizePlayers((prev) => !prev)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
              randomizePlayers ? "bg-accent" : "bg-slate-600"
            }`}
          >
            <span className="sr-only">Włącz/wyłącz losowanie graczy</span>
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-slate-950 transition-transform ${
                randomizePlayers ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* LISTA IMION */}
        <div className="space-y-3 transition-all duration-300">
          {players.map((player, index) => (
            <div
              key={player.id}
              className={`flex items-center gap-3 bg-surface rounded-xl border border-border px-4 py-3 transform transition-all duration-300 ${players.length > 1 ? 'pr-1' : ''} animate-slide-in`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-xs text-text-muted w-16 shrink-0">
                Osoba {index + 1}
              </span>
              <input
                type="text"
                value={player.name}
                onChange={(e) => handleNameChange(player.id, e.target.value)}
                placeholder="Wpisz imię"
                className="input bg-transparent border-none px-0 py-1 focus:ring-0 w-full min-w-0"
              />
              
              {/* Przycisk usuwania - widoczny tylko, gdy jest więcej niż jedna osoba */}
              {players.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePerson(player.id)}
                  className="p-2 text-text-muted hover:text-red-500 transition-colors shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={`Usuń osobę ${index + 1}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          ))}

          <button
            type="button" // <--- POPRAWIONY TYP PRZYCISKU
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
            className={`primary-btn px-8 py-2 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 ${
              hasAnyName ? 'hover:scale-[1.03] active:scale-95' : ''
            }`}
          >
            Dalej
          </button>
        </div>
      </section>
    </div>
  );
}