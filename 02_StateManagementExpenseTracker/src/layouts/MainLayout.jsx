import React from 'react'
import { Outlet } from "react-router-dom"
import SideBarMenu from '../components/sideBar/SideBarMenu'

export const MainLayout = () => {
    return (
        <div className='p-4 grid  grid-cols-[240px_1fr] gap-4 text-stone-950 bg-stone-100'>
            <div className=''>

                    <SideBarMenu />
               
            </div>
            <div>
                <main>

                    <Outlet />
                </main>
            </div>

        </div>
    )
}
