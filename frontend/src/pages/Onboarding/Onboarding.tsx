import React, { useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './Onboarding.scss'
import Button from "../../components/Button/Button"
import { useGetOnboardingSlides } from "src/hooks"
import Paper from "src/components/Paper/Paper"
import { ButtonVariantsEnum, CornersPosition } from "src/types"
import Corners from "src/components/Corners/Corners"
import Logo from "src/components/Logo/Logo"

const Onboarding = () => {
    const [currentBar, setCurrentBar] = useState<number>(0)
    const { currentSlides, amount } = useGetOnboardingSlides()

    return (
        <Paper>
            <Logo/>
            <Corners position={CornersPosition.OUTSIDE}/>
            <div className={"onboarding"}>
                <ProgressBar
                    className={"onboarding__progress-bar"}
                    currentBar={currentBar}
                    barsAmount={amount}
                />
                <div className={"onboarding__text"}>
                    <h3>{currentSlides[currentBar].heading}</h3>
                    <p className={"int-3"}>{currentSlides[currentBar].text}</p>
                </div>
                <Button
                    className={"onboarding__button"}
                    variant={ButtonVariantsEnum.PRIMARY_NEXT}
                    onClick={() => {
                        if (currentBar <= amount) {
                            setCurrentBar((prev) => prev + 1)
                        } else {
                            // navigate()
                        }
                    }}
                >
                    {currentSlides[currentBar].buttonText}
                </Button>
                <div className={"onboarding__image"}></div>
            </div>
        </Paper>
    )
}

export default Onboarding