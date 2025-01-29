import React, { useState } from 'react'
import './Header.scss'
import Menu from "src/components/Menu/Menu"
import { useHeader, useProfile } from "src/hooks"

const Header = () => {
    const { profile } = useProfile()
    const { show, variant } = useHeader()


    return (
        <header className="header">
            {show ?
                profile?.isGameRulesConfirmed
                && profile?.isPrivacyPolicyConfirmed
                    ?
                    <Menu/>
                    :
                    null
                : null}
        </header>
    )
}

export default Header