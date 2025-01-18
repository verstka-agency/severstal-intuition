import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from './pages/Index/Index'
import './scss/general.scss'
import Verification from "src/pages/Verification/Verification"
import Profile from "src/pages/Profile/Profile"
import Game from "src/pages/Game/Game"
import Layout from "src/Layouts/Layout/Layout"

const Onboarding = lazy(() => import("./pages/Onboarding/Onboarding"))
const BasicLayout = lazy(() => import("./Layouts/BasicLayout/BasicLayout"))
const Memory = lazy(() => import("./pages/Memory/Memory"))
const Postcards = lazy(() => import("./pages/Postcards/Postcards"))
const PrivateRoute = lazy(() => import("./hoc/PrivateRoute"))
const PublicRoute = lazy(() => import("./hoc/PublicRoute"))
const Authorization = lazy(() => import("./pages/Authorization/Authorization"))
const EmailOtp = lazy(() => import("./pages/EmailOtp/EmailOtp"))
const VKOtp = lazy(() => import("./pages/VKOtp/VKOtp"))
const ChooseAvatar = lazy(() => import("./pages/ChooseAvatar/ChooseAvatar"))
const Main = lazy(() => import("./pages/Main/Main"))

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BasicLayout/>}>
                    <Route path={'/onboarding'} element={<Onboarding/>}/>
                    <Route path={"/authorization"}>
                        <Route index={true} element={<Authorization/>}/>
                        <Route path={"email-otp"} element={<EmailOtp/>}/>
                        <Route path={"verification"} element={<Verification/>}/>
                        <Route path={"vk"} element={<VKOtp/>}/>
                    </Route>
                    <Route element={<PrivateRoute/>}>
                        <Route path={'*'} element={<Index/>}/>
                        <Route path={'/'} element={<Index/>}/>
                        <Route path={'/main'} element={<Main/>}/>
                        <Route path={'/memory'} element={<Memory/>}/>
                        <Route path={'/postcards'} element={<Postcards/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={"profile/avatar"} element={<ChooseAvatar/>}/>
                    </Route>
                    <Route element={<PublicRoute/>}>

                    </Route>
                </Route>
                <Route element={<Layout/>}>
                    <Route element={<PrivateRoute/>}>
                        <Route path={'/game'} element={<Game/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
