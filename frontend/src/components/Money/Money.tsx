import React, { useEffect, useState } from 'react'
import './Money.scss'
import { useProfile } from "src/hooks"
import CountUp from "react-countup"

interface MoneyProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Money: React.FC<MoneyProps> = (props) => {
    const { className } = props
    const { profile } = useProfile()
    const [end, setEnd] = useState<number>(profile?.game.score ?? 0)

    const styles = ["money", className]

    return (
        <div className={styles.filter(Boolean).join(" ")}>
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