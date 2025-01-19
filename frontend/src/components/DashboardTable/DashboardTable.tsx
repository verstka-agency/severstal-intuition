import React from 'react'
import './DashboardTable.scss'
import { useQuery } from "@tanstack/react-query"
import { apiProvider } from "src/api"

const DashboardTable = () => {
    const { data: dashboard, isLoading: isDashboardLoading } = useQuery({
        queryKey: ["dashboard"],
        queryFn: async () => {
            try {
                const response = await apiProvider("/private/dashboard")
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <div className={"dashboard-table"}>
            <div className={"dashboard-table__heading"}>
                <div className={"int-2 white"}>Место</div>
                <div className={"int-2 white"}>Имя</div>
                <div className={"int-2 white"}>Баллы</div>
            </div>
            <div className={"dashboard-table__list"}>
                {dashboard?.map((contestant: any, index: any) => {
                    return (
                        <div className={"dashboard-table__item"} key={index}>
                            <div className={"int-2 blue dashboard-table__position"}>
                                <img src="/dashboard/star.svg" alt=""/>
                                <span className={"dashboard-table__position-number"}>{contestant.position}</span>
                            </div>
                            <div className={"int-2 white"}>
                                    <span>
                                        {contestant.firstName} {contestant.lastName}
                                    </span>
                            </div>
                            <div className={"int-2 white"}>{contestant.money}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DashboardTable