import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Header: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <div className="header">
      <NavLink
        to="/"
        className={`header__item ${pathname === '/' ? 'active' : ''}`}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={`header__item ${pathname === '/about' ? 'active' : ''}`}
      >
        About
      </NavLink>
    </div>
  )
}
