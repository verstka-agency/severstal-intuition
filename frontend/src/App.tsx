import React, { lazy } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import './scss/general.scss'
import Layout from "src/Layouts/Layout/Layout"

const RoundPreview = lazy(() => import("./pages/RoundPreview/RoundPreview"))
const Index = lazy(() => import("./pages/Index/Index"))
const Verification = lazy(() => import("./pages/Verification/Verification"))
const Profile = lazy(() => import("./pages/Profile/Profile"))
const Game = lazy(() => import("./pages/Game/Game"))
const Success = lazy(() => import("./pages/Success/Success"))
const Onboarding = lazy(() => import("./pages/Onboarding/Onboarding"))
const BasicLayout = lazy(() => import("./Layouts/BasicLayout/BasicLayout"))
const Memory = lazy(() => import("./pages/Memory/Memory"))
const Postcards = lazy(() => import("./pages/Postcards/Postcards"))
const PrivateRoute = lazy(() => import("./hoc/PrivateRoute"))
const PublicRoute = lazy(() => import("./hoc/PublicRoute"))
const Authorization = lazy(() => import("./pages/Authorization/Authorization"))
const EmailOtp = lazy(() => import("./pages/EmailOtp/EmailOtp"))
const ChooseAvatar = lazy(() => import("./pages/ChooseAvatar/ChooseAvatar"))

const App = () => {

    return (
        <Routes>
            <Route element={<BasicLayout />}>

                <Route path={'/onboarding'} element={<Onboarding />} />
                <Route element={<PrivateRoute />}>
                    <Route path={'*'} element={<Navigate to="/" />} />
                    <Route path={'/'} element={<Index />} />
                    <Route path={'/about'} element={<Onboarding />} />
                    {/*<Route path={'/memory'} element={<Memory/>}/>*/}
                    {/*<Route path={'/postcards'} element={<Postcards/>}/>*/}
                    {/*<Route path={'/profile'} element={<Profile/>}/>*/}
                    <Route path={'/success'} element={<Success />} />
                    <Route path={"profile/avatar"} element={<ChooseAvatar />} />
                    <Route path={'/round-preview'} element={<RoundPreview />} />
                </Route>

                <Route element={<PublicRoute />}>
                    <Route path={'/about'} element={<Onboarding />} />
                    <Route path={'/memory'} element={<Memory />} />
                    <Route path={'/postcards'} element={<Postcards />} />
                    <Route path={'/profile'} element={<Profile />} />
                    <Route path={"/authorization"}>
                        <Route index={true} element={<Authorization />} />
                        <Route path={"email-otp"} element={<EmailOtp />} />
                        <Route path={"verification"} element={<Verification />} />
                    </Route>
                </Route>
            </Route>

            <Route element={<Layout />}>
                <Route element={<PrivateRoute />}>
                    <Route path={'/game'} element={<Game />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
