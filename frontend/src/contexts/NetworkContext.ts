import { createContext, useContext } from 'react'

interface NetworkContextProps {
    isConnected: boolean
}

const initialValues: NetworkContextProps = {
    isConnected: false
}

export const NetworkContext = createContext<NetworkContextProps>(initialValues)