import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { useAuthentication } from "src/hooks"

const PrivateRoute = () => {
    const { isAuthenticated } = useAuthentication()

    return isAuthenticated ? <Outlet/> : <Navigate to={"/onboarding"}/>
}

export default PrivateRoute