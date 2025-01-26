import React from 'react'
import './GameIndicators.scss'
import Timer from "src/components/Timer/Timer"
import Money from "src/components/Money/Money"

interface GameIndicatorsProps {
    showTimer?: boolean
    showMoney?: boolean
}

const GameIndicators: React.FC<GameIndicatorsProps> = (props) => {
    const { showTimer = true, showMoney = true } = props

    return (
        <div className={"game-indicators"}>
            {showTimer ?
                <Timer/>
                : null}
            {showMoney ?
                <Money/>
                : null}
        </div>
    )
}

export default GameIndicators