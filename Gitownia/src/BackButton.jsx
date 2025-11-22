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
        w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-transparent
        backdrop-blur-sm
        border border-transparent
        hover:border-accent
        transition-all duration-300
        transform hover:scale-110
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
