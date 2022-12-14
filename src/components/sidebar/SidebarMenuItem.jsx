import React from "react";
import { NavLink } from "react-router-dom";

const SidebarMenuItem = ({ icon, text, link }) => {
  return (
    <NavLink to={link} className="sidebar-menu-item">
      {/* <img className="sidebar-menu-icon" src={icon} alt="menu icon" /> */}
      <div className="content">
        <span className="icon">{icon}</span>
        {text}
      </div>
    </NavLink>
  );
};

export default SidebarMenuItem;
