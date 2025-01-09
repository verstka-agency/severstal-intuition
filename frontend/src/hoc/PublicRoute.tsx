import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { useAuthentication } from "src/hooks"

const PublicRoute = () => {
    const { isAuthenticated } = useAuthentication()

    return !isAuthenticated ? <Outlet/> : <Navigate to={"/"}/>
}

export default PublicRoute