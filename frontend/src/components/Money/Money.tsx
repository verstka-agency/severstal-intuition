import React, { useEffect, useState } from 'react'
import './Money.scss'
import { useProfile } from "src/hooks"
import CountUp from "react-countup"

/**
 * TODO при изменении баллов, необходимо сделать анимацию счетчика
 */
const Money = () => {
    const { profile } = useProfile()
    const [end, setEnd] = useState<number>(profile?.game.score ?? 0)

    return (
        <div className={"money"}>
            <div className={"money__container"}>
                <img src="/game/money.svg" alt=""/>
                <CountUp
                    startOnMount={false}
                    end={end}
                    className={"int-1"}
                    duration={2}
                    preserveValue={true}
                />
                {/*<span >{profile?.game.score}</span>*/}
            </div>
        </div>
    )
}

export default Money