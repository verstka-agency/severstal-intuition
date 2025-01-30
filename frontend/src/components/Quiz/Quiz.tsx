import React, { SetStateAction, useState } from 'react'
import Button from "src/components/Button/Button"
import { ButtonVariantsEnum } from "src/types"
import './Quiz.scss'
import { useQuery } from "@tanstack/react-query"
import { apiProvider } from "src/api"
import { useProfile } from "src/hooks"
import { useNavigate } from "react-router-dom"
import Answer, { AnswerVariantsEnum } from "src/components/Answer/Answer"

interface IQuiz {
    setShowInvite: React.Dispatch<SetStateAction<boolean>>
    answers: Array<{
        id: string
        text: string
    }>
    question: string
}

const Quiz: React.FC<IQuiz> = (props) => {
    const { answers, question, setShowInvite } = props
    const { profile, refetchProfile } = useProfile()
    const [answerId, setAnswerId] = useState<string>("")
    const navigate = useNavigate()

    const { data: results, isLoading: isSendingAnswer } = useQuery<Array<{
        id: string
        isCorrect: boolean
        question: string
        text: string
    }>>({
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
            <h3 className={"h3 white quiz__question"}>{question}</h3>
            <div className={"quiz__questions"}>
                {answers.map((answer) => {

                    // id, который отправили: answerId
                    // Проверяем, что айдишники равны, ведь нам надо будет дальше проверять, мы красим ответ в зеленый или красный
                    // Мы всегда красим зеленый, но если отправленный ответ неправильный, то его мы красим в красный
                    const currentResult = results?.filter((result) => {
                        return result.id === answer.id
                    })[0]

                    const isSentAnswer = answerId === answer.id
                    // Проверяем, что отправленный ответ неправильный

                    return (
                        <Answer
                            variant={Boolean(answerId) ?
                                isSendingAnswer ?
                                    AnswerVariantsEnum.SUBMITTED
                                    :
                                    (currentResult?.isCorrect ?
                                        AnswerVariantsEnum.CORRECT :
                                        isSentAnswer ?
                                            AnswerVariantsEnum.NOT_CORRECT :
                                            AnswerVariantsEnum.SUBMITTED)
                                : AnswerVariantsEnum.DEFAULT}
                            key={answer.id}
                            onClick={() => {
                                if (!answerId) {
                                    setAnswerId(answer.id)
                                }
                            }}
                        >
                            {answer.text}
                        </Answer>
                    )
                })}
                {answerId
                    ?
                    <Button
                        className={"quiz__button"}
                        variant={ButtonVariantsEnum.PRIMARY_NEXT}
                        onClick={async () => {
                            await refetchProfile()
                            if (profile?.game.currentQuestion === 5) {
                                setShowInvite(true)
                            }
                            if (profile?.game.currentQuestion === 10) {
                                navigate("/")
                            }
                        }}
                    >
                        Далее
                    </Button>
                    : null}
            </div>
        </div>
    )
}

export default Quiz