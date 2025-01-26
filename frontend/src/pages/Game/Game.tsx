import React from 'react'
import './Game.scss'
import Person from "src/components/Person/Person"
import GameIndicators from "src/components/GameIndicators/GameIndicators"
import Quiz from "src/components/Quiz/Quiz"
import { useProfile } from "src/hooks"
import { useQuery } from "@tanstack/react-query"
import { apiProvider } from "src/api"
import { Navigate } from 'react-router-dom'

const Game = () => {
    const { profile } = useProfile()

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
        }
    })

    if (isQuestionLoading) {
        return null
    }

    if (question === undefined) {
        return <Navigate to={"/"}/>
    }

    return (
        <div className={"game"}>
            <div className={"game__container"}>
                <h3 className={"h3 white game__question"}>
                    Вопросы {profile?.game.currentQuestion}/10
                </h3>
                <Person avatar={question.avatar} author={question.author} city={question.city}/>
                <GameIndicators/>
                <Quiz answers={question.answers} question={question.question}/>
            </div>
        </div>
    )
}

export default Game