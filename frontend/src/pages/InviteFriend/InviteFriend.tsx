import React from "react"
import Button from "../../components/Button/Button"
import './InviteFriend.scss'

const InviteFriend = () => {

    const inviteFriend = () => {
        // TODO
    }

    const finishRound = () => {
        // TODO
    }

    return (
        <div className={"invite-friend"}>
            <h2>
                Закончились игровые жизни
            </h2>
            <p>
                но ты можешь заработать жизнь пригласив друга и продолжить играть
            </p>
            <Button
                variant={"primary"}
                onClick={inviteFriend}
            >
                Пригласить друга
            </Button>
            <Button
                variant={"secondary"}
                onClick={finishRound}
            >
                Завершить игру
            </Button>
        </div>
    )
}
export default InviteFriend