import React, { useCallback, useEffect, useState } from 'react'
import './Game.scss'
import Person from "src/components/Person/Person"
import GameIndicators from "src/components/GameIndicators/GameIndicators"
import Quiz from "src/components/Quiz/Quiz"
import { useProfile } from "src/hooks"
import { useQuery } from "@tanstack/react-query"
import { apiProvider } from "src/api"
import { Navigate, useNavigate } from 'react-router-dom'
import Button from "src/components/Button/Button"
import { ButtonVariantsEnum } from "src/types"

const Game = () => {
    const { profile } = useProfile()
    const [showInvite, setShowInvite] = useState<boolean>(false)
    const navigate = useNavigate()
    const [randomGame,] = useState(() => {
        const games = ["memory", "postcards"]
        const texts = ["Выиграйте больше баллов с помощью своей железной памяти!", "Время добрых дел! Отправьте открытку любому коллеге и получите +200 баллов"]
        const randomIndex = Math.floor(Math.random() * games.length)
        console.log(randomIndex)
        const randomGame = games[randomIndex]
        const randomText = texts[randomIndex]
        return [randomGame, randomText]
    })

    const { data: question, isLoading: isQuestionLoading, isFetched } = useQuery<{
        id: string
        author: string
        city: string
        question: string
        avatar: string
        answers: Array<{
            id: string
            text: string
        }>
    }>({
        queryKey: ["question", {
            currentQuestion: profile?.game.currentQuestion,
            currentRound: profile?.game.currentRound
        }],
        queryFn: async () => {
            try {
                const response = await apiProvider.get(`/private/game/current-question`)
                return response.data
            } catch (error) {
                console.error(error)
            }
        },
        enabled: !profile?.game.isGamePassed && !!profile
    })

    useEffect(() => {
        if (profile?.game.score === 0 && !profile?.game.isAdditionalGamePassed) {
            setShowInvite(true)
        }
    }, [profile])

    if (isQuestionLoading) {
        return null
    }

    if (question === undefined || profile?.game.isGamePassed) {
        return <Navigate to={"/"}/>
    }

    return (
        <div className={"game"}>
            {!showInvite ?
                <>
                    <img
                        className={"game__img game__img--left"}
                        src={"/game/left.png"}
                        alt=""
                    />
                    <img
                        className={"game__img game__img--right"}
                        src={"/game/right.png"}
                        alt=""
                    />
                </>
                : null}
            <div className={"game__container"}>
                <GameIndicators showTimer={!showInvite} className={"additional-game__indicator"}/>
                {showInvite
                    ?
                    <div className={"additional-game"}>
                        <img
                            className={"additional-game__img"}
                            src="/game/heart.png"
                            alt=""
                        />
                        <h2 className="h2 white additional-game__heading">Получите дополнительные баллы</h2>
                        <p className="int-2 white additional-game__description">
                            {randomGame[1]}
                        </p>
                        <div className={"additional-game__buttons"}>
                            <Button
                                variant={ButtonVariantsEnum.PRIMARY}
                                onClick={() => {
                                    navigate(`/${randomGame[0]}`)
                                }}
                            >
                                Сыграть
                            </Button>
                            <Button
                                variant={ButtonVariantsEnum.SECONDARY}
                                onClick={() => {
                                    setShowInvite(false)
                                }}
                            >
                                Пропустить
                            </Button>
                        </div>
                    </div>
                    :
                    <>
                        <h3 className={"h3 white game__question"}>
                            Вопросы {profile?.game.currentQuestion}/10
                        </h3>
                        <Person avatar={question.avatar} author={question.author} city={question.city}/>
                        <Quiz setShowInvite={setShowInvite} answers={question.answers} question={question.question}/>
                    </>
                }
            </div>
        </div>
    )
}

export default Game