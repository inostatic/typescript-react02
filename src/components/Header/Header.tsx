import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

interface HeaderProps {
    pathname: string | null
}


export const Header: React.FC<HeaderProps> = ({pathname}) => {
    const [activeLink, setActiveLink] = useState(pathname)

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