import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const activeLinkClasses = "text-white bg-blue-700 px-3 py-2 rounded-md";
  const defaultLinkClasses = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md";

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold">
          TestPlayground
        </NavLink>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLinkClasses : defaultLinkClasses)}
          >
            Home
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) => (isActive ? activeLinkClasses : defaultLinkClasses)}
          >
            Form
          </NavLink>
          <NavLink
            to="/table"
            className={({ isActive }) => (isActive ? activeLinkClasses : defaultLinkClasses)}
          >
            Table
          </NavLink>
          <NavLink
            to="/context-menu"
            className={({ isActive }) => (isActive ? activeLinkClasses : defaultLinkClasses)}
          >
            Context Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLinkClasses : defaultLinkClasses)}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;