import React from 'react'
import './BasicLayout.scss'
import { Outlet } from "react-router-dom"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Container from "src/Layouts/Container/Container"

const BasicLayout = () => {
    return (
        <Container>
            <Header/>
            <div className={"basic-layout"}>
                <Outlet/>
            </div>
            <Footer/>
        </Container>
    )
}

export default BasicLayout