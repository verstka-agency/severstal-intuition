import React, { useState } from 'react'
import { useMutation, useQuery } from "@tanstack/react-query"
import Button from '../../components/Button/Button'
import './Postcards.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'
import 'swiper/swiper-bundle.css'
import { Navigation } from "swiper/modules"
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loader/Loader'
import { apiProvider } from "src/api"
import { Navigate, useNavigate } from "react-router-dom"
import { useProfile } from "src/hooks"

const Postcards = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(1)
    const { profile, refetchProfile } = useProfile()
    const navigate = useNavigate()

    const shareData = {
        title: "Тебе открытка из «Стальной Интуиции»!",
        text: "Это игра-квиз «Северстали», где необходимо довериться своей интуиции, чтобы угадать факты о сотрудниках компании. Присоединяйся! Игра доступна всем желающим, а сотрудники «Северстали» еще получат шанс выиграть тур на двоих на Алтай и другие призы. 🎉",
        url: `${process.env.REACT_APP_FRONTEND_URL}/postcards/${currentSlideIndex}.html`,
    }

    const { mutate: addScore, isLoading: isAddingScore, isSuccess: isAddedScore } = useMutation({
        mutationFn: async () => {
            try {
                const response = await apiProvider.post("/private/game/additional-games", {
                    type: "postcards"
                })
                console.log("ПОБЕДА")
                await refetchProfile()

                if (navigator.share) {
                    navigator.share(shareData)
                        .then(() => {
                            navigate("/success?type=postcards")
                        })
                        .catch((error) => console.log('Ошибка при попытке поделиться:', error))
                } else {
                    alert('Ваш браузер не поддерживает Web Share API.')
                }
            } catch (error) {
                console.error(error)
            }
        }
    })

    const { data: postCards, isLoading } = useQuery<string[]>({
        queryKey: ["post-cards"],
        queryFn: async () => {
            // TODO: replace with actual data
            const postCards = [
                "/postcards/1.png",
                "/postcards/2.png",
                "/postcards/3.png",
                "/postcards/4.png",
                "/postcards/5.png",
                "/postcards/6.png",
                "/postcards/7.png",
                "/postcards/8.png",
                "/postcards/9.png",
                "/postcards/10.png",
                "/postcards/11.png",
                "/postcards/12.png",
                "/postcards/13.png",
                "/postcards/14.png",
                "/postcards/15.png",
                "/postcards/16.png",
                "/postcards/17.png",
                "/postcards/18.png",
                "/postcards/19.png",
                "/postcards/20.png",
            ]

            return postCards
        }
    })

    if (profile?.game.isAdditionalGamePassed || profile?.game.isGamePassed) {
        return <Navigate to={"/"} replace={true} />
    }

    return (
        <div className="postcards">
            <div className="postcards__top">
                <h2 className="postcards__top__heading">Открытка любимому коллеге</h2>
                <h3 className="postcards__top__description">Выберите открытку — и мы отправим её,<br /> кому скажете!
                </h3>
                {/*TODO не работает на компе*/}
                <Button variant="primary" className="postcards__top__button" onClick={() => addScore()}>
                    Отправить
                </Button>
            </div>
            {isLoading ? (
                <Loader />
            ) : postCards ? (
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    onRealIndexChange={(swiper: SwiperType) => {
                        console.log('index: ', swiper.realIndex + 1)
                        setCurrentSlideIndex(swiper.realIndex + 1)
                    }}
                    navigation={{
                        enabled: true,
                    }}
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={0}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 220,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {postCards.map((url, index) => (
                        <SwiperSlide key={index} className="postcard__slide">
                            {({ isActive }) => (
                                <>
                                    <div
                                        className={!isActive ? 'postcard__slide_hidden' : 'postcard__slide__index'}>{`${currentSlideIndex}/${postCards.length}`}</div>
                                    <div className={isActive ? 'active' : ''}>
                                        <img src={url} alt="severstal" className="postcard__slide__image" />
                                    </div>
                                </>

                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <ErrorMessage />
            )}

        </div>
    )
}

export default Postcards