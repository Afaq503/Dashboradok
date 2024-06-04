import React from "react";

const EcommercePage = ({ isOpen, isDarkMode }) => {
  return (
    <div className={`flex flex-col h-screen w-full p-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} ${isOpen ? "open" : ""}`}>
      <h1 className="text-2xl font-bold mb-4">Ecommerce Page</h1>
      <p className="flex-grow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi
        fugit saepe, sunt quod debitis quasi rerum placeat laudantium,
        repudiandae corrupti cupiditate voluptate sequi laborum dolores
        voluptatibus quisquam inventore recusandae?
      </p>
    </div>
  );
};

export default EcommercePage;
