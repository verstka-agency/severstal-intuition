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
import './RoundPreview.scss'
import { useMediaQuery } from "src/hooks"

const RoundPreview = () => {
    const { isMobile } = useMediaQuery()

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
        return <div>...Загрузка</div>
    }

    return (
        <div className={"round-preview"}>
            <img
                src="/ring.png"
                alt=""
                className={"round-preview__ring"}
            />
            <div className={"round-preview__header"}>
                <h1 className={"h1 white round-preview__heading"}>Сегодня ты будешь угадывать</h1>
                <Button
                    className={"round-preview__button"}
                    variant={ButtonVariantsEnum.PRIMARY}
                    onClick={() => {
                        navigate("/game")
                    }}
                >
                    Приступить
                </Button>
            </div>
            {/* preview slider */}
            <div>
                <Swiper
                    spaceBetween={16} // Пробелы между слайдами
                    autoplay={{
                        delay: 0, // Задержка в миллисекундах (3 секунды)
                        disableOnInteraction: false // Автопрокрутка не останавливается при взаимодействии
                    }}
                    speed={5000} // Скорость перехода (2 секунды)
                    loop={true} // Бесконечный цикл
                    modules={[Autoplay]} // Подключаем модуль автопрокрутки
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 2,
                            centeredSlides: true
                        },
                        // when window width is >= 768px
                        1280: {
                            slidesPerView: 7,
                            centeredSlides: false
                        }
                    }}
                    touchEventsTarget="container"
                >
                    {data?.map((question) => {
                        if (question.city) {
                            return (
                                <SwiperSlide key={question.id}>
                                    <div className={"round-preview__slide"}>
                                        <img
                                            src={`/game/authors/${question.avatar}`}
                                            alt=""
                                            className={"round-preview__avatar"}
                                        />
                                        <div className={"round-preview__description"}>
                                            <h3 className={"h3 blue"}>{question.author}</h3>
                                            <p className={"int-3 blue"}>{question.city}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                        return null
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default RoundPreview