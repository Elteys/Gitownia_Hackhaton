import React, { useState, useEffect } from "react";
import questionsData from "../Json/questions.json";

export default function Pytania({ categories = ["icebreaker", "wyzwania1"], users = ["Ania", "Bartek", "Kasia"] }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [round, setRound] = useState(1);
  const [remainingUsers, setRemainingUsers] = useState([...users]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (remainingUsers.length === 0 && users.length > 0) {
      setRemainingUsers([...users]);
      setRound(prev => prev + 1);
    }
  }, [remainingUsers, users]);

  const getRandomQuestion = () => {
    const allQuestions = categories.flatMap(cat => questionsData[cat] || []);
    if (allQuestions.length === 0) {
      setCurrentQuestion({ id: 0, text: "Brak pytań w wybranych kategoriach." });
      return;
    }
    if (remainingUsers.length === 0) return;

    const userIndex = Math.floor(Math.random() * remainingUsers.length);
    const user = remainingUsers[userIndex];
    setRemainingUsers(prev => prev.filter((_, i) => i !== userIndex));
    setCurrentUser(user);

    const questionIndex = Math.floor(Math.random() * allQuestions.length);
    setCurrentQuestion(allQuestions[questionIndex]);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 sm:p-6">

      {/* Kontener contentu o stałej szerokości */}
      <div className="flex flex-col gap-10 w-[360px] sm:w-[400px] md:w-[450px]">

        {/* Nagłówek */}
        <section className="text-center flex flex-col items-center gap-3">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Losowanie pytań
          </h1>
          <p className="text-base sm:text-lg text-text-muted text-center">
            Runda: <span className="text-accent text-lg sm:text-xl md:text-2xl">{round}</span>
            {currentUser && ` — Aktualny gracz: ${currentUser}`}
          </p>
        </section>

        {/* Pytanie */}
        <section className="card flex flex-col gap-4 text-center">
          <div className="min-h-[160px] flex items-center justify-center p-3 sm:p-4">
            {currentQuestion ? (
              <p className="text-base sm:text-lg md:text-xl text-text">{currentQuestion.text}</p>
            ) : (
              <p className="text-sm sm:text-base text-text-muted">Kliknij przycisk, aby wylosować pytanie</p>
            )}
          </div>

          <button
            className="primary-btn mt-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            onClick={getRandomQuestion}
            disabled={users.length === 0}
          >
            Losuj pytanie
          </button>

          {users.length === 0 && (
            <p className="text-red-500 mt-2 text-sm sm:text-base text-center">
              Brak użytkowników! Dodaj graczy na odpowiedniej podstronie.
            </p>
          )}
        </section>

      </div>
    </div>
  );
}
