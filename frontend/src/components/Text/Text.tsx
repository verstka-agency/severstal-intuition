import React from 'react'
import { runTypograph } from "src/utils/typograph"
import { THeadingVariants, TParagraphVariants } from "src/types"

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
    variant: THeadingVariants & TParagraphVariants
    children: string
}

const Text: React.FC<TextProps> = (props) => {
    const { children, className } = props

    return (
        <div className={className}>
            {runTypograph(children)}
        </div>
    )
}

export default Text