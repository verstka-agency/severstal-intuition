import React from 'react'
import Paper from "src/components/Paper/Paper"
import Logo from "src/components/Logo/Logo"
import Corners from "src/components/Corners/Corners"
import { CornersPosition } from "src/types"
import Button from "src/components/Button/Button"
import { useNavigate } from "react-router-dom"
import LoginVKID from "src/components/VKButton/VKButton"

const Authorization = () => {
    const navigate = useNavigate()

    return (
        <Paper>
            <Logo/>
            <Corners position={CornersPosition.OUTSIDE}/>
            <div className={"authorization"}>
                <div>
                    <h2 className={"h2 blue"}>Авторизация</h2>
                    <Button
                        onClick={() => {
                            navigate('email-otp')
                        }}
                    >
                        Войти через почту
                    </Button>
                    <p className={"int-2 blue"}>Или с помощью:</p>
                    <div>
                        {/*<LoginVKID*/}
                        {/*    id={52898958}*/}
                        {/*    redirect={"https://d633-91-205-198-66.ngrok-free.app/authorization/vk"}*/}
                        {/*    authSuccess={(data: any) => {*/}
                        {/*        console.log('data', data)*/}
                        {/*    }}*/}
                        {/*/>*/}
                        <div>yandex</div>
                    </div>
                </div>
                <div className={"onboarding__image"}></div>
            </div>
        </Paper>

    )
}

export default Authorization