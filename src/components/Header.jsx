import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaMoon,
  FaSun,
  FaTh,
  FaBell,
} from "react-icons/fa";

const Header = ({  toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex items-center space-x-4">
        <button
          className="text-current p-2 rounded-md focus:outline-none hover:bg-gray-700 transition-colors"
          onClick={toggleSidebar}
        >
          <FaBars size={20} />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        
        {isSearchOpen ?
        (
            <button
          className="text-current p-2 rounded-md focus:outline-none hover:bg-gray-700 transition-colors"
          onClick={handleSearchToggle}
        >
          <FaSearch size={20} />
        </button>
        )
        
        :(
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className={`pl-8 pr-4 py-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} focus:outline-none`}
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4 focus:outline-none"
              onClick={handleSearchToggle}
            >
              <FaSearch size={20} />
            </button>
          </div>
        )}
        <button
          className="text-current p-2 rounded-md focus:outline-none hover:bg-gray-700 transition-colors"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <button className="text-current p-2 rounded-md focus:outline-none hover:bg-gray-700 transition-colors">
          <FaTh size={20} />
        </button>
        <div className="relative">
          <button className="text-current p-2 rounded-md focus:outline-none hover:bg-gray-700 transition-colors">
            <FaBell size={20} />
          </button>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            3
          </span>
        </div>
        <div className="relative">
          <div className="w-10 h-10 bg-slate-400 rounded-full overflow-hidden">
            <img
              src="https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
