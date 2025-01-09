import { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { LocalStorageEnum } from "src/types"

const Verification = () => {
    const location = useLocation()

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const token = searchParams.get('token')
        if (token) {
            localStorage.setItem(LocalStorageEnum.SEVERSTAL_TOKEN, token)
        }
    }, [])

    return null
}

export default Verification