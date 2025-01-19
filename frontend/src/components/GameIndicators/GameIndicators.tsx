import React from 'react'
import './GameIndicators.scss'
import Timer from "src/components/Timer/Timer"
import Money from "src/components/Money/Money"

const GameIndicators = () => {
    return (
        <div className={"game-indicators"}>
            <Timer/>
            <Money/>
        </div>
    )
}

export default GameIndicators