import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

function CommunityCreate() {
  const navigate = useNavigate(); // <- hook tutaj, w ciele komponentu
  const [cards, setCards] = useState([]);
  const [newCardText, setNewCardText] = useState("");
  const [deckCategory, setDeckCategory] = useState("");
  const [toast, setToast] = useState(null);
  const maxCards = 50;

  const showToast = (message, type = "info") => setToast({ message, type });

  const handleAddCard = () => {
    if (newCardText.trim() !== "" && cards.length < maxCards) {
      setCards([...cards, { id: cards.length + 1, text: newCardText }]);
      setNewCardText("");
    }
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    const renumbered = updatedCards.map((card, i) => ({ ...card, id: i + 1 }));
    setCards(renumbered);
  };

  const handleSave = async () => {
    if (deckCategory.trim() === "") {
      showToast("Podaj kategorię zestawu (np. icebreaker, deep).", "error");
      return;
    }
    if (cards.length === 0) {
      showToast("Dodaj przynajmniej jedną kartę do zestawu.", "error");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/community-deck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: deckCategory.toLowerCase(),
          cards,
        }),
      });

      if (response.ok) {
        setCards([]);
        setDeckCategory("");
        setNewCardText("");
        showToast("Zestaw zapisany!", "info");

        // tutaj nawigacja po krótkim delay, żeby toast się zdążył pokazać
        setTimeout(() => navigate("/community-select"), 500);
      } else {
        const error = await response.json();
        showToast("Błąd zapisu: " + error.error, "error");
      }
    } catch (err) {
      showToast("Nie udało się połączyć z serwerem: " + err.message, "error");
    }
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-xl shadow-lg
            ${toast.type === "error" ? "bg-red-600 text-white" : "bg-accent text-slate-950"}
            animate-fade-in-up`}
        >
          {toast.message}
        </div>
      )}
      <BackButton />
      <section className="text-center flex flex-col items-center gap-3 sm:gap-4">
        <h1 className="text-3xl sm:text-5xl leading-tight">
          Stwórz własny
          <br />
          <span className="text-accent">zestaw społeczności</span>
        </h1>
        <p className="text-text-muted max-w-xl text-sm sm:text-base bg-opacity-20 backdrop-blur-xs text-white rounded-2xl px-3 py-2">
          Dodaj własne pytania lub wyzwania i zapisz je, aby inni mogli z nich korzystać w grze.
        </p>
      </section>

      <section className="card w-full max-w-3xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-text-muted">Kategoria zestawu</label>
          <input
            type="text"
            value={deckCategory}
            onChange={(e) => setDeckCategory(e.target.value)}
            placeholder="np. deep, icebreaker"
            className="input"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm text-text-muted">Treść nowej karty</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={newCardText}
              onChange={(e) => setNewCardText(e.target.value)}
              placeholder="Wpisz treść karty..."
              className="input flex-1"
            />
            <button
              onClick={handleAddCard}
              disabled={cards.length >= maxCards}
              className="primary-btn disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Dodaj
            </button>
          </div>
          <p className="text-xs text-text-muted">Liczba kart: {cards.length}/{maxCards}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Twoje karty</h3>
          <ul className="space-y-2">
            {cards.length === 0 && <p className="text-sm text-text-muted">Nie dodano jeszcze żadnych kart.</p>}
            {cards.map((card, index) => (
              <li
                key={card.id}
                className="flex justify-between items-center bg-surface border border-border rounded-xl px-4 py-3 transform transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }} // <-- dokładnie jak w Names
              >
                <span className="text-sm">
                  <span className="text-text-muted mr-2">{card.id}.</span>
                  {card.text}
                </span>
                <button
                  onClick={() => handleDeleteCard(index)}
                  className="p-2 text-text-muted hover:text-red-500 transition-colors shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

        </div>

        <div className="flex justify-end pt-2">
          <button onClick={handleSave} className="primary-btn px-8">
            Zapisz zestaw
          </button>
        </div>
      </section>
    </div>
  );
}

export default CommunityCreate;
