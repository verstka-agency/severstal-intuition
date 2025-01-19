import React from 'react'
import './Game.scss'
import Person from "src/components/Person/Person"
import GameIndicators from "src/components/GameIndicators/GameIndicators"
import Quiz from "src/components/Quiz/Quiz"
import { useProfile } from "src/hooks"
import { useQuery } from "@tanstack/react-query"
import { apiProvider } from "src/api"

const Game = () => {
    const { profile } = useProfile()

    const { data: question, isLoading: isQuestionLoading } = useQuery({
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
        }
    })

    if (isQuestionLoading) {
        return null
    }

    return (
        <div className={"game"}>
            <div className={"game__container"}>
                <h3 className={"h3 white"}>
                    Вопросы {profile?.game.currentQuestion}/10
                </h3>
                <Person author={question.author} city={question.city}/>
                <GameIndicators/>
                <Quiz answers={question.answers} question={question.question}/>
            </div>
        </div>
    )
}

export default Game