import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavbar = () => {
  return (
    <nav className='side-navbar-container'>
        <ul>
            <li>
                <NavLink to="/users/">Users</NavLink>
            </li>
            {/* <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li> */}
        </ul>

    </nav>
  )
}

export default SideNavbar