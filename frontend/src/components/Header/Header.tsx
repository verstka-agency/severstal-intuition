import React from 'react'
import './Header.scss'
import Menu from "src/components/Menu/Menu"
import { useProfile } from "src/hooks"

const Header = () => {
    const { profile } = useProfile()

    return (
        <header className="header">
            {
                profile?.isGameRulesConfirmed && profile?.isPrivacyPolicyConfirmed
                    ?
                    <Menu/>
                    :
                    null
            }
        </header>
    )
}

export default Header