import React from 'react'
import './Radio.scss'
import { Field, useField } from "formik"

interface IRadio extends React.HTMLAttributes<HTMLLabelElement> {
    name: string
    value: string | number | boolean
}

const Radio: React.FC<IRadio> = (props) => {
    const { name, value, children } = props
    const [field, ,] = useField(name)

    return (
        <label
            className={`radio radio--${field.value === value ? "selected" : "not-selected"}`}
        >
            <Field type={'radio'} name={name} value={value}/>
            <span>{children}</span>
        </label>
    )
}

export default Radio