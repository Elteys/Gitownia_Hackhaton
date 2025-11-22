// src/community-select.jsx
import React, { useState, useEffect } from 'react';

function CommunitySelect() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch('/CommunityQuestions.json')
      .then(res => res.json())
      .then(data => setDecks(data))
      .catch(err => {
        console.error('Błąd ładowania pliku JSON:', err);
        setDecks([]);
      });
  }, []);

  return (
    <div className="flex flex-col gap-14 w-full max-w-3xl mx-auto p-6">
      <h2 className="text-2xl sm:text-4xl font-bold">Wybierz zestaw społecznościowy</h2>
      <p className="text-green-600 font-medium">Routing działa poprawnie!</p>
      <p className="text-text-muted">
        Wybierz gotowy zestaw stworzony przez społeczność Gatowni.
      </p>

      <div className="flex flex-col gap-4">
        {decks.length > 0 ? (
          decks.map((deck) => (
            <div
              key={deck.id}
              className="card p-4 border border-gray-300 rounded hover:border-accent-soft transition-colors cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{deck.title}</h3>
              <p className="text-sm text-text-muted">Karty: {deck.cards.length}</p>
            </div>
          ))
        ) : (
          <p>Wczytywanie listy zestawów...</p>
        )}
      </div>
    </div>
  );
}

export default CommunitySelect;
