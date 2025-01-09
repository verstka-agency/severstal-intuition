import React from 'react'
import { useNavigate } from "react-router-dom"
import './Avatar.scss'

const Avatar = () => {
    const navigate = useNavigate()

    return (
        <div className={"avatar"}
             onClick={() => navigate("avatar")}
        >
            <div className="avatar__icon">
                <img src="/inputs/avatar.svg" alt=""/>
            </div>
            <div className={"avatar__action"}>
                <span className={"h3 blue"}>Изменить аватар</span>
                <img src="/inputs/arrow-right.svg" alt=""/>
            </div>
        </div>
    )
}

export default Avatar