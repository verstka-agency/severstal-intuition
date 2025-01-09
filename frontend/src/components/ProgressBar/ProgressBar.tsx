import React from 'react'
import './ProgressBar.scss'
import ProgressLine from "src/components/ProgressLine/ProgressLine"

interface IProgressBar extends React.HTMLAttributes<HTMLDivElement> {
    currentBar: number
    barsAmount: number
}

const ProgressBar: React.FC<IProgressBar> = (props) => {
    const { currentBar, barsAmount } = props

    return (
        <div className={"progress-bar"}>
            {new Array(barsAmount).fill(null).map((_, index: number) => {
                return (
                    <ProgressLine
                        key={index}
                        index={index}
                        currentBar={currentBar}
                    />
                )
            })}
        </div>
    )
}

export default ProgressBar