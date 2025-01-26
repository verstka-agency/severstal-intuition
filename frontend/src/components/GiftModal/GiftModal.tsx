import React, { useState } from 'react'
import Modal from "src/components/Modal/Modal"
import Button from "src/components/Button/Button"

const GiftModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Button
                onClick={() => {
                    setIsOpen(false)
                }}
            >
                Отлично
            </Button>
            {/*<Modal>*/}
            {/*    <div>*/}

            {/*    </div>*/}
            {/*    <div>*/}

            {/*    </div>*/}
            {/*</Modal>*/}
        </>
    )
}

export default GiftModal