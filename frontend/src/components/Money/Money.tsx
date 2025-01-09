import React from 'react'
import './Money.scss'
import { useGame } from "src/hooks"

const Money = () => {
    const { money } = useGame()

    return (
        <div className={"money"}>
            <div className={"money__container"}>
                <img src="/game/money.svg" alt=""/>
                <span className={"int-1"}>{money}</span>
            </div>
        </div>
    )
}

export default Money