import React from 'react'
import './BasicLayout.scss'
import { Outlet } from "react-router-dom"
import Header from '../../components/Header/Header'
import Container from "src/Layouts/Container/Container"

const BasicLayout = () => {
    return (
        <Container>
            <Header/>
            <div className={"basic-layout"}>
                <Outlet/>
            </div>
        </Container>
    )
}

export default BasicLayout