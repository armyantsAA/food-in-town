import React from 'react'

const Modal = ({ children, handleCloseButton }) => {
    return (
        <div className="overlay">
            <div className="close">
                <button onClick={handleCloseButton} className="esc_button">
                    x
                </button>
            </div>
            <div className="modal">{children}</div>
        </div>
    )
}

export default Modal
