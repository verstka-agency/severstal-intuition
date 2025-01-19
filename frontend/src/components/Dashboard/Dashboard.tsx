import React from 'react'
import './Dashboard.scss'
import { useProfile } from "src/hooks"
import AvatarIcon from "src/components/AvatarIcon/AvatarIcon"
import { AvatarIconSizeEnum } from "src/types"
import DashboardTable from "src/components/DashboardTable/DashboardTable"

const Dashboard = () => {
    const { profile } = useProfile()

    return (
        <div className={"dashboard"}>
            <h3 className={"h3 white dashboard__personal-name"}>{`${profile?.firstName} ${profile?.lastName}`}</h3>
            <div className={"dashboard__personal-stats"}>
                <AvatarIcon size={AvatarIconSizeEnum.SMALL}/>
                <div className={"dashboard__personal-indicator"}>
                    <p className={"int-2 white"}>Место</p>
                    <p className={"int-2 white"}>{profile?.game.position}</p>
                </div>
                <div className={"dashboard__personal-indicator"}>
                    <p className={"int-2 white"}>Раунд</p>
                    <p className={"int-2 white"}>{profile?.game.currentRound}/5</p>
                </div>/
                <div className={"dashboard__personal-indicator"}>
                    <p className={"int-2 white"}>Баллы</p>
                    <p className={"int-2 white"}>{profile?.game.score}</p>
                </div>
            </div>
            <DashboardTable/>
        </div>
    )
}

export default Dashboard