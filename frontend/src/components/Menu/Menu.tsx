import React, { useEffect, useState } from 'react'
import './Menu.scss'
import { NavLink, useLocation } from "react-router-dom"
import { getStyles } from "src/utils/styles"
import { useMediaQuery } from "src/hooks"

const Menu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const location = useLocation()

    enum MenuVariantsEnum {
        "DARK" = "dark",
        "LIGHT" = "light"
    }

    const { isMobile } = useMediaQuery()

    const [menuVariant, setMenuVariant] = useState<MenuVariantsEnum>(MenuVariantsEnum.LIGHT)

    const navStyles = getStyles("menu", [
        {
            decision: isOpen,
            name: "active"
        },
    ])

    useEffect(() => {
            switch (location.pathname) {
                case "/profile":
                case "/profile/":
                case "/about":
                case "/about/":

                    setMenuVariant(isMobile ? MenuVariantsEnum.DARK : MenuVariantsEnum.LIGHT)
                    break
                case "/":
                    setMenuVariant(MenuVariantsEnum.DARK)
                    break
                case "/round-preview":
                case "/round-preview/":
                    setMenuVariant(MenuVariantsEnum.LIGHT)
                    break
                case "/memory":
                case "/memory/":
                case "/postcards":
                case "/postcards/":
                case "/success":
                case "/success/":
                case "/profile/avatar":
                case "/profile/avatar/":
                case "/authorization":
                case "/authorization/":
                case "/authorization/email-otp":
                case "/authorization/email-otp/":
                case "/authorization/verification":
                case "/authorization/verification/":
                    break
            }
        }, [location, setMenuVariant, MenuVariantsEnum, isMobile]
    )

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
                    <img src={`/menu/menu-${menuVariant}.svg`} alt=""/>
                </picture>
            }
        </nav>
    )
}

export default Menu