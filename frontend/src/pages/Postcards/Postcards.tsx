import React from 'react'
import Button from '../../components/Button/Button'
import './Postcards.scss'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'
import 'swiper/swiper-bundle.css'
import { Navigation } from "swiper/modules"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loader/Loader'

const Postcards = () => {
    const swiper = useSwiper()
    console.log('activeIndex', swiper?.activeIndex)

    // Тащим ссылочки на открытки
    const { data: images, isLoading } = useQuery<string[]>({
        queryKey: ["postcards"],
        queryFn: async () => {
            try {

                const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
                console.log('response.data', response.data)
                return response.data.map((item: {
                    "albumId": number,
                    "id": number,
                    "title": string,
                    "url": string,
                    "thumbnailUrl": string
                }) => item.url)
            } catch (error) {
                console.log('error', error)
            }
        }
    })


    return (
        <div className={"postcards"}>
            <h2>Отправь электронную открытку своему коллеге!</h2>
            <h3>Выбери открытку и она придет на почту одному из сотрудников</h3>
            <div>
                {isLoading ?
                    <Loader/>
                    :
                    images ?
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1}
                            onSlideChange={(swiper: SwiperType) => console.log("on change")}
                            onSwiper={(swiper: SwiperType) => console.log(swiper)}
                            navigation={{
                                enabled: true,
                            }}
                            centeredSlides={true}
                        >
                            {images.map((url, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                    >
                                        <img src={url} alt=""/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        : <ErrorMessage/>
                }
            </div>
            <Button
                variant={"primary"}
            >
                Отправить открытку
            </Button>
        </div>
    )
}

export default Postcards