import { createContext } from 'react'

interface AuthenticationContextProps {
    isAuthenticated: boolean
}

const initialValues: AuthenticationContextProps = {
    isAuthenticated: false
}

export const AuthenticationContext = createContext<AuthenticationContextProps>(initialValues)