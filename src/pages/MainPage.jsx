import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardPage from "./CardPage";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleDarkMode } from "../redux/Store";
import BreadCrums from "../components/BreadCrums";
import CardPage1 from "./CardPage1";
import Table from "./Table";
import { FiArrowUp } from "react-icons/fi";

function MainPage() {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div
      className={`flex h-screen w-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Sidebar isOpen={isSidebarOpen} isDarkMode={isDarkMode} />
      <div className="flex flex-col flex-1">
        <Header
          isOpen={isSidebarOpen}
          toggleSidebar={handleToggleSidebar}
          isDarkMode={isDarkMode}
          toggleDarkMode={handleToggleDarkMode}
        />
        <div className="flex-1 overflow-y-auto p-6">
          <BreadCrums isDarkMode={isDarkMode} />
          <CardPage isDarkMode={isDarkMode} />
          <CardPage1 isDarkMode={isDarkMode} />
          <Table isDarkMode={isDarkMode} />
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
        >
          <FiArrowUp id="arrow" size={24} />
        </button>
      </div>
    </div>
  );
}

export default MainPage;
