import React from 'react'
import Paper from "src/components/Paper/Paper"
import { CornersPosition } from "src/types"
import Logo from "src/components/Logo/Logo"
import Corners from "src/components/Corners/Corners"
import './Profile.scss'
import ProfileForm from "src/components/ProfileForm/ProfileForm"

const Profile = () => {

    return (
        <Paper>
            <Logo/>
            <Corners position={CornersPosition.OUTSIDE}/>
            <div className={"profile"}>
                <div className={"profile__heading"}>
                    <h2 className={"h2 blue"}>Ваши данные</h2>
                    <p className={"int-2 blue"}>Расскажите о себе</p>
                </div>
                <ProfileForm/>
            </div>
        </Paper>
    )
}

export default Profile