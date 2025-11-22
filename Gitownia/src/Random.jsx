import React, { useState, useEffect } from "react";
import questionsData from "../Json/questions.json";

export default function Pytania() {
  const savedNames = JSON.parse(localStorage.getItem("names") || "[]");
  const savedCat1 = localStorage.getItem("gameCategoryLevel1");
  const savedCat2 = localStorage.getItem("gameCategoryLevel2");
  const randomizePlayers =
    localStorage.getItem("randomizePlayers") === "true";

  const categories = [savedCat1, savedCat2].filter(Boolean);
  const users = savedNames.length > 0 ? savedNames : ["Ania", "Bartek"];

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [round, setRound] = useState(1);
  const [remainingUsers, setRemainingUsers] = useState([...users]);
  const [currentUser, setCurrentUser] = useState(null);

  const [isSpinning, setIsSpinning] = useState(false);
  const [displayUser, setDisplayUser] = useState(null);

  useEffect(() => {
    if (remainingUsers.length === 0 && users.length > 0) {
      setRemainingUsers([...users]);
      setRound((prev) => prev + 1);
    }
  }, [remainingUsers, users]);

  const getRandomQuestion = () => {
    const allQuestions = categories.flatMap((cat) => questionsData[cat] || []);
    if (allQuestions.length === 0) {
      setCurrentQuestion({
        id: 0,
        text: "Brak pytań w wybranych kategoriach.",
      });
      return;
    }
    if (remainingUsers.length === 0 || users.length === 0) return;

    const userIndex = Math.floor(Math.random() * remainingUsers.length);
    const user = remainingUsers[userIndex];

    const questionIndex = Math.floor(Math.random() * allQuestions.length);
    const question = allQuestions[questionIndex];

    if (!randomizePlayers) {
      setRemainingUsers((prev) => prev.filter((_, i) => i !== userIndex));
      setCurrentUser(user);
      setCurrentQuestion(question);
      return;
    }

    setIsSpinning(true);
    let ticks = 0;
    const maxTicks = 18;
    const spinInterval = setInterval(() => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      setDisplayUser(randomUser);
      ticks += 1;
      if (ticks >= maxTicks) {
        clearInterval(spinInterval);
        setIsSpinning(false);
        setDisplayUser(user);
        setRemainingUsers((prev) => prev.filter((_, i) => i !== userIndex));
        setCurrentUser(user);
        setCurrentQuestion(question);
      }
    }, 80);
  };

  const prettyCategory = (key) => {
    const map = {
      icebreaker: "Icebreaker",
      wyzwania1: "Wyzwania (ruch / akcja)",
      wyzwania2: "Wyzwania (dynamiczne)",
      random: "Losowo",
      deep: "Głębokie",
      prawda_falsz: "Prawda / Fałsz",
      "18plus": "18+",
    };
    return map[key] || key;
  };

  const activeCategories = categories.map(prettyCategory);

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* HERO */}
      <section className="text-center flex flex-col items-center gap-3 sm:gap-4">
        <h1 className="text-3xl sm:text-5xl leading-tight">
          Losowanie pytań
          <br />
          <span className="text-accent text-xl sm:text-2xl">
            runda {round}
          </span>
        </h1>

        <p className="text-text-muted max-w-xl text-sm sm:text-base">
          Kategorie:{" "}
          {activeCategories.length > 0
            ? activeCategories.join(" + ")
            : "brak (wróć i wybierz kategorie)"}
        </p>

        {/* BLOK Z AKTUALNYM GRACZEM – ZAWSZE JEST, IMIĘ SIĘ ZMIENIA */}
        <div className="mt-2 flex flex-col items-center gap-1">
          <p className="text-xs text-text-muted">Aktualny gracz:</p>

          {randomizePlayers ? (
            <div
              className={`px-4 py-2 rounded-full border bg-bg border-accent-soft min-w-[160px] mx-auto ${isSpinning ? "animate-pulse" : ""
                }`}
            >
              <span className="text-accent text-lg font-semibold">
                {displayUser || currentUser || "—"}
              </span>
            </div>
          ) : (
            <div className="px-4 py-2 rounded-full border bg-bg border-border min-w-[160px] mx-auto">
              <span className="text-accent text-lg font-semibold">
                {currentUser || "—"}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* KARTA Z PYTANIEM */}
      <section className="card w-full max-w-3xl mx-auto flex flex-col gap-5 text-center">
        <div className="h-[220px] sm:h-[240px] flex items-center justify-center p-4">
          {currentQuestion ? (
            <p className="text-base sm:text-lg md:text-xl text-text">
              {currentQuestion.text}
            </p>
          ) : (
            <p className="text-sm sm:text-base text-text-muted">
              Kliknij przycisk, aby wylosować pytanie
            </p>
          )}
        </div>

        <div className="flex justify-center pt-2">
          <button
            className="primary-btn px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            onClick={getRandomQuestion}
            disabled={users.length === 0 || isSpinning}
          >
            {isSpinning ? "Losuję..." : "Losuj pytanie"}
          </button>
        </div>
      </section>
    </div>
  );
}
