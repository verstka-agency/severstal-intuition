import React from 'react'
import './Game.scss'
import QuestionProgress from "src/components/QuestionsProgress/QuestionProgress"
import Person from "src/components/Person/Person"
import GameIndicators from "src/components/GameIndicators/GameIndicators"
import Quiz from "src/components/Quiz/Quiz"

const Game = () => {

    return (
        <div className={"game"}>
            <div className={"game__container"}>
                <QuestionProgress/>
                <Person/>
                <GameIndicators/>
                <Quiz/>
            </div>
        </div>
    )
}

export default Game