import React, { useEffect } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './Onboarding.scss'
import Button from "../../components/Button/Button"
import { useGetOnboardingSlides, useHeader } from "src/hooks"
import Paper from "src/components/Paper/Paper"
import { ButtonVariantsEnum, CornersPosition } from "src/types"
import Corners from "src/components/Corners/Corners"
import Logo from "src/components/Logo/Logo"
import { useNavigate } from "react-router-dom"
import MediaQuery from "react-responsive"

const Onboarding = () => {
    const { currentSlides, amount, currentBar, setCurrentBar } = useGetOnboardingSlides()
    const { setShow } = useHeader()
    const navigate = useNavigate()

    useEffect(() => {
        if (amount === 2) {
            setShow(true)
        }
    }, [amount])

    console.table([
        ["currentSlides", currentSlides],
        ["amount", amount],
        ["currentBar", currentBar],
    ])

    return (
        <Paper>
            <MediaQuery minWidth={1280}>
                <Logo/>
                <Corners position={CornersPosition.OUTSIDE}/>
            </MediaQuery>
            <div className={"onboarding"}>
                <ProgressBar
                    className={"onboarding__progress-bar"}
                    currentBar={currentBar}
                    barsAmount={amount}
                />
                <div className={"onboarding__text"}>
                    <MediaQuery maxWidth={1279}>
                        <Logo/>
                    </MediaQuery>
                    {
                        amount === 5 && currentBar > 0 ?
                            <div
                                className={"onboarding__back int-3 blue"}
                                onClick={() => {
                                    if (currentBar > 0) {
                                        setCurrentBar((prev) => prev - 1)
                                    }
                                }}
                            >
                                {"< Назад"}
                            </div>
                            : null
                    }
                    <h3 className={"h3 blue"}>{currentSlides?.[currentBar]?.heading}</h3>
                    <p className={"int-3 blue"}>{currentSlides?.[currentBar]?.text}</p>
                </div>
                <img
                    src={`/onboarding/${currentSlides?.[currentBar]?.image}`}
                    alt=""
                    className={"onboarding__image"}
                />
                <Button
                    className={"onboarding__button"}
                    variant={ButtonVariantsEnum.PRIMARY_NEXT}
                    onClick={() => {

                        if (currentBar < amount - 1) {
                            setCurrentBar((prev) => prev + 1)
                        } else {
                            if (amount === 2) {
                                navigate("/round-preview")
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

            </div>
        </Paper>
    )
}

export default Onboarding