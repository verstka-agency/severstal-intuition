import React from 'react'
import './Index.scss'
import { useProfile } from "src/hooks"
import { CornersPosition } from "src/types"
import Corners from "src/components/Corners/Corners"
import Button from "src/components/Button/Button"
import { useNavigate } from "react-router-dom"
import SeverstalSlider from "src/components/SeverstalSlider/SeverstalSlider"
import RoundProgressBar from "src/components/RoundProgressBar/RoundProgressBar"
import Dashboard from "src/components/Dashboard/Dashboard"

const Index = () => {
    const { profile } = useProfile()
    const navigate = useNavigate()

    return (
        <div className="index">
            <div className={"index__header"}>
                <Corners position={CornersPosition.INSIDE}/>
                <h2 className={"h2 blue"}>стальная</h2>
                <h1 className={"h1 blue"}>ИНТУИЦИЯ</h1>
                {
                    profile?.game.currentRound === 1 ?
                        <p className={"h3 blue"}>Первый раунд уже ждет тебя!</p>
                        :
                        <p>Вы прошли {profile?.game.currentRound} раунд из 5. Успейте пройти все раунды до X января</p>
                }
            </div>
            <RoundProgressBar/>
            <Button
                onClick={() => {
                    navigate("/onboarding")
                }}
                className={"index__button"}
            >
                Играть
            </Button>
            {
                profile?.game.currentRound === 1 ?
                    <SeverstalSlider/>
                    :
                    <Dashboard/>
            }
            {/* TODO потом вынести отсюда */}
        </div>
    )
}

export default Index