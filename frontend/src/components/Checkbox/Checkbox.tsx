import React, { useCallback } from 'react'
import './Checkbox.scss'
import { Field, useField } from "formik"
import { getStyles } from "src/utils/styles"
import MetaError from "src/components/MetaError/MetaError"

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
}

const Checkbox: React.FC<ICheckbox> = (props) => {
    const { name, label, disabled, readOnly } = props
    const [field, meta, helpers] = useField(name)

    const labelStyles = useCallback(() => getStyles("checkbox", [
        {
            decision: Boolean(disabled),
            name: "disabled"
        }
    ]), [field, disabled, readOnly])

    const flagStyles = useCallback(() => {
        return getStyles("checkbox__flag", [
            {
                decision: Boolean(field.value),
                name: "active"
            },
        ])
    }, [field])

    return (
        <label
            className={labelStyles()}
        >
            <span className={"checkbox__container"}>
                <Field
                    type={"checkbox"}
                    name={name}
                    className={"checkbox__input"}
                />
                <span className={flagStyles()}>
                {field.value && <img src="/inputs/checkbox.svg" alt=""/>}
                </span>
                <span className={"checkbox__text"}>{label}</span>
            </span>
            <MetaError meta={meta}/>
        </label>
    )
}

export default Checkbox