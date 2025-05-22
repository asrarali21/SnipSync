import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="w-full flex items-center justify-evenly px-8 py-4 bg-white shadow-md rounded-b-2xl mb-8">
      <NavLink
        to="/"
        className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        Home
      </NavLink>
      <NavLink
        to="/snip"
        className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        Notes
      </NavLink>
    </div>
  )
}

export default Navbar