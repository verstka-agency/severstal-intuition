import React, { useCallback } from 'react'
import { Field, useField } from "formik"
import { getStyles } from "src/utils/styles"
import './Chipfield.scss'

interface ChipfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
}

const Chipfield: React.FC<ChipfieldProps> = (props) => {
    const { name, label, onChange } = props

    const [field, , helpers] = useField(name)

    const chipfieldStyles = useCallback(() => {
        return getStyles("chipfield", [
            {
                decision: field.value === label,
                name: "active"
            }
        ])
    }, [field])

    return (
        <label
            className={chipfieldStyles()}
        >
            <Field
                type={"radio"}
                name={name}
                className={"chipfield__field"}
                value={label}
                onChange={async (event: any) => {
                    await helpers.setValue(event.target.value)
                    onChange && onChange(event)
                }
                }
            />
            <span className={""}>
                {label}
            </span>
        </label>
    )
}

export default Chipfield