import React, { useState } from 'react'
import './Index.scss'
import { useProfile } from "src/hooks"
import { CornersPosition } from "src/types"
import Corners from "src/components/Corners/Corners"
import Button from "src/components/Button/Button"
import { useNavigate } from "react-router-dom"
import SeverstalSlider from "src/components/SeverstalSlider/SeverstalSlider"
import RoundProgressBar from "src/components/RoundProgressBar/RoundProgressBar"
import Dashboard from "src/components/Dashboard/Dashboard"
import Modal from 'src/components/Modal/Modal'

const Index = () => {
    const { profile } = useProfile()
    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <div className="index">

            <img
                src="/index-left.png"
                alt=""
                className={"index__img index__img--left"}
            />
            <img
                src="/index-right.png"
                alt=""
                className={"index__img index__img--right"}
            />
            <div className={"index__header"}>
                <Corners position={CornersPosition.INSIDE}/>
                <h2 className={"h2 blue"}>стальная</h2>
                <h1 className={"h1 blue"}>ИНТУИЦИЯ</h1>
                {
                    profile?.game.currentRound === 1 ?
                        <p className={"h3 blue "}>Первый раунд уже ждет тебя!</p>
                        :
                        <p className={"h3 blue"}>Вы прошли {profile?.game.currentRound} раунд из 5. Успейте пройти все
                            раунды до X января</p>
                }
            </div>
            <RoundProgressBar/>
            {/*TODO тут надо сделать некий флаг о том, пройдена ли не игра*/}
            <div className={"index__button"}>
                {profile?.game.currentRound === 5 && profile?.game.currentQuestion === 10 ?
                    <>
                        <Button
                            onClick={() => {
                                setIsModalOpen(true)
                            }}
                        >
                            Забрать призы
                        </Button>
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={() => setIsModalOpen(false)}
                        >
                            MODAL
                        </Modal>
                    </>
                    :
                    <Button
                        onClick={() => {
                            if (profile?.game.currentRound === 1 && profile?.game.currentQuestion === 1) {
                                navigate("/onboarding")
                            } else {
                                navigate("/round-preview")
                            }
                        }}
                    >
                        Играть
                    </Button>
                }
            </div>
            {
                profile?.game.currentRound === 1 ?
                    <SeverstalSlider/>
                    :
                    <Dashboard/>
            }
        </div>
    )
}

export default Index