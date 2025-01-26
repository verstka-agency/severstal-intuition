import React from 'react'
import './Person.scss'

interface IPerson {
    author: string
    city: string
    avatar: string
}

const Person: React.FC<IPerson> = (props) => {
    const { author, city, avatar } = props

    return (
        <div className={"person"}>
            <img
                src={`/game/authors/${avatar}`}
                alt=""
                className={"person__avatar"}
            />
            <h2 className={"h2 white person__author"}>{author}</h2>
            <p className={"int-2 white"}>{city}</p>
        </div>
    )
}

export default Person