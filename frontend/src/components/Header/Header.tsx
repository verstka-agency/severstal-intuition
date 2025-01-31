import React, { useEffect, useState } from 'react'
import './Header.scss'
import Menu from "src/components/Menu/Menu"
import { useGetOnboardingSlides, useHeader, useProfile } from "src/hooks"
import { useLocation } from "react-router-dom"

const Header = () => {
    const { profile } = useProfile()

    const location = useLocation()
    const { amount } = useGetOnboardingSlides()
    const [showHeader, setShowHeader] = useState<boolean>(false)

    useEffect(() => {
        /**
         * Здесь необходимо реализовать логику с отображением шапки на разных страницах
         * Также необходимо учитывать, что бывают разные стили
         * даже внутри одной страницы между мобильной и компьютерной версией
         */
        switch (location.pathname) {
            case "/onboarding":
            case "/onboarding/":
                /**
                 * /onboarding - PRIVATE
                 * Если карточек 2 или 3, то скрывать (amount), если пять - показывать
                 * */
                switch (amount) {
                    case 2:
                    case 3:
                        setShowHeader(false)
                        break
                    default:
                        setShowHeader(true)
                        break
                }
                break
            /**
             * /profile - PRIVATE
             * Не показываем только на первом заполнении профиля
             */
            case "/profile":
            case "/profile/":
                setShowHeader(!!profile?.isGameRulesConfirmed && !!profile?.isPrivacyPolicyConfirmed)
                break
            /**
             * / - PRIVATE
             * Показываем всегда
             *
             * /about - PRIVATE
             * Показываем всегда
             *
             * /round-preview - PRIVATE
             * Показываем всегда
             */
            case "/":
            case "/about":
            case "/about/":
            case "/round-preview":
            case "/round-preview/":
                setShowHeader(true)
                break

            /**
             * /memory - PRIVATE
             * Скрываем всегда
             *
             * /postcards - PRIVATE
             * Скрываем всегда
             *
             * /success - PRIVATE
             * Скрываем всегда
             *
             * /profile/avatar - PRIVATE
             * Скрываем всегда
             *
             * /authorization - PUBLIC
             * Скрываем всегда
             *
             * /authorization/email-otp - PUBLIC
             * Скрываем всегда
             *
             * /authorization/verification - PUBLIC
             * Скрываем всегда
             */
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
                setShowHeader(false)
                break
        }
    }, [location, amount, profile])

    return (
        <header className="header">
            {showHeader ?
                <Menu/>
                : null}
        </header>
    )
}

export default Header