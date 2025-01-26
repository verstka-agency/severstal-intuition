import React from 'react'

import ReactModal from 'react-modal'
import './Modal.scss'

const Modal: React.FC<ReactModal.Props> = (props) => {
    const { isOpen, children, onRequestClose } = props

    const modalWrapperStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 999,
            borderRadius: '16px',
            border: 'none',
            padding: 0
        },
    };

    return (
        <ReactModal
            onRequestClose={onRequestClose}
            isOpen={isOpen}
            style={modalWrapperStyles}
        >
            {children}
        </ReactModal>
    )
}

export default Modal