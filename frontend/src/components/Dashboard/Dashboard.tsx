import React from 'react'
import './Dashboard.scss'

const Dashboard = () => {
    const dashboardData = [
        {
            id: "41241",
            name: "Иван Иванов",
            score: 13
        }
    ]

    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>БАЛЛЫ</th>
            </tr>
            </thead>
            <tbody>
            {dashboardData.map((item, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default Dashboard