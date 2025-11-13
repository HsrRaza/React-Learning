import React from 'react'
import { NavLink } from 'react-router-dom'

const Routing = () => {

     const routes = [
        { path: "/", title: "Dashboard",  },
        { path: "/add", title: "Add Todo",  },
        { path: "/delete", title: "Delete", },
        
    ]
    

  return (
    <div className='space-y-1'>
         {
                
                routes.map(({ path, title,  }) => 
                    (

                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) => (
                                `flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,bachground-color,color]${isActive ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}`
                    )}
                        >
                        

                              
                                    <span>{title}</span>
                                
                        </NavLink>
                    )
                )
            }
        
    </div>
  )
}

export default Routing