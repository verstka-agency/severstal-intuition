import React, { useCallback, useState } from 'react'
import './Input.scss'
import { getStyles } from "src/utils/styles"
import { Field, useField } from "formik"
import MetaError from "src/components/MetaError/MetaError"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
}

const Input: React.FC<InputProps> = (props) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [field, meta] = useField(props.name)

    const labelStyles = useCallback(() => getStyles("input", [
        {
            decision: isActive || (field.value !== null && field.value !== undefined && field.value !== ""),
            name: "filled"
        },
        {
            decision: Boolean(meta.error),
            name: "error"
        },
        {
            decision: Boolean(props.disabled),
            name: "disabled"
        }
    ], props.className), [isActive, field.value, meta, props.disabled])

    const spanStyles = useCallback(() => getStyles("input__label",
        [
            {
                decision: isActive || (field.value !== null && field.value !== undefined && field.value !== ""),
                name: "active"
            },
            {
                decision: isActive || (field.value !== null && field.value !== undefined && field.value !== ""),
                name: "h2"
            },
            { decision: Boolean(props.required), name: "required" },
        ]), [isActive, field.value])

    const fieldStyles = useCallback(() => getStyles("input__field", []), [])

    return (
        <div className={"input-wrapper"}>
            <label
                className={labelStyles()}
                onClick={() => {
                    if (props.disabled) return
                    setIsActive(true)
                }}
            >
                <span className={spanStyles()}>{props.label}</span>
                <Field
                    readOnly={props.disabled}
                    name={props.name}
                    className={fieldStyles()}
                    onBlur={() => {
                        setIsActive(false)
                    }}
                />
            </label>
            <MetaError meta={meta}/>
        </div>
    )
}

export default Input