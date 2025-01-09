import React, { useEffect, useState } from 'react'
import MemoryCard from '../../components/MemoryCard/MemoryCard'
import './Memory.scss'
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { shuffleArray } from "../../utils/memoryCards"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import Loader from '../../components/Loader/Loader'

const Memory = () => {
    const [selectedCards, setSelectedCards] = useState<number[]>([])
    const [isPreviewMode, setIsPreviewMode] = useState<boolean>(true)

    // Загружаем карточки
    const { data: memoryCards, isLoading } = useQuery<string[]>({
        queryKey: ["memory-cards"],
        queryFn: async () => {
            // Мокаем загрузку карточек
            const memoryCards = [
                "Стабильность",
                "Безопасность",
                "Уважение"
            ]

            const doubledCards = [...memoryCards, ...memoryCards]

            // Функция для случайного перемешивания массива (используем алгоритм Фишера-Йетса)


            return shuffleArray(doubledCards)
        }
    })

    // Добавляем баллы в случае, если ответ правильный
    const { mutate } = useMutation({
        mutationFn: async () => {
            // TODO настроить эндпоинт
            const response = await axios.post("")
            return response.data
        }
    })

    useEffect(() => {
        // Закрываем карточки после принятия ответов
        if (selectedCards.length === 2) {
            // TODO Вот тут проверяем, правильный ли ответ и вызываем mutate()
            const timeout = setTimeout(() => {
                setSelectedCards([])
            }, 2000)
            return () => clearTimeout(timeout)
        }
    }, [selectedCards])

    useEffect(() => {

        // Показываем карточки сразу после загрузки
        const timeout = setTimeout(() => {
            setIsPreviewMode(false)
        }, 2000)
        return () => {
            clearTimeout(timeout)
        }
    }, [memoryCards])

    if (!isLoading && !memoryCards) {
        return (
            <ErrorMessage />
        )
    }

    return (
        <div className={"memory"}>
            <div className={"memory__heading"}>Найди пары карточкам с ценностями</div>
            {
                isLoading ?
                    <Loader />
                    :
                    <div className={"memory__cards"}>
                        {memoryCards.map((card, index) => {
                            return (
                                <MemoryCard
                                    key={index}
                                    onClick={() => {
                                        if (selectedCards.length < 2 && !selectedCards.includes(index)) {
                                            setSelectedCards((prev) => [...prev, index])
                                        }
                                    }}
                                    isSelected={isPreviewMode ? true : selectedCards.includes(index)}
                                >
                                    {card}
                                </MemoryCard>
                            )
                        })}
                        <div>
                            {selectedCards.length === 2 && (memoryCards[selectedCards[0]] === memoryCards[selectedCards[1]] ? "Вы получили 1 балл" : "Вы не угадали и ничего не выиграли")}
                        </div>
                    </div>
            }
        </div>
    )
}

export default Memory