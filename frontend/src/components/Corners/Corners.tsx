import React from 'react'
import { CornersPosition } from "src/types"
import './Corners.scss'
import { getStyles } from "src/utils/styles"

interface CornersProps {
    position: CornersPosition
}

const Corners: React.FC<CornersProps> = (props) => {
    const { position = CornersPosition.OUTSIDE } = props

    const corners = ["lt", "rt", "rb", "lb"]

    return (
        <>
            {corners.map((corner, index) => {
                const styles = getStyles("corners", [
                    corner,
                    {
                        decision: position === CornersPosition.OUTSIDE,
                        name: `outside-${corner}`
                    }
                ])
                return (
                    <div
                        className={styles}
                        key={index}
                    ></div>
                )
            })}
        </>
    )
}

export default Corners