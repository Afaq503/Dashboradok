import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaStore,
  FaCog,
  FaRegChartBar,
  FaUser,
  FaEdit,
  FaFileInvoice,
  FaMap,
  FaWrench,
  FaIcons,
  FaTable,
  FaLock,
  FaChevronLeft,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, isDarkMode, toggleSidebar }) => {
  const [submenuOpen, setSubmenuOpen] = useState({});
  const sidebarRef = useRef(null);

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      window.innerWidth <= 768 && // Adjust breakpoint as needed
      isOpen
    ) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="lg:hidden p-2 rounded-md fixed top-4 left-4 z-20 bg-gray-700 text-white"
        onClick={toggleSidebar}
      >
        <FaBars size={20} />
      </button>
      <div
        ref={sidebarRef}
        className={`fixed lg:relative flex flex-col h-full transition-all overflow-y-auto ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64 lg:translate-x-0 lg:w-20"
        } ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
      >
        <div className="flex items-center justify-center py-4">
          <img
            className="h-8 w-8"
            src="https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png"
            alt="Logo"
          />
          {isOpen && (
            <h1 className="text-xl font-bold ml-2 text-purple-800">Fobia</h1>
          )}
        </div>
        <div
          className={`flex flex-col flex-grow ${
            isOpen ? "overflow-y-auto" : "overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <NavItem
              link={"/"}
              icon={FaHome}
              label="Dashboard"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
            <NavItem
              link={"/ecommerce"}
              icon={FaStore}
              label="Ecommerce"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
            <SectionTitle title="UI Elements" isOpen={isOpen} />
            <NavItem
              icon={FaWrench}
              label="Widgets"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
            <NavItem
              icon={FaCog}
              label="Components"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
              onClick={() => toggleSubmenu("components")}
            >
              {isOpen && (
                <FaChevronLeft
                  className={`transform ${
                    submenuOpen["components"] ? "rotate-270" : ""
                  } transition-all`}
                />
              )}
            </NavItem>
            {submenuOpen["components"] && (
              <div className="ml-6 space-y-2">
                <NavItem
                  icon={FaIcons}
                  label="Icons"
                  isOpen={isOpen}
                  isDarkMode={isDarkMode}
                />
                <NavItem
                  icon={FaEdit}
                  label="Forms"
                  isOpen={isOpen}
                  isDarkMode={isDarkMode}
                />
                <NavItem
                  icon={FaTable}
                  label="Tables"
                  isOpen={isOpen}
                  isDarkMode={isDarkMode}
                />
              </div>
            )}
            <SectionTitle title="Forms and Tables" isOpen={isOpen} />
            <NavItem
              icon={FaEdit}
              label="Forms"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
            <NavItem
              icon={FaTable}
              label="Tables"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
            <SectionTitle title="Pages" isOpen={isOpen} />
            <NavItem
              icon={FaLock}
              label="Authentication"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
              onClick={() => toggleSubmenu("Authentication")}
            >
              {isOpen && (
                <FaChevronLeft
                  className={`transform ${
                    submenuOpen["Authentication"] ? "rotate-90" : ""
                  } transition-all`}
                />
              )}
            </NavItem>
            {submenuOpen["Authentication"] && (
              <div className="ml-6 space-y-2">
                <NavItem
                  icon={FaIcons}
                  label="Icons"
                  isOpen={isOpen}
                  isDarkMode={isDarkMode}
                />
                <NavItem
                  icon={FaEdit}
                  label="Forms"
                  isOpen={isOpen}
                  isDarkMode={isDarkMode}
                />
                <NavItem
                  icon={FaTable}
                  label="Tables"
                  isOpen={isOpen}
                  isDarkMode={isDarkMode}
                />
              </div>
            )}
            <NavItem
              icon={FaUser}
              label="User Profile"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
            <NavItem
              icon={FaEdit}
              label="User Edit"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
            <NavItem
              icon={FaFileInvoice}
              label="Invoices"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
            <SectionTitle title="Charts and Maps" isOpen={isOpen} />
            <NavItem
              icon={FaRegChartBar}
              label="Charts"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
            <NavItem
              icon={FaMap}
              label="Maps"
              isOpen={isOpen}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({
  icon: Icon,
  label,
  isOpen,
  isDarkMode,
  children,
  onClick,
  link,
}) => (
  <Link
    to={link || "#"}
    className={`flex items-center justify-between space-x-2 py-2 px-2 rounded-md transition-all ${
      isOpen ? "" : "justify-center"
    } ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
    onClick={onClick}
  >
    <div className={`flex items-center space-x-2`}>
      <Icon
        size={20}
        className={`transition-transform transform hover:scale-110 ${
          isOpen ? "" : `${isDarkMode ? "text-white" : "text-gray-800"}`
        }`}
      />
      {isOpen && <span className="text-sm lg:text-base">{label}</span>}
    </div>
    {children}
  </Link>
);

const SectionTitle = ({ title, isOpen }) => (
  <h3 className={`${isOpen ? "block" : "hidden"} text-gray-400 text-sm lg:text-base`}>
    {title}
  </h3>
);

export default Sidebar;