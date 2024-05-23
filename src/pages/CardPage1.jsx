import React from 'react';
import Card1 from '../components/Card1';

const CardPage1 = ({ isDarkMode }) => {
  return (
    <div className={`bg-gray-900 text-white ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto py-8 flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <Card1 isDarkMode={isDarkMode} />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <Card1 isDarkMode={isDarkMode} />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <Card1 isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default CardPage1;
