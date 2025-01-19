import { createContext, Dispatch, SetStateAction } from 'react'

interface AuthenticationContextProps {
    isAuthenticated: boolean
    setIsAuthenticated: Dispatch<SetStateAction<boolean>> | undefined
}

const initialValues: AuthenticationContextProps = {
    isAuthenticated: false,
    setIsAuthenticated: undefined
}

export const AuthenticationContext = createContext<AuthenticationContextProps>(initialValues)