import React from 'react'
import './Life.scss'
import { useGame } from "src/hooks"

const Life = () => {
    const { lives } = useGame()

    return (
        <div className={"life"}>
            <div className={"money__container"}>
                <img src="/game/health.svg" alt=""/>
                <span className={"int-1"}>{lives}</span>
            </div>
        </div>
    )
}

export default Life