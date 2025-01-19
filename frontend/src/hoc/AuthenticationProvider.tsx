import React, { useEffect, useState } from 'react'
import { AuthenticationContext } from "src/contexts/AuthenticationContext"
import { apiProvider } from "src/api"
import { LocalStorageEnum } from "src/types"
import { useNavigate } from "react-router-dom"

interface AuthenticationProviderProps extends React.HTMLAttributes<HTMLDivElement> {
}

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = (props) => {
    const { children } = props
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const token = localStorage.getItem(LocalStorageEnum.SEVERSTAL_TOKEN)
        if (!!token) {
            apiProvider.interceptors.request.use(async (config) => {
                config.headers.Authorization = `Bearer ${token}`
                return config
            })
            return true
        } else {
            return false
        }
    })

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: isAuthenticated,
                setIsAuthenticated: setIsAuthenticated
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider