import React from "react"
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import Button from "src/components/Button/Button"
import GameIndicators from "src/components/GameIndicators/GameIndicators"
import Money from "src/components/Money/Money"

const Success = () => {
    const location = useLocation()
    const serachParams = new URLSearchParams(location.search)
    const type = serachParams.get("type")
    const navigate = useNavigate()

    if (!type) {
        return <Navigate to={"/"}/>
    }

    const configuration: Record<string, any> = {
        memory: {
            heading: "Супер! Все пары найдены, можете продолжить игру!",
            description: "+ 100 баллов! Потому что у нас работают только самые внимательные"
        },
        postcards: {
            heading: "Ваш получатель уже улыбается!",
            description: "А вы получили дополнительные +100 баллов"
        }
    }

    return (
        <>
            <Money className={"additional-game__money"}/>
            <div className={"additional-game"}>
                <img
                    className={"additional-game__img"}
                    src="/game/heart.png"
                    alt=""
                />
                <h2 className={'h2 white additional-game__heading'}>
                    {configuration[type].heading}
                </h2>
                <p className={"int-2 white additional-game__description"}>
                    {configuration[type].description}
                </p>
                <div className={"additional-game__buttons"}>
                    <Button
                        onClick={() => {
                            navigate("/game")
                        }}
                    >
                        Вернуться к «Интуиции»
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Success