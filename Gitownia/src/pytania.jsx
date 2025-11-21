import React, { useState } from "react";
import questionsData from "../Json/questions.json";

const KafelkiStrona = ({ initialCategories = [] }) => {
  const [selectedCategories, setSelectedCategories] = useState(initialCategories);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Pobierz wszystkie dostępne kategorie poza tymi domyślnymi dla strony
  const allCategories = Object.keys(questionsData).filter(
    (cat) => !initialCategories.includes(cat)
  );

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const getRandomQuestion = () => {
    const allQuestions = selectedCategories.flatMap((cat) => questionsData[cat] || []);

    if (allQuestions.length === 0) {
      setCurrentQuestion({ id: 0, text: "Nie wybrano żadnych kategorii lub brak pytań." });
      return;
    }

    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    setCurrentQuestion(allQuestions[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Wybierz dodatkowe kategorie</h1>

      <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-md">
        {allCategories.map((cat) => (
          <div
            key={cat}
            className={`p-4 rounded shadow text-center cursor-pointer transition
              ${selectedCategories.includes(cat)
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
            onClick={() => toggleCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

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
          Losuj pytanie
        </button>
      </div>
    </div>
  );
};

export default KafelkiStrona;
