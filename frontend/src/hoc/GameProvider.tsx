import React, { useEffect } from 'react'
import { GameContext } from "src/contexts/GameContext"
import { useQuery } from "@tanstack/react-query"

interface GameProviderProps extends React.HTMLAttributes<HTMLDivElement> {
}

const GameProvider: React.FC<GameProviderProps> = (props) => {
    const { children } = props
    //
    // const { data, isLoading, refetch } = useQuery({
    //     queryKey: ["game"],
    //     queryFn: async () => {
    //
    //     }
    // })

    return (
        <GameContext.Provider
            value={{
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
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider