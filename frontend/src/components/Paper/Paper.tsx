import React from 'react'
import './Paper.scss'
import { getStyles } from "src/utils/styles"

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Paper: React.FC<PaperProps> = (props) => {
    const { children, className } = props

    const styles = getStyles("paper", [], className)

    return (
        <div className={styles}>{children}</div>
    )
}

export default Paper