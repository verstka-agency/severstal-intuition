import React from 'react'
import Button from 'src/components/Button/Button'
import { ButtonVariantsEnum } from "src/types"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from 'swiper/modules'
import { useQuery } from "@tanstack/react-query"
import { apiProvider } from "src/api"

const RoundPreview = () => {

    type TQuestion = {
        "id": string
        "author": string
        "city": string
        "question": string
        "avatar": string
    }

    const { data, isLoading } = useQuery<TQuestion[]>({
        queryKey: ["round-preview"],
        queryFn: async () => {
            try {
                const response = await apiProvider("/private/game/round-preview")
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })

    const navigate = useNavigate()

    if (isLoading) {
        return <div>...Loading</div>
    }

    return (
        <div>
            <h1 className={"h1"}>Сегодня ты будешь угадывать</h1>
            <Button
                variant={ButtonVariantsEnum.PRIMARY_NEXT}
                onClick={() => {
                    navigate("/game")
                }}
            >
                Приступить
            </Button>
            {/* preview slider */}
            <div>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={16} // Пробелы между слайдами
                    autoplay={{
                        delay: 0, // Задержка в миллисекундах (3 секунды)
                        disableOnInteraction: false // Автопрокрутка не останавливается при взаимодействии
                    }}
                    speed={5000} // Скорость перехода (2 секунды)
                    loop={true} // Бесконечный цикл
                    modules={[Autoplay]} // Подключаем модуль автопрокрутки
                >
                    {data?.map((question) => {
                        return (
                            <SwiperSlide key={question.id}>
                                <div>{question.avatar}</div>
                                <div>{question.author}</div>
                                <div>{question.city}</div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default RoundPreview