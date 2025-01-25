import React from 'react'
import './ProgressBar.scss'
import ProgressLine from "src/components/ProgressLine/ProgressLine"
import { getStyles } from "src/utils/styles"

interface IProgressBar extends React.HTMLAttributes<HTMLDivElement> {
    currentBar: number
    barsAmount: number
}

const ProgressBar: React.FC<IProgressBar> = (props) => {
    const { currentBar, barsAmount, className } = props

    const styles = getStyles("progress-bar", [], className)

    return (
        <div className={styles}>
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