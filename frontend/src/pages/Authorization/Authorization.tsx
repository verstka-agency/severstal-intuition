import React from 'react'
import Paper from "src/components/Paper/Paper"
import Logo from "src/components/Logo/Logo"
import Corners from "src/components/Corners/Corners"
import { ButtonVariantsEnum, CornersPosition } from "src/types"
import Button from "src/components/Button/Button"
import { useNavigate } from "react-router-dom"
import './Authorization.scss'
import VkAuth from 'src/components/VkAuth/VkAuth'
import MediaQuery from "react-responsive"

const Authorization = () => {
    const navigate = useNavigate()

    return (
        <Paper>
            <Logo/>
            <Corners position={CornersPosition.OUTSIDE} className={"authorization__corners"}/>
            <div className={"authorization"}>
                <div>
                    <MediaQuery maxWidth={1279.98}>
                        <img
                            src={`/authorization/1.png`}
                            alt={""}
                            className={"authorization__image"}
                        />
                    </MediaQuery>
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
                        <VkAuth/>
                    </div>
                </div>
                <MediaQuery minWidth={1280}>
                    <img
                        src={`/authorization/1.png`}
                        alt={""}
                        className={"authorization__image"}
                    />
                </MediaQuery>
            </div>
        </Paper>

    )
}

export default Authorization