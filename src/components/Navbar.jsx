import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-evenly'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/snip'>Notes</NavLink>
    </div>
  )
}

export default Navbar