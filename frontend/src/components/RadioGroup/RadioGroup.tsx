import React from 'react'
import { useField } from "formik"
import Radio from "../../components/Radio/Radio"
import './RadioGroup.scss'

interface IRadioGroup {
    name: string
    options: Array<{
        value: string | number | boolean
        children: string
    }>
    label: string
}

const RadioGroup: React.FC<IRadioGroup> = (props) => {
    const { name, options, label } = props
    const [field, meta,] = useField(name)

    return (
        <div className={"radio-group"}>
            <div className={"radio-group__label"}>{label}</div>
            <div className={"radio-group__items"}>
                {options.map((option) => {
                    return (
                        <Radio {...option} name={name}/>
                    )
                })}
            </div>
            <div className={"radio-group__validation"}>
                {meta.touched && <p>{meta.error}</p>}
            </div>
        </div>
    )
}

export default RadioGroup