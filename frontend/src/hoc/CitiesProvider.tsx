import React from 'react'
import { CitiesContext } from "../contexts/CitiesContext"
import { apiProvider } from "src/api"
import { useAuthentication } from 'src/hooks'
import { useQuery } from '@tanstack/react-query'

interface CitiesProviderProps extends React.HTMLAttributes<HTMLDivElement> {
}

const CitiesProvider: React.FC<CitiesProviderProps> = (props) => {
    const { children } = props
    const { isAuthenticated } = useAuthentication()

    const { data: cities, isLoading: isCitiesLoading } = useQuery({
        queryKey: ["cities"],
        enabled: isAuthenticated,
        queryFn: async () => {
            try {
                const response = await apiProvider.get("/private/cities")
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <CitiesContext.Provider
            value={{
                cities: cities,
                isCitiesLoading: isCitiesLoading
            }}
        >
            {children}
        </CitiesContext.Provider>
    )
}

export default CitiesProvider