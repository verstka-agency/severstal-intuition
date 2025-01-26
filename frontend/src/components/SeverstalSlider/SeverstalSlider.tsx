import React from 'react'
import { slides } from "src/components/SeverstalSlider/constants"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import './SeverstalSlider.scss'
import { useMediaQuery } from "src/hooks"

interface SeverstalSliderProps extends React.HTMLAttributes<HTMLDivElement> {
}

const SeverstalSlider: React.FC<SeverstalSliderProps> = (props) => {
    const { className } = props

    const styles = ["severstal-slider", className]

    return (
        <div className={styles.filter(Boolean).join(" ")}>
            <Swiper
                slidesPerView={3}
                spaceBetween={16}
                centeredSlides={true}
                initialSlide={1}
            >
                {slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={"severstal-slider__slide"}>
                                <div className={"severstal-slider__slide-border"}></div>
                                <img
                                    src="/logo/logo-small.svg"
                                    className={"severstal-slider__slide-logo"}
                                    alt=""
                                />
                                <h3 className={"h3 white severstal-slider__slide-text"}>
                                    {slide}
                                </h3>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default SeverstalSlider