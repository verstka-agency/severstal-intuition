import { createContext, useContext } from 'react'

interface NetworkContextProps {
    isOnline: boolean
}

const initialValues: NetworkContextProps = {
    isOnline: true
}

export const NetworkContext = createContext<NetworkContextProps>(initialValues)