import React, { HTMLAttributes } from 'react'
import './GameIndicators.scss'
import Timer from "src/components/Timer/Timer"
import Money from "src/components/Money/Money"

interface GameIndicatorsProps extends React.HTMLAttributes<HTMLDivElement> {
    showTimer?: boolean
    showMoney?: boolean
}

const GameIndicators: React.FC<GameIndicatorsProps> = (props) => {
    const { showTimer = true, showMoney = true, className } = props

    const styles = ["game-indicators", className]

    return (
        <div className={styles.filter(Boolean).join(" ")}>
            {showTimer ?
                <Timer />
                : null}
            {showMoney ?
                <Money />
                : null}
        </div>
    )
}

export default GameIndicators