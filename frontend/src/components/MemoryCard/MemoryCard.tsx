import React from 'react'
import './MemoryCard.scss'
import { getStyles } from "../../utils/styles"

interface IMemoryCard extends React.HTMLAttributes<HTMLDivElement> {
    isSelected: boolean
}

const MemoryCard: React.FC<IMemoryCard> = (props) => {
    const { children, onClick, isSelected } = props

    return (
        <div
            className={
                getStyles("memory-card", [
                    {
                        decision: isSelected,
                        name: "flipped",
                    }
                ])
            }
            onClick={onClick}
        >
            <div className={`front-face`}>
                {
                    isSelected
                        ?
                        <p>{children}</p>
                        : null
                }
            </div>
            <div className={"back-face"}>

            </div>
        </div>
    )
}

export default MemoryCard