import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-indigo-900 shadow-lg">
        <nav className="px-6 py-2">
            <div className="flex justify-center items-center max-w-screen-xl mx-auto">
                <ul className="flex space-x-8 text-sm font-medium text-gray-300 list-none">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `py-2 px-4 text-lg rounded-lg transition-colors duration-300 hover:bg-indigo-800 ${isActive ? "text-amber-300 bg-indigo-700" : "text-gray-300 hover:text-amber-400"} no-underline`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tool"
                            className={({ isActive }) =>
                                `py-2 px-4 text-lg rounded-lg transition-colors duration-300 hover:bg-indigo-800 ${isActive ? "text-amber-300 bg-indigo-700" : "text-gray-300 hover:text-amber-400"} no-underline`
                            }
                        >
                            Tools
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/guide"
                            className={({ isActive }) =>
                                `py-2 px-4 text-lg rounded-lg transition-colors duration-300 hover:bg-indigo-800 ${isActive ? "text-amber-300 bg-indigo-700" : "text-gray-300 hover:text-amber-400"} no-underline`
                            }
                        >
                            User Guide
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header
