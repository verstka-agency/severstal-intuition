import React from 'react'
import './Logo.scss'

const Logo = () => {
    return (
        <picture className={"logo"}>
            <source srcSet="/logo/logo-desktop.svg" media="(min-width: 1280px)"/>
            <img src="/logo/logo-mobile.svg" alt=""/>
        </picture>
    )
}

export default Logo