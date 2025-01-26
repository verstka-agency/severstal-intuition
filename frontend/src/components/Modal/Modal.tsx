import React from 'react'
import ReactModal from 'react-modal'

const Modal: React.FC<ReactModal.Props> = (props) => {
    const { isOpen, children, onRequestClose } = props

    return (
        <ReactModal
            onRequestClose={onRequestClose}
            isOpen={isOpen}
            // className={"modal"}
            style={{
                content: {
                    bottom: 'auto',
                    right: 'auto',
                    marginRight: '-50%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridGap: "1.5rem"
                },
            }}
        >
            {children}
        </ReactModal>
    )
}

export default Modal