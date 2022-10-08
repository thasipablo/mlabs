import React from 'react'
import { Link } from 'react-router-dom'

const SidebarMenuItem = ({icon, text, link}) => {
  return (
    <div>
      <div className="sidebar-menu-icon">{icon}</div>
      <Link to={link}>{text}</Link>
    </div>
  )
}

export default SidebarMenuItem