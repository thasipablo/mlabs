import React from "react";
import SidebarMenus from "./SidebarMenus";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarMenus />
      <button className="quit-btn">
        <span>Quiter</span>
      </button>
    </div>
  );
};

export default Sidebar;
