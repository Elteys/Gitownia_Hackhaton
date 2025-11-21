import React, { useState } from "react";

// Tutaj przykładowe pytania, możesz podmienić pełnym JSON
const questionsData = {
  icebreaker: [
    { id: 1, text: "Ulubiona pora roku i dlaczego?" },
    { id: 2, text: "Co najbardziej lubisz robić w wolnym czasie?" }
  ],
  deep: [
    { id: 1, text: "Co najbardziej zmieniło cię w ostatnich latach?" },
    { id: 2, text: "Jaką jedną rzecz chciałbyś poprawić w swoim życiu?" }
  ],
  wyzwania1: [
    { id: 1, text: "Zrób swój najlepszy dziwny dźwięk." },
    { id: 2, text: "Zatańcz w rytm wyimaginowanej muzyki przez 3 sekundy." }
  ],
  wyzwania2: [
    { id: 1, text: "Zatańcz 5-sekundowy układ wymyślony na miejscu." },
    { id: 2, text: "Zrób przez 3 sekundy imitację postaci z gry/video." }
  ]
};

const Questions = ({ categories }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Funkcja losująca pytanie z podanych kategorii
  const getRandomQuestion = () => {
    // Zbierz wszystkie pytania z wybranych kategorii
    const allQuestions = categories.flatMap(cat => questionsData[cat] || []);
    if (allQuestions.length === 0) return null;

    // Wybierz losowe pytanie
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    setCurrentQuestion(allQuestions[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-md text-center">
        {currentQuestion ? (
          <p className="text-lg mb-6">{currentQuestion.text}</p>
        ) : (
          <p className="text-gray-500 mb-6">Kliknij przycisk, aby wylosować pytanie</p>
        )}
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={getRandomQuestion}
        >
          Losuj następne pytanie
        </button>
      </div>
    </div>
  );
};

export default Questions;
