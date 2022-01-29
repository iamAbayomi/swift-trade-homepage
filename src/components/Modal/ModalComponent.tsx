import { useState } from 'react'
import '../ModalForm/ModalClass.css'

type props = {
     modalContent: any
}

const ModalComponent: React.FC<props> = (props)=>{
    const [showModal, setShowModal ] = useState(true)
    function closeModal(){
        let tempModal = showModal
        setShowModal(!tempModal)
    }
    return(
        <div className="modal-container">
            <div className={`modal ${showModal ? "show-modal" : ""}`}>
                <div className="modal-content">
                    <span className="close-button" onClick={closeModal}>x</span>
                    <div className="modal-subcontents">
                        {props.modalContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent