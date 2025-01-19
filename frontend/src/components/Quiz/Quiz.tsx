import React, { useState } from 'react'
import { Form, Formik, FormikValues } from "formik"
import Button from "src/components/Button/Button"
import { ButtonVariantsEnum } from "src/types"
import './Quiz.scss'
import { useMutation, useQuery } from "@tanstack/react-query"
import { apiProvider } from "src/api"
import { useProfile } from "src/hooks"
import { useNavigate } from "react-router-dom"

interface IQuiz {
    answers: Array<{
        id: string
        text: string
    }>
    question: string
}

const Quiz: React.FC<IQuiz> = (props) => {
    const { answers, question } = props
    const { profile, refetchProfile } = useProfile()
    const [answerId, setAnswerId] = useState<string>("")
    const navigate = useNavigate()

    const { data, isLoading: isSendingAnswer } = useQuery({
        queryKey: ["answers", {
            answerId: answerId,
        }],
        queryFn: async () => {
            try {
                const response = await apiProvider.post("/private/game/send-answer", {
                    answerId: answerId
                })
                return response.data

            } catch (error) {
                console.error(error)
            }
        },
        enabled: !!answerId
    })


    return (
        <div className={"quiz"}>
            <h3 className={"h3 white"}>{question}</h3>
            <div className={"quiz__questions"}>
                {
                    answers.map((answer) => {
                        console.log('answer', answer)
                        return (
                            <div
                                key={answer.id}
                                onClick={async () => {
                                    if (!answerId) {
                                        setAnswerId(answer.id)
                                    }
                                }}
                            >
                                {answer.text}
                            </div>
                        )
                    })
                }
                {
                    answerId
                        ?
                        <Button
                            variant={ButtonVariantsEnum.PRIMARY_NEXT}
                            onClick={async () => {
                                await refetchProfile()
                                if (profile?.game.currentQuestion === 5) {
                                    const games = ["memory", "postcards"].sort((a, b) => {
                                        const random = Number((Math.random() * 2).toFixed(0))
                                        return random
                                    })[0]
                                    navigate(`/${games}`)
                                }
                                if (profile?.game.currentQuestion === 10) {
                                    navigate("/")
                                }
                            }}
                        >
                            Далее
                        </Button>
                        : null
                }
            </div>
        </div>
    )
}

export default Quiz