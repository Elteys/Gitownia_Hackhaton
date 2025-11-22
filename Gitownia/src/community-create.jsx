// src/community-create.jsx
import React, { useState } from 'react';

function CommunityCreate() {
  const [cards, setCards] = useState([]); // tablica obiektów { id, text }
  const [newCardText, setNewCardText] = useState('');
  const [deckCategory, setDeckCategory] = useState(''); // kategoria (np. "deep")
  const maxCards = 50;

  const handleAddCard = () => {
    if (newCardText.trim() !== '' && cards.length < maxCards) {
      setCards([...cards, { id: cards.length + 1, text: newCardText }]);
      setNewCardText('');
    }
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    // Ustawiamy nowe id kolejno
    const renumbered = updatedCards.map((card, i) => ({ ...card, id: i + 1 }));
    setCards(renumbered);
  };

  const handleSave = async () => {
    if (deckCategory.trim() === '') {
      alert('Podaj kategorię zestawu (np. icebreaker, deep).');
      return;
    }
    if (cards.length === 0) {
      alert('Dodaj przynajmniej jedną kartę do zestawu.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/community-deck', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: deckCategory.toLowerCase(),
          cards,
        }),
      });

      if (response.ok) {
        alert('Zestaw zapisany na serwerze!');
        setCards([]);
        setDeckCategory('');
        setNewCardText('');
      } else {
        const error = await response.json();
        alert('Błąd zapisu: ' + error.error);
      }
    } catch (err) {
      alert('Nie udało się połączyć z serwerem: ' + err.message);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto p-6">
      <h2 className="text-2xl sm:text-4xl font-bold">Stwórz własny zestaw</h2>
      <p className="text-text-muted">
        Dodaj pytania lub wyzwania, a następnie zapisz zestaw do wykorzystania w grze.
      </p>

      {/* Kategoria (nazwa zapisz się jako klucz + tytuł) */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">
          Kategoria (np. deep, icebreaker)
        </label>
        <input
          type="text"
          value={deckCategory}
          onChange={(e) => setDeckCategory(e.target.value)}
          placeholder="Wpisz kategorię zestawu"
          className="border border-gray-300 rounded px-4 py-2"
        />
      </div>

      {/* Dodawanie karty */}
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={newCardText}
          onChange={(e) => setNewCardText(e.target.value)}
          placeholder="Wpisz treść karty..."
          className="border border-gray-300 rounded px-4 py-2"
        />
        <button
          onClick={handleAddCard}
          disabled={cards.length >= maxCards}
          className={`px-6 py-2 rounded transition-colors ${
            cards.length >= maxCards
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-accent text-white hover:bg-accent-soft'
          }`}
        >
          Dodaj kartę
        </button>
      </div>

      {/* Licznik kart */}
      <div className="text-sm text-text-muted">
        Liczba kart: {cards.length}/{maxCards}
      </div>

      {/* Lista kart */}
      <div>
        <h3 className="text-lg font-semibold">Twoje karty:</h3>
        <ul className="list-none pl-0">
          {cards.map((card, index) => (
            <li key={card.id} className="flex justify-between items-center p-2 border-b border-gray-200">
              <span>
                {card.id}. {card.text}
              </span>
              <button
                onClick={() => handleDeleteCard(index)}
                className="text-red-500 hover:text-red-700"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Przycisk zapisu */}
      <button
        onClick={handleSave}
        className="mt-6 bg-primary text-white px-6 py-3 rounded hover:bg-primary-soft transition-colors"
      >
        Zapisz zestaw
      </button>
    </div>
  );
}

export default CommunityCreate;
