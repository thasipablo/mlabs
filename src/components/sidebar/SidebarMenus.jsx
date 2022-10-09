import React, { Fragment } from "react";
import { SidebarMenusData } from "../../data/SidebarMenusData";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenus = () => {
  
  return <div>
    {SidebarMenusData.map((menu) => (
      <SidebarMenuItem text={menu.text} key={menu.text} link={menu.link} icon={menu.icon} />
    ))}
  </div>;
};

export default SidebarMenus;
