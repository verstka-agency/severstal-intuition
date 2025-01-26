import React from 'react'
import './Answer.scss'
import { getStyles } from "src/utils/styles"

export enum AnswerVariantsEnum {
    CORRECT = "correct",
    NOT_CORRECT = "not-correct",
    DEFAULT = "default",
    SUBMITTED = "submitted"
}

interface IAnswer extends React.ButtonHTMLAttributes<HTMLDivElement> {
    variant: AnswerVariantsEnum
}

const Answer: React.FC<IAnswer> = (props) => {
    const { onClick, children, variant = AnswerVariantsEnum.DEFAULT } = props

    const styles = getStyles("answer", [variant])

    return (
        <div
            className={styles}
            onClick={onClick}
        >
            <span className={"h3 white"}>
                {children}
            </span>
        </div>
    )
}

export default Answer