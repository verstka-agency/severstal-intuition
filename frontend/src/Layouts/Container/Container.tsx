import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Container.scss'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Container: React.FC<ContainerProps> = (props) => {
    const { children } = props

    const location = useLocation()

    enum ContainerVariantsEnum {
        DARK = "dark",
        LIGHT = 'light'
    }

    // light, dark
    const [variant, setVariant] = useState<ContainerVariantsEnum>(ContainerVariantsEnum.DARK)

    useEffect(() => {
        /**
         * Здесь необходимо реализовать логику с отображением шапки на разных страницах
         * Также необходимо учитывать, что бывают разные стили
         * даже внутри одной страницы между мобильной и компьютерной версией
         */
        console.log('location.pathname', location.pathname)
        switch (location.pathname) {
            case "/onboarding":
            case "/onboarding/":
            case "/authorization":
            case "/authorization/":
            case "/authorization/email-otp":
            case "/authorization/email-otp/":
            case "/profile":
            case "/profile/":
            case "/profile/avatar":
            case "/profile/avatar/":
            case "/about":
            case "/about/":
            case "/round-preview":
            case "/round-preview/":
            case "/success":
            case "/success/":
                setVariant(ContainerVariantsEnum.DARK)
                break
            case "/":
            case "/memory":
            case "/memory/":
            case "/postcards":
            case "/postcards/":
            case "/authorization/verification":
            case "/authorization/verification/":
                setVariant(ContainerVariantsEnum.LIGHT)
                break
        }

    }, [ContainerVariantsEnum, setVariant, location])

    return (
        <div className={`container container--${variant}`}>
            <div className={"container__inner"}>
                {children}
            </div>
        </div>
    )
}

export default Container