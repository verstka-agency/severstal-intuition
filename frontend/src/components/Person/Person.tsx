import React from 'react'
import './Person.scss'
import Corners from "src/components/Corners/Corners"
import { CornersPosition } from "src/types"
import MediaQuery from 'react-responsive'

interface IPerson {
    author: string
    city: string
    avatar: string
}

const Person: React.FC<IPerson> = (props) => {
    const { author, city, avatar } = props

    return (
        <div className={"person"}>
            <MediaQuery maxWidth={1279.98}>
                <Corners position={CornersPosition.INSIDE}/>
            </MediaQuery>
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