import React, { useEffect, useState } from 'react'
import './Menu.scss'
import { Link, NavLink, useLocation } from "react-router-dom"
import { getStyles } from "src/utils/styles"
import { useProfile } from "src/hooks"

const Menu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const location = useLocation()

    const navStyles = getStyles("menu", [
        {
            decision: isOpen,
            name: "active"
        }
    ])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <nav className={navStyles}>
            {isOpen
                ?
                <div className={"menu__container"}>
                    <picture
                        onClick={() => setIsOpen(false)}
                    >
                        {/*<source srcSet={"/menu/cross-desktop.svg"} media={"(min-width: 1280px)"}/>*/}
                        <img src="/menu/cross-desktop.svg" alt=""/>
                    </picture>
                    <ul className={"menu__list"}>
                        <li>
                            <NavLink
                                className={(props) => {
                                    const linkStyles = getStyles("menu__link",
                                        [{
                                            decision: props.isActive,
                                            name: "active"
                                        }])
                                    return linkStyles
                                }}
                                to={"/"}
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(props) => {
                                    const linkStyles = getStyles("menu__link",
                                        [{
                                            decision: props.isActive,
                                            name: "active"
                                        }])
                                    return linkStyles
                                }}
                                to={"profile"}
                            >
                                Личный кабинет
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(props) => {
                                    const linkStyles = getStyles("menu__link",
                                        [{
                                            decision: props.isActive,
                                            name: "active"
                                        }])
                                    return linkStyles
                                }}
                                to={"about"}
                            >
                                Об игре
                            </NavLink>
                        </li>
                        <li className={"int-3 white"}>
                            Возникли вопросы? Напишите нам{" "}
                            <a
                                href="mailto:info@severstal.com"
                                className={"white"}
                            >
                                info@severstal.com
                            </a>
                        </li>
                    </ul>
                </div>

                :
                <picture
                    onClick={() => setIsOpen(true)}
                >
                    <source srcSet={"/menu/menu-desktop.svg"} media={"(min-width: 1280px)"}/>
                    <img src="/menu/menu-mobile.svg" alt=""/>
                </picture>
            }
        </nav>
    )
}

export default Menu