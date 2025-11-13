import React from 'react'
import { Outlet } from "react-router-dom"
import SideMenu from '../components/SideBar/SideMenu'

export const MainLayouts = () => {
  return (
    <div className='p-4 grid grid-cols-[240px_1fr] gap-4  text-stone-950 bg-stone-100 '>
      
      {/* Sidebar */}
      <aside className=' '>
        <SideMenu/>
      </aside>

      {/* Main Content */}
      <main className=' '>
        <Outlet/>
      </main>

    </div>
  )
}
