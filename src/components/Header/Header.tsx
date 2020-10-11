import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'



export const Header: React.FC = () => {
    const [activeLink, setActiveLink] = useState('/')

    const HandlerLink = (str: string): void => {
        setActiveLink(str)
    }
    return (
        <div className="header">
            <NavLink to="/"
                     className={`header__item ${activeLink === '/' ? 'active': ''}`}
                     onClick={() => HandlerLink('/')}
                     exact
            >Home</NavLink>
            <NavLink to="/about"
                     className={`header__item ${activeLink === '/about' ? 'active': ''}`}
                     onClick={() => HandlerLink('/about')}
            >About</NavLink>
        </div>
    )
}