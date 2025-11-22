import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={goBack}
      className="
        fixed top-4 left-4 z-50
        px-3 py-2
        text-white
        rounded-xl
        bg-transparent
        backdrop-blur-sm
        hover:bg-white/10
        transition
      "
    >
      ←
    </button>
  );
}
