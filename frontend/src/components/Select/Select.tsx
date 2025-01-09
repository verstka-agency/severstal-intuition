import React, { CSSProperties, useCallback, useRef, useState } from 'react'
import ReactSelect from 'react-select'
import { useField } from "formik"
import MetaError from "src/components/MetaError/MetaError"
import { getStyles } from "src/utils/styles"
import './Select.scss'
import { useMediaQuery } from "src/hooks"
import { getGroupedOptions } from "src/utils/getGroupedOptions"

interface SelectProps {
    name: string
    label: string
    required?: boolean
    disabled?: boolean
    options: any[]
    isLoading?: boolean
}

const Select: React.FC<SelectProps> = (props) => {
    const {
        name,
        label,
        required,
        disabled,
        options,
        isLoading
    } = props

    const { isMobile } = useMediaQuery()
    const [isActive, setIsActive] = useState<boolean>(false)
    const [field, meta, helpers] = useField(name)
    const ref = useRef<any>(null)

    const isFilled = Boolean(field.value)

    const labelStyles = useCallback(() => getStyles("select", [
        {
            decision: isFilled || (isActive && isFilled),
            name: "filled"
        },
        {
            decision: Boolean(meta.error),
            name: "error"
        },
        {
            decision: Boolean(disabled),
            name: "disabled"
        }
    ]), [isActive, field.value, meta, disabled])

    const spanStyles = useCallback(() => getStyles("select__label",
        [
            { decision: isFilled || (isActive && isFilled), name: "active" },
            { decision: isFilled || (isActive && isFilled), name: "h2" },
            { decision: Boolean(required), name: "required" },
        ]), [isActive, field.value, required])

    const fieldStyles = useCallback(() => getStyles("select__field", []), [])

    return (
        <div className={"input-wrapper"}>
            <label
                className={labelStyles()}
                onClick={() => {
                    if (ref.current) {
                        ref.current.focus()
                        setIsActive(true)
                    }
                }}
            >
                <span className={spanStyles()}>{label}</span>
                <ReactSelect
                    className={fieldStyles()}
                    isLoading={isLoading}
                    isDisabled={disabled}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            border: "none",
                            outline: "none",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            minHeight: "initial"
                        }),
                        valueContainer: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: "0"
                        }),
                        singleValue: (baseStyles, state) => ({
                            ...baseStyles,
                            margin: "0"
                        }),
                        input: (baseStyles, state) => ({
                            ...baseStyles,
                            margin: "0",
                            cursor: "text"
                        }),
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: state.isSelected ? "#0041A0" : "",
                            cursor: "pointer",
                            ":hover": {
                                backgroundColor: !state.isSelected ? "#F4F4F4" : ""
                            },
                            borderBottom: "1px solid #DEDEDE",
                            // ":not(:last-child)": {
                            //     borderBottom: "1px solid #DEDEDE"
                            // },
                            height: isMobile ? "44px" : "46px",
                            display: "flex",
                            alignItems: "center"
                        }),
                        menu: (baseStyles, state) => ({
                            ...baseStyles,
                            width: "calc(100% + 2rem)",
                            marginLeft: "-1rem",
                            top: "2rem",
                            overflow: "scroll",
                            boxShadow: "0px 4px 12px 0px #00000026",
                        }),
                        menuList: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: "0",
                        }),
                        placeholder: (baseStyles, state) => ({
                            ...baseStyles,
                            margin: "0",
                        }),
                        clearIndicator: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: "0",
                            cursor: "pointer"
                        }),
                        groupHeading: (baseStyles, state) => ({
                            ...baseStyles,
                            position: "sticky",
                            top: "0",
                            left: '0',
                            padding: "0.5rem 12px",
                            backgroundColor: "#F4F4F4",
                            margin: 0,
                            borderBottom: "1px solid #DEDEDE",
                        }),
                        group: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: "0",
                        }),
                    }}
                    ref={ref}
                    onChange={async (newValue, actionMeta) => {
                        await helpers.setValue(newValue?.value as string)
                    }}
                    noOptionsMessage={(obj) => {
                        return "Нет совпадений"
                    }}
                    placeholder={""}
                    openMenuOnFocus={true}
                    options={getGroupedOptions(options)}
                    value={options?.filter((option) => option.value === field.value)}
                    onBlur={() => setIsActive(false)}
                    isClearable={true}
                    components={{
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                        ClearIndicator: (props) => {
                            const {
                                getStyles,
                                innerProps: { ref, ...restInnerProps },
                            } = props
                            return (
                                <div
                                    {...restInnerProps}
                                    ref={ref}
                                    style={getStyles('clearIndicator', props) as CSSProperties}
                                >
                                    <img src="/inputs/cross.svg" alt=""/>
                                </div>
                            )
                        }
                    }}
                    // maxMenuHeight={isMobile ? 178 : 184}
                />
            </label>
            <MetaError meta={meta}/>
        </div>
    )
}

export default Select