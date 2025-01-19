import React from 'react'
interface IPerson {
    author: string
    city: string
}

const Person: React.FC<IPerson> = (props) => {
    const { author, city } = props

    return (
        <div className={"person"}>
            <img src="" alt=""/>
            <h2 className={"h2 white"}>{author}</h2>
            <p className={"int-2 white"}>{city}</p>
        </div>
    )
}

export default Person