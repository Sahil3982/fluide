import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faListAlt,
  faCalendarAlt,
  faBuilding,
  faUserCog,
  faQuestionCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col p-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center text-white font-bold text-lg">
          Fd
        </div>
        <span className="text-2xl font-semibold text-gray-800">Fluidesigns</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-md space-x-3 text-base font-medium ${
              isActive ? "bg-[#0F172A] text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-md space-x-3 text-base font-medium ${
              isActive ? "bg-[#0F172A] text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <FontAwesomeIcon icon={faListAlt} />
          <span>Attendance</span>
        </NavLink>
        <NavLink
          to="/leave"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-md space-x-3 text-base font-medium ${
              isActive ? "bg-[#0F172A] text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span>Leave</span>
        </NavLink>
        <NavLink
          to="/company-details"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-md space-x-3 text-base font-medium ${
              isActive ? "bg-[#0F172A] text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <FontAwesomeIcon icon={faBuilding} />
          <span>Company Details</span>
        </NavLink>
        <NavLink
          to="/profile-settings"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-md space-x-3 text-base font-medium ${
              isActive ? "bg-[#0F172A] text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <FontAwesomeIcon icon={faUserCog} />
          <span>Profile & Settings</span>
        </NavLink>
      </nav>

      {/* Footer Links */}
      <div className="space-y-4 mt-6">
        <NavLink
          to="/help"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-md space-x-3 text-base font-medium ${
              isActive ? "bg-[#0F172A] text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>Help</span>
        </NavLink>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-md space-x-3 text-base font-medium ${
              isActive ? "bg-[#0F172A] text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
