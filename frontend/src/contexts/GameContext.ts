import { createContext } from "react"

interface GameProviderProps {
    currentRound: number
    money: number
    lives: number
    currentQuestion: number
    person: {
        name: string
        city: string
        avatar: string
    },
    question: string
}

const initialValues: GameProviderProps = {
    currentRound: 0,
    money: 1000,
    lives: 5,
    currentQuestion: 2,
    person: {
        name: "Василий Михайлович",
        city: "из Москвы",
        avatar: ""
    },
    question: "Василий мечтает взойти на вершину Эвереста. Как думаете, какое хобби у Василия?"
}

export const GameContext = createContext<GameProviderProps>(initialValues)