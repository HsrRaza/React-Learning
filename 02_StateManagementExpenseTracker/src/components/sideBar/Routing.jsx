/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome ,FiDollarSign} from "react-icons/fi"
import { MdShoppingCartCheckout } from "react-icons/md";


const Routing = () => {

  const routes = [
    { path: "/", title: "Dashboard", Icon:  FiHome  },
    { path: "/income", title: "Income", Icon:FiDollarSign  },
    { path: "/expense", title: "Expense", Icon: MdShoppingCartCheckout }
  ]

  return (
    <div>
      {
        routes.map(({ path, title, Icon }) => (
          <NavLink key={path} to={path}
            className={({ isActive }) => (
              `flex items-center justify-start gap-2 w-full rounded px-2 py-1.5  text-sm transition-[box-shadow,background-color, color]${isActive ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}`
            )}
          >
            {({ isActive }) => (

              <>

                <Icon className={isActive ? "text-violet-500" : ""} />
                <span>{title}</span>

              </>

            )}

          </NavLink>
        ))
      }
    </div>
  )
}

export default Routing