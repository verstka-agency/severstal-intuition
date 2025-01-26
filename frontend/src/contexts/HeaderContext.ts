import { createContext, Dispatch, SetStateAction } from "react"

export enum HeaderVariants {
    BLUE = 'blue',
    WHITE = 'white'
}

interface HeaderContextProps {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    variant: HeaderVariants
    setVariant: Dispatch<SetStateAction<HeaderVariants>>
}

const initialValues: HeaderContextProps = {
    show: false,
    setShow: () => {
    },
    variant: HeaderVariants.BLUE,
    setVariant: () => {
    }
}

export const HeaderContext = createContext<HeaderContextProps>(initialValues)