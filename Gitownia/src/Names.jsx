import { useState } from "react";

export default function Names() {
  const [names, setNames] = useState([""]);

  const handleNameChange = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };

  const addPerson = () => {
    setNames([...names, ""]);
  };

  // funkcja do zapisu i przekierowania
  const handleNext = () => {
    localStorage.setItem("names", JSON.stringify(names)); // zapis do localStorage
    window.location.hash = "#/questions"; // przekierowanie
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-6">
      <div className="text-center mb-6">
        <h1 className="text-white mb-5 text-5xl font-bold">Wpisz imiona</h1>
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
