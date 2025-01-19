import { useState, useImperativeHandle, forwardRef } from 'react'
import './Modal.scss'
import { FiX } from 'react-icons/fi'
import { Button } from '@utils/Utils'

const Modal = ({ text, title, btn }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true)
        },
        close: () => {
            setIsOpen(false)
        },
    }))

    return (
        isOpen && (
            <div
                className="modal-layer"
                onClick={e => {
                    if (e.target.classList.contains('modal-layer'))
                        setIsOpen(false)
                }}
            >
                <div className="modal">
                    <FiX
                        className="modal__close"
                        onClick={() => setIsOpen(false)}
                    />
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <Button
                        text={btn.text}
                        appearance={btn.appearance}
                        loading={btn.loading}
                        clickHandler={btn.clickHandler}
                    />
                </div>
            </div>
        )
    )
}

export default forwardRef(Modal)
