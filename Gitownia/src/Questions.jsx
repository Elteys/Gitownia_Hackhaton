import React from "react";
import Pytania from "./random";

const Losowo = () => {
  // Domyślne kategorie i użytkownicy do losowania
  const categories = ["icebreaker", "wyzwania1"];
  const users = ["Ania", "Bartek", "Kasia"];

  return <Pytania categories={categories} users={users} />;
};

export default Losowo;
