import axios from "axios"
import React from "react"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import { response } from "../classes/ModalData"
import ModalCards from "../components/ModalForm/ModalCards"
import CustomizeButton from "../components/ui-components/buttons/CustomizeButton"
import InputField from "../components/ui-components/InputField"
import ModalHeading from "../components/ui-components/ModalHeading"
import Subtitle from "../components/ui-components/typography/Subtitle"
import Login from "./Login"

import SimpleReactValidator from "simple-react-validator"

export default class SignUp extends React.Component{
    modal: React.RefObject<HTMLDivElement>
    validator: SimpleReactValidator
    constructor(props: any){
        super(props)
        this.modal = React.createRef()
        this.validator = new SimpleReactValidator()
    }

    state = {
        fullname: '',
        first_name:  '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
        loginIn: false,
        confimPassword: false,
        responseMessage: '',
        responseStatus: 0,
        showSpinner: false
    }

    showLogIn(){
        this.setState({
            loginIn : !this.state.loginIn
        })
        this.toogleModal()
    }

    confirmPassword(){
        this.setState({
            confimPassword: !this.state.confimPassword
        })
        this.toogleModal()
    }

    
    setresponseStatusAndMessage(status: any, message: any){
        this.setState({
            responseMessage: message,
            responseStatus: status
        })
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
            this.signUp()
        }else{
            this.validator.showMessages()
            this.forceUpdate()
        }
    }


    signUp(){
        console.log("this is the user fullname "+this.state.fullname)

        this.showSpinner()

        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/auth/register', 
                {
                    first_name:  this.state.first_name,
                    last_name : this.state.last_name,
                    phone: this.state.phone,
                    email:  this.state.email,
                    password: this.state.password
                })
                .then((res: any) => {
                    console.log('This is the data', res.data)
                    this.setresponseStatusAndMessage(res.status ,res.data.message + '\n Redirecting you to login page to login')
                    // this.showSpinner()
                    setTimeout(() =>{ this.showLogIn()}, 3000)})
                .catch((err) => {
                    console.log(err)
                    this.setresponseStatusAndMessage("err", err.message)
                    this.showSpinner()
                })
    }

    handleuserNameChanged(event: { target: { value: string } }){
        this.setState({fullname: event.target.value})
        var [first_name, last_name ] = event.target.value.split(" ")
        this.setState({first_name: first_name})
        this.setState({last_name : last_name})
        
    }

    handleuserEmailChanged(event: { target: { value: string } }){
        this.setState({email:  event.target.value})
    }

    handleuserPasswordChanged(event: { target: { value: string } }){
        this.setState({password:  event.target.value})
    }

    handleUserPhone(event: { target: { value: string } }){
        this.setState({phone: event.target.value})
    }

    render(){
            return(
                <div className="modal-container">
                <div className="modal show-modal" ref={this.modal}>
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
                                            type={"Name"} 
                                            placeholder={"Full Name"}  
                                            value={this.state.fullname}   
                                            onChange= {this.handleuserNameChanged.bind(this)}         
                                        />
                                        {this.validator.message('full name', this.state.fullname, 'required|alpha_space', {className: 'error-message'})}
                                    </div>
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
                                    <div>
                                        <InputField 
                                            type={"Phone No"} 
                                            placeholder={"Phone No"}     
                                            value={this.state.phone}
                                            onChange={this.handleUserPhone.bind(this)}           
                                        />
                                        {this.validator.message('phone', this.state.phone, 'required|phone', {className: 'error-message'})}
                                    </div>
                                    <Subtitle
                                        text="By clicking the SignUp button below, you agree to
                                         Patricia's terms and service.
                                        "
                                        weight="500"
                                     />

{
                                    this.state.responseStatus === 200? <SuccessMessageText>{ this.state.responseMessage}</SuccessMessageText> 
                                    :   <ErrorMessageText>{ this.state.responseMessage}</ErrorMessageText>

                                }
                                    
                                </EditSection>

                                
                                {this.state.showSpinner ? <LoaderContainer>
                                    <Loader
                                        type="Oval"
                                        color="green"
                                        height={40}
                                        width={40}                                 
                                        // visible={this.state.showSpinner}
                                    // timeout={3000} //3 secs
                                    />
                                </LoaderContainer> :  
                                    <CustomizeButton
                                        width={"134px"} 
                                        height={"44px"} 
                                        color={"white"} 
                                        backgroundColor={"#010066"} 
                                        buttonText={"SignUp"}  
                                        onClick={this.validateForm.bind(this)}  
                                        
                                    />
                                }
                                
                                <p className="login-text">Already a member? 
                                        <span className="login-click-text pointer"
                                            onClick={this.showLogIn.bind(this)}
                                        > Login</span></p>
                            </ClassContainer>
                    </div>
                </div>
                {
                    this.state.loginIn ? <Login/> : <div style={{display: `none`}}/>
                }
                {
                    this.state.confimPassword ? <ModalCards response={response[0].confirmEmailAddress}/> : <div style={{display: `none`}}/>
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

const SuccessMessageText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: green !important;
`


const ErrorMessageText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    /* Swift gray */
    color: red !important;;
`


const LoaderContainer = styled.p`
    max-width: 50px;
    margin: auto;
`