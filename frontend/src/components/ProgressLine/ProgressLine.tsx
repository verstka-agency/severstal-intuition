import React from 'react'
import { getStyles } from "src/utils/styles"
import './ProgressLine.scss'

interface ProgressLineProps {
    index: number
    currentBar: number
}

const ProgressLine: React.FC<ProgressLineProps> = (props) => {
    const { index, currentBar } = props

    const progressLineStyles = getStyles("progress-line", [
        {
            decision: currentBar >= index,
            name: "passed"
        }
    ])

    return (
        <div
            className={progressLineStyles}
            key={index}
        >
        </div>
    )
}

export default ProgressLine
