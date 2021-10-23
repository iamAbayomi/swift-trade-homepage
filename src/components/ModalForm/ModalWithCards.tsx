import React from 'react'
import './ModalForm.css'


type CardProperties = {
    response: {
        cardImageSrc : string,
        cardHeadingText: string,
        cardSubtitleText: string,
        cardButtonTrue : boolean
    } | undefined,
    modalContent: string
}



export default class ModalWithCards extends React.Component<CardProperties> {
    modal: React.RefObject<HTMLDivElement>
    
    constructor(props: CardProperties){
        super(props)
        this.modal = React.createRef()

    }
    
    toogleModal(){
        this.modal.current?.classList.toggle('show-modal')
    }

    useThisModalHere(modal: string){
        console.log(modal)
    }

    render(){
        return(
            <div className="modal-container">
                <div className="modal show-modal" ref={this.modal}>
                    <div className="modal-content">
                        <span className="close-button" onClick={this.toogleModal.bind(this)}>x</span>
                        {/* <InformationCard 
                            response = {this.props.response}
                        /> */}
                        {console.log(this.props.modalContent)}
                        {
                            
                    

                            // this.props.modalContent === "CompleteTransaction" ? <CompleteTransaction />
                            // : this.props.modalContent === "UploadPaymentDetails" ? <UploadPaymentDetails/>
                            // : <TransactionCompleted />
                        }
                        
                        {/* <UploadPaymentDetails /> */}
                        {/* <TransactionCompleted/> */}
                    </div>
                </div>
            </div>
        )
    }
}

