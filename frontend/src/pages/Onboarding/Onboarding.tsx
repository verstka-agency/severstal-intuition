import React from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './Onboarding.scss'
import Button from "../../components/Button/Button"
import { useGetOnboardingSlides } from "src/hooks"
import Paper from "src/components/Paper/Paper"
import { ButtonVariantsEnum, CornersPosition } from "src/types"
import Corners from "src/components/Corners/Corners"
import Logo from "src/components/Logo/Logo"
import { useNavigate } from "react-router-dom"

const Onboarding = () => {
    const { currentSlides, amount, currentBar, setCurrentBar } = useGetOnboardingSlides()
    const navigate = useNavigate()

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
                    <h3>{currentSlides?.[currentBar]?.heading}</h3>
                    <p className={"int-3"}>{currentSlides?.[currentBar]?.text}</p>
                </div>
                <Button
                    className={"onboarding__button"}
                    variant={ButtonVariantsEnum.PRIMARY_NEXT}
                    onClick={() => {

                        if (currentBar < amount - 1) {
                            setCurrentBar((prev) => prev + 1)
                        } else {
                            if (amount === 2) {
                                navigate("/game")
                            } else if (amount === 3) {
                                navigate("/authorization")
                            } else {
                                navigate("/")
                            }
                        }
                    }}
                >
                    {currentBar !== 4 ? "Дальше" : "На главную"}
                </Button>
                <img
                    src={`/onboarding/${currentSlides?.[currentBar]?.image}`}
                    alt=""
                    className={"onboarding__image"}
                />
            </div>
        </Paper>
    )
}

export default Onboarding