import { useState, useEffect } from "react";

export default function Names() {
  const [names, setNames] = useState([""]);
  const [randomizePlayers, setRandomizePlayers] = useState(true);

  useEffect(() => {
    const savedNames = JSON.parse(localStorage.getItem("names") || "[]");
    if (savedNames.length > 0) setNames(savedNames);

    const savedFlag = localStorage.getItem("randomizePlayers");
    if (savedFlag !== null) {
      setRandomizePlayers(savedFlag === "true");
    }
  }, []);

  const handleNameChange = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };

  const addPerson = () => setNames([...names, ""]);

  const handleNext = () => {
    const cleaned = names.map(n => n.trim()).filter(n => n.length > 0);
    if (cleaned.length === 0) return;

    localStorage.setItem("names", JSON.stringify(cleaned));
    localStorage.setItem("randomizePlayers", String(randomizePlayers));
    window.location.hash = "#/questions";
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-6">
      <div className="text-center mb-6">
        <h1 className="text-white mb-5 text-5xl font-bold">Wpisz imiona</h1>
      </div>

      {/* SWITCH: losowanie graczy */}
      <div className="w-full max-w-xl sm:max-w-2xl mb-4 flex items-center justify-between gap-4">
        <p className="text-sm sm:text-base text-text-muted">
          Chcesz losować graczy do odpowiedzi?
        </p>
        <button
          type="button"
          onClick={() => setRandomizePlayers(prev => !prev)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${randomizePlayers ? "bg-accent" : "bg-slate-600"
            }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-slate-950 transition-transform ${randomizePlayers ? "translate-x-5" : "translate-x-1"
              }`}
          />
        </button>
      </div>

      <div className="w-full max-w-xl sm:max-w-2xl space-y-4 -mt-4">
        {names.map((name, index) => (
          <div
            key={index}
            className="flex items-center bg-[#111429] rounded-xl p-5 shadow-xl"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              placeholder={`Osoba ${index + 1}`}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 max-w-full text-lg"
            />
          </div>
        ))}

        <button
          onClick={addPerson}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl shadow-lg"
        >
          + Dodaj kolejną osobę
        </button>
      </div>

      <button
        onClick={handleNext}
        className="mt-10 bg-white text-black font-semibold py-3 px-16 rounded-xl shadow-lg hover:bg-gray-200 transition"
      >
        Dalej
      </button>
    </main>
  );
}
