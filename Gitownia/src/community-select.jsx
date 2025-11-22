// src/communityCategories.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

function CommunityCategories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Ładuj plik z zestawami społecznościowymi
    fetch('./Json/CommunityQuestions.json')
      .then(res => res.json())
      .then(data => {
        // Zrób listę kluczy (kategorii)
        const categoryKeys = Object.keys(data);
        setCategories(categoryKeys);
      })
      .catch(err => {
        console.error('Błąd ładowania pliku z zestawami społecznościowymi', err);
        setCategories([]);
      });
  }, []);

  const handleSelect = (category) => {
    // Zapisz wybraną kategorię do localStorage
    localStorage.setItem('gameCategoryLevel1', category);
    localStorage.setItem('questionSource', 'community'); // <-- DODAJ
    navigate('/Questions');
  };

  return (
    <div className="flex flex-col gap-14 w-full">
      <BackButton />
      <section className="text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="text-3xl sm:text-7xl leading-tight">
          Wybierz zestaw
          <br />
          <span className="text-accent">społecznościowy.</span>
        </h1>
        <p className="text-text-muted max-w-xl text-sm sm:text-base">
          Wybierz gotowy zestaw stworzony przez społeczność Gatowni.
        </p>
      </section>

      <section className="grid gap-4 sm:gap-6 w-full max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2">
        {categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category}
              onClick={() => handleSelect(category)}
              className="card w-full flex flex-col items-start gap-2 px-5 py-4 sm:px-6 sm:py-5 hover:border-accent-soft transition-colors"
            >
      
              <span className="text-lg sm:text-xl font-semibold">{category}</span>
              <span className="text-xs sm:text-sm text-text-muted">
                Zestaw przygotowany przez społeczność Gitownii.
              </span>
            </button>
          ))
        ) : (
          <p>Ładowanie zestawów społecznościowych...</p>
        )}
      </section>
    </div>
  );
}

export default CommunityCategories;
