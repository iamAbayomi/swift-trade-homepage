import axios from "axios"
import React from "react"
import { Router } from "react-router"
import styled from "styled-components"
import { useHistory } from "react-router"
import CustomizeButton from "../components/ui-components/buttons/CustomizeButton"
import InputField from "../components/ui-components/InputField"
import ModalHeading from "../components/ui-components/ModalHeading"
import Subtitle from "../components/ui-components/typography/Subtitle"
import SignUp from "./Signup"
import Resetpassword from "./ResetPassword"
import ModalCards from "../components/ModalForm/ModalCards"
import { response } from "../classes/ModalData"

import {withRouter} from 'react-router-dom'
import Loader from "react-loader-spinner"

import SimpleReactValidator from "simple-react-validator"


// export const Component = withRouter(({history, location}) => {

// }) 


export default class Login extends  React.Component{
    
    modal: React.RefObject<HTMLDivElement>
    history: any
    validator: SimpleReactValidator
    constructor(props: any){
        super(props)
        this.modal = React.createRef()       
        this.validator = new SimpleReactValidator()
    }


    state = {
        email: '',
        password: '',
        signUp: false,
        resetPassword: false,
        responseMessage: '',
        responseStatus: 0,
        showSpinner: false
        
    }

    componentWillUnmount(){
        
    }

    showSignUp(){
        this.setState({
            signUp: !this.state.signUp
        })
        this.toogleModal()
    }
    
    showResetPassword(){
        this.setState({
            resetPassword: !this.state.resetPassword
        })
        this.toogleModal()
    }

    setresponseStatusAndMessage(status: any, message: any){
        this.setState({responseMessage: message,responseStatus: status})
        this.showSpinner()
    }

    toogleModal(){
        this.modal.current?.classList.toggle('show-modal')
    }

    useThisModalHere(modal: string){
        console.log(modal)
    }

    showSpinner(){
     this.setState({showSpinner : !this.state.showSpinner})   
    }

    validateForm(){
        if(this.validator.allValid()){
            this.login()
        }else{
            this.validator.showMessages()
            this.forceUpdate()
        }
    }

    login(){
        this.showSpinner()
        
        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then((res: any) => {
            console.log('This is the data', res)
            window.location.href = `https://swift-user-dashboard.netlify.app/token/${res.data.data}`
            console.log(res.status)
            this.setresponseStatusAndMessage(res.status ,res.data.message)
            
        })
        .catch((err)=>{
            console.log(err)
            this.setresponseStatusAndMessage("err", err.message)
        })
        console.log(this.state.email)
    }


    handleuserEmailChanged(event: { target: { value: string } }){
        this.setState({email:  event.target.value})
    }

    handleuserPasswordChanged(event: { target: { value: string } }){
        this.setState({password:  event.target.value})
    }


    render(){
        
            return(
            <div className="modal-container" >
                <div className="modal show-modal" ref={this.modal} >
                    <div className="">
                        <div className="modal-content">
                        <span className="close-button" onClick={this.toogleModal.bind(this)}>x</span>                                
                        <ClassContainer className="">
                                <ModalHeading
                                    text="Welcome!"
                                />
                                <Subtitle 
                                    text="Kindly fill in your login details to proceed"
                                    weight="500"
                                />
                                <EditSection>
                                    <div>
                                        <InputField 
                                            type={"Email"} 
                                            placeholder={"Email"}   
                                            value={this.state.email}     
                                            onChange={this.handleuserEmailChanged.bind(this)}        
                                        />
                                        {this.validator.message('email', this.state.email, 'required|email', {className: 'error-message'})}
                                    </div>
                                    <div>
                                        <InputField 
                                            type={"Password"} 
                                            placeholder={"Password"}   
                                            value={this.state.password}    
                                            onChange={this.handleuserPasswordChanged.bind(this)}                 
                                        />
                                        {this.validator.message('password', this.state.password, 'required|min:5', {className: 'error-message'})}
                                    </div>
                                    <ForgotPasswordText 
                                        onClick={this.showResetPassword.bind(this)}> 
                                        I forgot password 
                                    </ForgotPasswordText>
                                </EditSection>
                                {
                                    this.state.responseStatus === 200? <SuccessMessageText>{ this.state.responseMessage}</SuccessMessageText> 
                                    :   <ErrorMessageText>{ this.state.responseMessage}</ErrorMessageText>

                                }

                                <LoaderContainer>
                                    <Loader
                                        type="ThreeDots"
                                        color="rgb(1, 0, 102)"
                                        height={50}
                                        width={50}                                 
                                        visible={this.state.showSpinner}
                                    // timeout={3000} //3 secs
                                    />
                                </LoaderContainer>

                                <CustomizeButton
                                    width={"134px"} 
                                    height={"44px"} 
                                    color={"white"} 
                                    backgroundColor={"#010066"} 
                                    buttonText={"Login"}   
                                    onClick= {this.validateForm.bind(this)}
                                />

                                <p className="login-text">Don't have an account yet? <span className="login-click-text" onClick={this.showSignUp.bind(this)}> Sign Up</span></p>
                                

                            </ClassContainer>
                    </div>
                    </div>
                </div>
                
                {
                    this.state.signUp ? <SignUp/> : <div style={{display: `none`}}/>
                }

                {
                    this.state.resetPassword ? <ModalCards response={response[1].resetPassword}/> : <div style={{display: `none`}}/>
                                    
                } 
            </div>
                
            )
        }

        
}




const ClassContainer = styled.div `
    // width: 500px;
    // height: 200px;
    padding:  0px 20px 9px 20px;
    box-sizing: border-box;

`

const EditSection = styled.p`
    display: block;
    width: 300px;
    margin: 40px auto 20px;
`

const ForgotPasswordText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    text-align: right;
    /* Swift gray */
    color: #828282;
`


const SuccessMessageText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: green;
`


const ErrorMessageText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: red;
`

const LoaderContainer = styled.p`
    max-width: 50px;
    margin: auto;
`