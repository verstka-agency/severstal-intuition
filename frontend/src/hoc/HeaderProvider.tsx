import React, { useState } from 'react'
import { HeaderContext, HeaderVariants } from "src/contexts/HeaderContext"

interface HeaderProviderProps extends React.HTMLAttributes<HTMLDivElement> {

}

const HeaderProvider: React.FC<HeaderProviderProps> = (props) => {
    const { children } = props
    const [variant, setVariant] = useState<HeaderVariants>(HeaderVariants.BLUE)
    const [show, setShow] = useState<boolean>(false)

    return (
        <HeaderContext.Provider
            value={{
                show: show,
                setShow: setShow,
                variant: variant,
                setVariant: setVariant
            }}
        >
            {children}
        </HeaderContext.Provider>
    )
}

export default HeaderProvider