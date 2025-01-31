import React from 'react'
import './GiftModal.scss'
import Button from '../Button/Button'
import { ButtonTypeEnum, ButtonVariantsEnum } from "src/types"
import { useState } from 'react'
import Modal from '../Modal/Modal'

const modalData = [
    {
        type: 'action-camera',
        title: "Здорово! Вы выиграли экшн-камеру!",
        description: "Скоро мы с вами свяжемся, чтобы передать приз",
        image: "/modal/go-camera.png",
        button: "Отлично"
    },
    {
        type: 'headphones',
        title: "Здорово! Вы выиграли беспроводные наушники!",
        description: "Скоро мы с вами свяжемся, чтобы передать приз",
        image: "/modal/headphones.png",
        button: "Отлично"
    },
    {
        type: 'sound-speaker',
        title: "Здорово! Вы музыкальную колонку!",
        description: "Скоро мы с вами свяжемся, чтобы передать приз",
        image: "/modal/soundspeaker.png",
        button: "Отлично"
    },
    {
        type: 'altay',
        title: "Воу! Вы выиграли супер-приз – тур на Алтай на двоих",
        description: "Скоро мы с вами свяжемся, чтобы передать приз",
        image: "/modal/altay.png",
        button: "Отлично"
    },
    {
        type: 'attachments',
        image_left: "/modal/altay.png",
        button_left: "Скачать обои",
        image_right: "/modal/stickers.png",
        button_right: "Скачать стикеры",
    },

]

const GiftModal: React.FC = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    //TODO: сюда передать выигрыш (тип подарка)
    const [currentModal, setCurrentModal] = useState(modalData[0])

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Button
                onClick={openModal}
            >
                показать
            </Button>
            <Modal isOpen={isOpen}>
                <div className="gift__modal">
                    <div className="gift__modal__left">
                        <div className="gift__modal__left__title">
                            {currentModal.title}
                        </div>
                        <div className="gift__modal__left__description">
                            {currentModal.description}
                        </div>
                        <div className='gift__modal__left__frame'></div>
                        <Button
                            variant={ButtonVariantsEnum.PRIMARY_NEXT}
                            type={ButtonTypeEnum.SUBMIT}
                            className="gift__modal__button"
                            onClick={closeModal}
                        >
                            {currentModal.button}
                        </Button>
                    </div>
                    <div className="gift__modal__right">
                        <img src={currentModal.image} alt="" />
                    </div>
                    <button className="gift__modal__close" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5507 2.21591C16.0388 1.72776 16.0388 0.936303 15.5507 0.448148C15.0625 -0.0400076 14.2711 -0.0400076 13.7829 0.448148L7.99933 6.23174L2.21591 0.448328C1.72776 -0.0398264 0.936303 -0.0398273 0.448148 0.448328C-0.0400078 0.936483 -0.0400073 1.72794 0.448148 2.21609L6.23156 7.99951L0.448333 13.7827C-0.0398218 14.2709 -0.0398223 15.0624 0.448333 15.5505C0.936488 16.0387 1.72795 16.0387 2.2161 15.5505L7.99933 9.76728L13.7827 15.5507C14.2709 16.0388 15.0623 16.0388 15.5505 15.5507C16.0387 15.0625 16.0387 14.2711 15.5505 13.7829L9.7671 7.99951L15.5507 2.21591Z" fill="#002F6C" />
                        </svg>
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default GiftModal