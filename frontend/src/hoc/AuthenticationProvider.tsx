import React, { useEffect, useState } from 'react'
import { AuthenticationContext } from "src/contexts/AuthenticationContext"
import { apiProvider } from "src/api"
import { LocalStorageEnum } from "src/types"

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

    useEffect(() => {
        const eventHandler = (event: StorageEvent) => {
            const token = localStorage.getItem(LocalStorageEnum.SEVERSTAL_TOKEN)
            if (token) {
                setIsAuthenticated(true)
                apiProvider.interceptors.request.use(async (config) => {
                    config.headers.Authorization = `Bearer ${token}`
                    return config
                })
            } else {
                setIsAuthenticated(false)
            }
        }
        window.addEventListener("storage", eventHandler)

        return () => window.removeEventListener("storage", eventHandler)
    }, [])

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: isAuthenticated
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider