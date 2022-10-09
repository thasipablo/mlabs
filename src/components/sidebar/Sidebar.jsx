import React from 'react'
import SidebarMenus from './SidebarMenus'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarMenus />
      <button className='quit-btn'>Quiter</button>
    </div>
  )
}

export default Sidebar