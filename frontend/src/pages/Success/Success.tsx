import React from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import Button from "src/components/Button/Button"
import { useMutation } from "@tanstack/react-query"
import { apiProvider } from "src/api"
import { useProfile } from "src/hooks"

const Success = () => {
    const { type } = useParams()
    const { refetchProfile } = useProfile()
    const navigate = useNavigate()

    const { mutate: endRound, isLoading: isEndingRound } = useMutation({
        mutationFn: async () => {
            try {
                const response = apiProvider.post("/private/game/end-round")
                await refetchProfile()
                navigate("/game")
            } catch (error) {
                console.error(error)
            }
        }
    })

    if (!type) {
        return <Navigate to={"/"}/>
    }

    return (
        <div>
            <div>
                {type}
            </div>
            <Button
                onClick={() => {
                    navigate("/game")
                }}
            >
                Продолжить
            </Button>
            <Button
                onClick={() => {

                }}
            >
                Завершить раунд
            </Button>
        </div>
    )
}

export default Success