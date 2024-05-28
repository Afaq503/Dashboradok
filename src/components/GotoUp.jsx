import React from "react";
import { FiArrowUp } from "react-icons/fi";

const GotoUp = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
      >
        <FiArrowUp id="arrow" size={24} />
      </button>
    </div>
  );
};

export default GotoUp;
