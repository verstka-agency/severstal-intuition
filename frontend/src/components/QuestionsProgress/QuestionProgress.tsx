import React from 'react'
import './QuestionProgress.scss'
import { useGame } from "src/hooks"

const QuestionProgress = () => {
    const { currentQuestion } = useGame()

    return (
        <h3 className={"h3 white"}>
            Вопросы {currentQuestion}/10
        </h3>
    )
}

export default QuestionProgress