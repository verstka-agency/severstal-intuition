import React from 'react'
import './Paper.scss'

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Paper: React.FC<PaperProps> = (props) => {
    const { children } = props

    return (
        <div className={"paper"}>{children}</div>
    )
}

export default Paper