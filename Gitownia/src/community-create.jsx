import React, { useState } from "react";

function CommunityCreate() {
  const [cards, setCards] = useState([]); // tablica obiektów { id, text }
  const [newCardText, setNewCardText] = useState("");
  const [deckCategory, setDeckCategory] = useState("");
  const maxCards = 50;

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
      alert("Podaj kategorię zestawu (np. icebreaker, deep).");
      return;
    }
    if (cards.length === 0) {
      alert("Dodaj przynajmniej jedną kartę do zestawu.");
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
        alert("Zestaw zapisany na serwerze!");
        setCards([]);
        setDeckCategory("");
        setNewCardText("");
      } else {
        const error = await response.json();
        alert("Błąd zapisu: " + error.error);
      }
    } catch (err) {
      alert("Nie udało się połączyć z serwerem: " + err.message);
    }
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* HERO */}
      <section className="text-center flex flex-col items-center gap-3 sm:gap-4">
        <h1 className="text-3xl sm:text-5xl leading-tight">
          Stwórz własny
          <br />
          <span className="text-accent">zestaw społeczności</span>
        </h1>
        <p className="text-text-muted max-w-xl text-sm sm:text-base">
          Dodaj własne pytania lub wyzwania i zapisz je,
          aby inni mogli z nich korzystać w grze.
        </p>
      </section>

      {/* KARTA GŁÓWNA */}
      <section className="card w-full max-w-3xl mx-auto flex flex-col gap-8">
        {/* KATEGORIA */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-text-muted">
            Kategoria zestawu
          </label>
          <input
            type="text"
            value={deckCategory}
            onChange={(e) => setDeckCategory(e.target.value)}
            placeholder="np. deep, icebreaker"
            className="input"
          />
        </div>

        {/* DODAWANIE KART */}
        <div className="flex flex-col gap-3">
          <label className="text-sm text-text-muted">
            Treść nowej karty
          </label>
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

          <p className="text-xs text-text-muted">
            Liczba kart: {cards.length}/{maxCards}
          </p>
        </div>

        {/* LISTA KART */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Twoje karty</h3>

          {cards.length === 0 && (
            <p className="text-sm text-text-muted">
              Nie dodano jeszcze żadnych kart.
            </p>
          )}

          <ul className="space-y-2">
            {cards.map((card, index) => (
              <li
                key={card.id}
                className="flex justify-between items-center bg-surface border border-border rounded-xl px-4 py-3"
              >
                <span className="text-sm">
                  <span className="text-text-muted mr-2">
                    {card.id}.
                  </span>
                  {card.text}
                </span>
                <button
                  onClick={() => handleDeleteCard(index)}
                  className="text-red-500 text-sm hover:opacity-80"
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ZAPIS */}
        <div className="flex justify-end pt-2">
          <button
            onClick={handleSave}
            className="primary-btn px-8"
          >
            Zapisz zestaw
          </button>
        </div>
      </section>
    </div>
  );
}

export default CommunityCreate;