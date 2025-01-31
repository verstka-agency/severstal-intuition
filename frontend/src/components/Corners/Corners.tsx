import React from 'react'
import { CornersPosition } from "src/types"
import './Corners.scss'
import { getStyles } from "src/utils/styles"

interface CornersProps extends React.HTMLAttributes<HTMLDivElement> {
    position: CornersPosition
}

const Corners: React.FC<CornersProps> = (props) => {
    const { position = CornersPosition.OUTSIDE, className } = props

    const corners = ["lt", "rt", "rb", "lb"]

    return (
        <>
            {corners.map((corner, index) => {
                const styles = getStyles("corners", [
                        corner,
                        {
                            decision: position === CornersPosition.OUTSIDE,
                            name: `outside-${corner}`
                        },

                    ],
                    className)
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