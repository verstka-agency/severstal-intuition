import React from 'react'
import './Button.scss'
import { ButtonTypeEnum, ButtonVariant, ButtonVariantsEnum } from "src/types"
import { getStyles } from "src/utils/styles"

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant | undefined
    type?: ButtonTypeEnum
}

const Button: React.FC<Button> = (props) => {
    const {
        variant = ButtonVariantsEnum.PRIMARY,
        className,
        disabled = false,
        onClick,
        type = ButtonTypeEnum.BUTTON,
        children
    } = props

    const styles = getStyles("button", [variant,
        { decision: disabled, name: "disabled" }], className)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (disabled) {
            return
        }
        onClick && onClick(event)
    }

    return (
        <button
            {...props}
            type={type}
            className={styles}
            onClick={(event) => {
                handleClick(event)
            }}
        >
            {children}
        </button>
    )
}

export default Button