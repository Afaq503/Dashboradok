import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const BreadCrums = ({ isDarkMode }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`rounded-lg p-3 m-4 max-w-full flex items-center flex-wrap ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}>
      <ul className="flex items-center flex-wrap">
        <li className="inline-flex items-center">
          <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`}>
            <IoHome />
          </a>
          <span className={`mx-2 h-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} font-medium`}>/</span>
        </li>
        <li className="inline-flex items-center">
          <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`}>Page 1</a>
          <span className={`mx-2 h-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} font-medium`}>/</span>
        </li>
        <li className="inline-flex items-center">
          <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`}>Page 2</a>
          <span className={`mx-2 h-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} font-medium`}>/</span>
        </li>
        <li className="inline-flex items-center">
          <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`}>Page 3</a>
        </li>
      </ul>
      <div className="flex items-center ml-auto">
        <div className="relative mr-4">
          <button
            onClick={toggleDropdown}
            className={`flex items-center border px-2 py-1 rounded-md focus:outline-none ${isDarkMode ? 'text-gray-300 border-gray-600 hover:text-gray-100' : 'text-gray-600 border-gray-400 hover:text-gray-800'}`}
          >
            {isDropdownOpen ? (
              <>
                <FaCaretUp size={16} className="mr-1" />
                <span className="mr-1">Settings</span>
              </>
            ) : (
              <>
                <FaCaretDown size={16} className="mr-1" />
                <span className="mr-1">Settings</span>
              </>
            )}
          </button>
          {isDropdownOpen && (
            <div className={`absolute mt-2 py-2 w-30 rounded-md shadow-md z-10 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
              <a href="#" className={`block px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>Settings</a>
              <a href="#" className={`block px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>Preferences</a>
              <a href="#" className={`block px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>Help</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrums;
