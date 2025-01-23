import React from 'react'
import Paper from "src/components/Paper/Paper"
import Logo from "src/components/Logo/Logo"
import Corners from "src/components/Corners/Corners"
import { ButtonVariantsEnum, CornersPosition } from "src/types"
import Button from "src/components/Button/Button"
import { useNavigate } from "react-router-dom"
import './Authorization.scss'
import VkAuth from 'src/components/VkAuth/VkAuth'

const Authorization = () => {
    const navigate = useNavigate()

    return (
        <Paper>
            <Logo />
            <Corners position={CornersPosition.OUTSIDE} />
            <div className={"authorization"}>
                <div>

                    <h2 className={"h2 blue authorization__heading"}>Авторизация</h2>
                    <Button
                        onClick={() => {
                            navigate('email-otp')
                        }}
                        className={"authorization__button"}
                        variant={ButtonVariantsEnum.PRIMARY_NEXT}
                    >
                        Войти через почту
                    </Button>
                    <div className={"authorization__otp"}>
                        <p className={"int-2 blue"}>Или с помощью:</p>
                        <VkAuth />
                    </div>
                </div>
                <img
                    src={`/authorization/1.png`}
                    alt={""}
                    className={"authorization__image"}
                />
            </div>
        </Paper>

    )
}

export default Authorization