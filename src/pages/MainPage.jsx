import React, { useState, useEffect } from "react";
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
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    if (!isMobileScreen) {
      dispatch(toggleSidebar());
    }
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    function handleResize() {
      setIsMobileScreen(window.innerWidth <= 640); // Adjust the breakpoint as needed
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div
        className={`flex h-full ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {!isMobileScreen && (
          <Sidebar
            isOpen={isSidebarOpen}
            isDarkMode={isDarkMode}
            toggleSidebar={handleToggleSidebar}
          />
        )}
        <div className= {`flex flex-col flex-1  flex-grow  `}>
          <Header
            toggleSidebar={handleToggleSidebar}
            isDarkMode={isDarkMode}
            toggleDarkMode={handleToggleDarkMode}
          />
          <div className={`flex-1 p-6 overflow-auto  ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}>
            <BreadCrums isDarkMode={isDarkMode} />
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
    </Router>
  );
}

export default MainPage;
