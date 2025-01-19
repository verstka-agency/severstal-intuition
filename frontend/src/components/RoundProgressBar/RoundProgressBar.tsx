import React from 'react'
import { useProfile } from "src/hooks"
import './RoundProgressBar.scss'

const RoundProgressBar = () => {
    const { profile, isProfileLoading } = useProfile()

    if (profile?.game.currentRound === 1) {
        return null
    }

    return (
        <div className={"round-progress-bar"}>
            <h4 className={"h4 blue round-progress-bar__heading"}>
                Раунды
            </h4>
            <div className={"round-progress-bar__line round-progress-bar__line--big"}></div>
            {
                Array(5).fill(null).map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div
                                className={`round-progress-bar__dot round-progress-bar__dot--${index + 1 < (!!profile && profile?.game.currentRound) ? "active" : "not-active"}`}
                            ></div>
                            {
                                index < 4 ?
                                    <div className={"round-progress-bar__line"}></div>
                                    : null
                            }
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default RoundProgressBar