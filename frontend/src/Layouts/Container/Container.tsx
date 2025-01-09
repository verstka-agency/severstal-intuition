import React from 'react'
import './Container.scss'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Container: React.FC<ContainerProps> = (props) => {
    const { children } = props

    return (
        <div className={"container"}>
            <div className={"container__inner"}>
                {children}
            </div>
        </div>
    )
}

export default Container