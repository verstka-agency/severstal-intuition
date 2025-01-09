import React from 'react'
import Container from "src/Layouts/Container/Container"
import { Outlet } from "react-router-dom"
import './Layout.scss'

const Layout = () => {
    return (
        <Container>
            <div className={"layout"}>
                <Outlet/>
            </div>
        </Container>
    )
}

export default Layout