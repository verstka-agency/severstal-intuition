import React from 'react'
import './GameIndicators.scss'
import Life from "src/components/Life/Life"
import Timer from "src/components/Timer/Timer"
import Money from "src/components/Money/Money"

const GameIndicators = () => {
    return (
        <div className={"game-indicators"}>
            <Timer/>
            <Life/>
            <Money/>
        </div>
    )
}

export default GameIndicators