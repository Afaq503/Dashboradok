import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardPage from "./CardPage";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleDarkMode } from "../redux/Store";
import BreadCrums from "../components/BreadCrums";
import CardPage1 from "./CardPage1";
import Table from "./Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcommercePage from "../pages/InerPage/EcommercePage";
import GotoUp from "../components/GotoUp";

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

  return (
    <Router>
      <div
        className={`flex h-screen  ${
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

          <div className="flex-1 p-6 ">
            <BreadCrums isDarkMode={isDarkMode} />
            <div className="overflow-y-auto">
            <Routes>
              <Route path="/ecommerce" element={<EcommercePage />} />
              <Route
                path="/"
                element={
                  <>
                    <CardPage isDarkMode={isDarkMode} />
                    <CardPage1 isDarkMode={isDarkMode} />
                    <Table isDarkMode={isDarkMode} />
                  </>
                }
              />
            </Routes>
            </div>
            <GotoUp />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default MainPage;
