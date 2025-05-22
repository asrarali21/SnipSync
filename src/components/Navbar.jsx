import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            SnipSync
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/snip" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
               Notes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar