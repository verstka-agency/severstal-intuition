import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { CitiesContext } from "../contexts/CitiesContext"
import { apiProvider } from "src/api"

interface CitiesProviderProps extends React.HTMLAttributes<HTMLDivElement> {
}

const CitiesProvider: React.FC<CitiesProviderProps> = (props) => {
    const { children } = props

    const { data: cities, isLoading: isCitiesLoading } = useQuery({
        queryKey: ["cities"],
        queryFn: async () => {
            try {
                const response = await apiProvider.get("/public/cities")
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