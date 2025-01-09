import React from 'react'
import { useGame } from "src/hooks"

const Person = () => {
    const { person } = useGame()

    return (
        <div className={"person"}>
            <img src="" alt=""/>
            <h2 className={"h2 white"}>{person.name}</h2>
            <p className={"int-2 white"}>{person.city}</p>
        </div>
    )
}

export default Person