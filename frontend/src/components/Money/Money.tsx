import React from 'react'
import './Money.scss'
import { useProfile } from "src/hooks"

const Money = () => {
    const { profile } = useProfile()

    return (
        <div className={"money"}>
            <div className={"money__container"}>
                <img src="/game/money.svg" alt=""/>
                <span className={"int-1"}>{profile?.game.score}</span>
            </div>
        </div>
    )
}

export default Money