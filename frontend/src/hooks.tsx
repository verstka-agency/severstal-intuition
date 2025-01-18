import { AuthenticationContext } from "src/contexts/AuthenticationContext"
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { NetworkContext } from "src/contexts/NetworkContext"
import { OnboardingSlide } from "src/types"
import { slides } from "src/pages/Onboarding/constants"
import { useLocation } from "react-router-dom"
import { GameContext } from "src/contexts/GameContext"
import { CitiesContext } from "src/contexts/CitiesContext"
import { clearInterval } from "timers"
import { useMutation, useQuery } from "@tanstack/react-query"
import { apiProvider } from "src/api"
import { FormikValues } from "formik"
import { ProfileContext } from "src/contexts/ProfileContext"

export const useAuthentication = () => {
    const context = useContext(AuthenticationContext)
    if (!context) {
        throw new Error("You should use hook in AuthenticationContext.Provider descendant")
    }
    return context
}

export const useNetwork = () => {
    const context = useContext(NetworkContext)
    if (!context) {
        throw new Error("You should use hook in NetworkContext.Provider descendant")
    }
    return context
}

export const useGame = () => {
    const context = useContext(GameContext)
    if (!context) {
        throw new Error("You should use hook in GameContext.Provider descendant")
    }
    return context
}

export const useCities = () => {
    const context = useContext(CitiesContext)
    if (!context) {
        throw new Error("You should use hook in CitiesContext.Provider descendant")
    }
    return context
}

export const useProfile = () => {
    const context = useContext(ProfileContext)
    if (!context) {
        throw new Error("You should use hook in ProfileContext.Provider descendant")
    }
    return context
}

export const useMediaQuery = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const resizeHandler = () => {
            const isMobile = window.innerWidth < 1280
            setIsMobile(isMobile)
        }
        window.addEventListener("resize", resizeHandler)

        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [])

    return {
        isMobile: isMobile
    }
}

export const useGetOnboardingSlides = (): {
    currentSlides: OnboardingSlide[],
    amount: number,
    currentBar: number,
    setCurrentBar: Dispatch<SetStateAction<number>>
} => {
    const [currentBar, setCurrentBar] = useState<number>(0)
    const { isAuthenticated } = useAuthentication()
    const { profile } = useProfile()
    const location = useLocation()

    let currentSlides: OnboardingSlide[] = []

    if (!isAuthenticated) {
        currentSlides = slides.filter((_, index) => index < 3)
    }

    if (profile?.currentRound === 1) {
        currentSlides = slides.filter((_, index) => index > 2)
    }

    if (location.pathname === "about") {
        currentSlides = slides
    }

    return {
        currentSlides: currentSlides,
        amount: currentSlides.length,
        currentBar: currentBar,
        setCurrentBar: setCurrentBar
    }
}