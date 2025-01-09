import { createContext } from "react"
import { CityOption } from "src/types"

interface CitiesContextProps {
    cities: CityOption[],
    isCitiesLoading: boolean
}

const initialValues: CitiesContextProps = {
    cities: [],
    isCitiesLoading: false
}

export const CitiesContext = createContext<CitiesContextProps>(initialValues)