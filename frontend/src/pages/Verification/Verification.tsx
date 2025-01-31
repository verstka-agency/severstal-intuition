import { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { LocalStorageEnum } from "src/types"
import { apiProvider } from "src/api"
import { useAuthentication } from "src/hooks"

const Verification = () => {
    const location = useLocation()
    const { setIsAuthenticated } = useAuthentication()
    const navigate = useNavigate()

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const token = searchParams.get('token')
        if (token) {
            localStorage.setItem(LocalStorageEnum.SEVERSTAL_TOKEN, token)
            setIsAuthenticated && setIsAuthenticated(true)
            apiProvider.interceptors.request.use(async (config) => {
                config.headers.Authorization = `Bearer ${token}`
                return config
            })
            navigate("/profile")
        }
    }, [location, navigate, setIsAuthenticated])

    return null
}

export default Verification