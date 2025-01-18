import { useEffect } from 'react'
import { Navigate, useLocation } from "react-router-dom"
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

    return <Navigate to={"/"}/>
}

export default Verification