/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './ModalClass.css'


type CardProperties = {
    response: {
        cardImageSrc : string,
        cardHeadingText: string,
        cardSubtitleText: string,
        cardButtonTrue : boolean
    } | undefined,
}



export default class ModalCards extends React.Component<CardProperties> {
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
                        <div className="modal-contentd">
                          <div className="modal-elements">
                            <img className="modal-image" src={this.props.response?.cardImageSrc} />
                            <p className="modal-heading"> {this.props.response?.cardHeadingText} </p>
                            <p className="modal-subtitle">{this.props.response?.cardSubtitleText}</p>
                         </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

