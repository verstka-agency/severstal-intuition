import React, { useEffect, useState } from 'react'
import MemoryCard from '../../components/MemoryCard/MemoryCard'
import './Memory.scss'
import { useMutation, useQuery } from "@tanstack/react-query"
import { shuffleArray } from "../../utils/memoryCards"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import Loader from '../../components/Loader/Loader'
import { apiProvider } from "src/api"
import { Navigate, useNavigate } from "react-router-dom"
import { useProfile } from "src/hooks"

const Memory = () => {
    const [selectedCards, setSelectedCards] = useState<number[]>([])
    const [isPreviewMode, setIsPreviewMode] = useState<boolean>(true)
    const [matchedCards, setMatchedCards] = useState<number[]>([])
    const { profile, refetchProfile } = useProfile()
    const navigate = useNavigate()

    const { data: memoryCards, isLoading } = useQuery<string[]>({
        queryKey: ["memory-cards"],
        queryFn: async () => {
            const allCards = Array.from({ length: 32 }, (_, i) => `/memory/illustration-${i}.png`);

            const selectedCards = [];
            for (let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(Math.random() * allCards.length);
                selectedCards.push(allCards[randomIndex]);
                allCards.splice(randomIndex, 1);
            }

            const doubledCards = [...selectedCards, ...selectedCards];

            return shuffleArray(doubledCards)
        }
    })

    const { mutate: addScore, isLoading: isAddingScore, isSuccess: isAddedScore } = useMutation({
        mutationFn: async () => {
            try {
                const response = await apiProvider.post("/private/game/additional-games", {
                    type: "memory"
                })
                refetchProfile()
                navigate("/success?type=memory")
            } catch (error) {
                console.error(error)
            }
        }
    })

    useEffect(() => {
        if (!memoryCards) return
        if (selectedCards.length === 2) {
            const [firstIndex, secondIndex] = selectedCards

            // Проверяем, совпадают ли карточки
            if (memoryCards[firstIndex] === memoryCards[secondIndex]) {
                // Добавляем индексы совпавших карточек в состояние matchedCards
                setMatchedCards((prev) => [...prev, firstIndex, secondIndex])
            }

            // Сбрасываем выбранные карточки через 1,2 секунды
            const timeout = setTimeout(() => {
                setSelectedCards([])
            }, 1200)

            return () => clearTimeout(timeout)
        }
    }, [selectedCards, memoryCards])

    useEffect(() => {
        // Проверяем, все ли карточки перевернуты
        if (matchedCards.length === memoryCards?.length) {
            addScore()
        }
    }, [matchedCards, memoryCards])

    useEffect(() => {
        // Показываем карточки сразу после загрузки
        const timeout = setTimeout(() => {
            setIsPreviewMode(false)
        }, 2000)
        return () => {
            clearTimeout(timeout)
        }
    }, [memoryCards])

    const handleCardClick = (selectedCards: number[], index: number) => {
        if (selectedCards.length < 2 && !selectedCards.includes(index)) {
            setSelectedCards((prev) => [...prev, index])
        }
    }

    // if (profile?.game.isMemoryPassed && !isAddedScore) {
    //     return <Navigate to={"/"}/>
    // }

    if (!isLoading && !memoryCards) {
        return (
            <ErrorMessage />
        )
    }

    return (
        <div className={"memory"}>
            <div className="memory__background__image memory__background__image__left"></div>
            <div className="memory__background__image memory__background__image__right"></div>
            <div className={"memory__heading"}>Найди пары карточкам<br /> с интересами твоих коллег</div>
            {
                isLoading ?
                    <Loader />
                    :
                    <div className={"memory__cards"}>
                        {memoryCards && memoryCards.map((card, index) => {
                            return (
                                <MemoryCard
                                    key={index}
                                    onClick={() => handleCardClick(selectedCards, index)}
                                    isSelected={isPreviewMode || matchedCards.includes(index) || selectedCards.includes(index)}
                                >
                                    {card}
                                </MemoryCard>
                            )
                        })}
                    </div>
            }
        </div>
    )
}

export default Memory