import { useState } from 'react';
import { useQuery } from "@tanstack/react-query"
import Button from '../../components/Button/Button';
import './Postcards.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/swiper-bundle.css';
import { Navigation } from "swiper/modules";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

// TODO: replace with actual data
const shareData = {
    title: "Северсталь х БУДУ",
    text: "Приглашаю тебя поиграть в классную игру!",
    url: "https://ya.ru",
};

const Postcards = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

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
            ]

            return postCards
        }
    })

    const handleShare = () => {
        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log('Успешно поделились'))
                .catch((error) => console.log('Ошибка при попытке поделиться:', error));
        } else {
            alert('Ваш браузер не поддерживает Web Share API.');
        }
    };

    return (
        <div className="postcards">
            <div className='postcards__top'>
                <h2 className='postcards__top__heading'>Открытка любимому коллеге</h2>
                <h3 className='postcards__top__description'>Выберите открытку — и мы отправим её,<br /> кому скажете!</h3>
                <Button variant="primary" className='postcards__top__button' onClick={handleShare}>
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
                        setCurrentSlideIndex(swiper.realIndex + 1);
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
                            spaceBetween: 200,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {postCards.map((url, index) => (
                        <SwiperSlide key={index} className='postcard__slide'>
                            {({ isActive }) => (
                                <>
                                    <div className={!isActive ? 'postcard__slide_hidden' : 'postcard__slide__index'}>{`${currentSlideIndex}/${postCards.length}`}</div>
                                    <div className={isActive ? 'active' : ''}>
                                        <img src={url} alt="severstal" className='postcard__slide__image' />
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
    );
};

export default Postcards;