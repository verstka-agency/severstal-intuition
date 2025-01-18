import React from 'react'
import './Header.scss'
import Menu from "src/components/Menu/Menu"
import { useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()

    return (
        <header className="header">
            {location.pathname === "/onboarding"
                ? null
                :
                <Menu/>
            }
        </header>
    )
}

export default Header