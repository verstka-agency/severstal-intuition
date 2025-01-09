import React from 'react'
import './MetaError.scss'
import { FieldMetaProps } from "formik"

interface MetaErrorProps {
    meta: FieldMetaProps<any>
}

const MetaError: React.FC<MetaErrorProps> = (props) => {
    const { meta } = props

    return (
        meta.error ?
            <span className={"error-text"}>
                        {meta.error}
            </span>
            :
            null
    )
}

export default MetaError