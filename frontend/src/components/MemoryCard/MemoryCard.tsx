import React from 'react'
import './MemoryCard.scss'
import { getStyles } from "../../utils/styles"

interface IMemoryCard extends React.HTMLAttributes<HTMLDivElement> {
    children: string
    isSelected: boolean;
}

const MemoryCard: React.FC<IMemoryCard> = (props) => {
    const { children, onClick, isSelected } = props

    const currentStyle = getStyles("memory-card", [
        {
            decision: isSelected,
            name: "flipped"
        }
    ])

    return (
        <div className={currentStyle} onClick={onClick}>
            <div className={`front-face`}>
                {isSelected
                    ? <img src={children} alt="" />
                    : null}
            </div>
            <div className={"back-face"}></div>
        </div>
    )
}

export default MemoryCard