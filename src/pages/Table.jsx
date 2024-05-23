import React from "react";
import Card2 from "../components/Card2";

const Table = ({ isDarkMode }) => {
  return (
    <div
      className={` container mx-auto py-8 px-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <Card2  isDarkMode={isDarkMode}/>
    </div>
  );
};

export default Table;
