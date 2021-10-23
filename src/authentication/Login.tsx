import axios from "axios"
import React from "react"
import styled from "styled-components"

import CustomizeButton from "../components/ui-components/buttons/CustomizeButton"
import InputField from "../components/ui-components/InputField"
import ModalHeading from "../components/ui-components/ModalHeading"
import Subtitle from "../components/ui-components/typography/Subtitle"
import SignUp from "./Signup"


export default class Login extends React.Component {
    modal: React.RefObject<HTMLDivElement>
    constructor(props: any){
        super(props)
        this.modal = React.createRef()
    }

    state = {
        email: '',
        password: '',
        signUp: false
    }

    
    showSignUp(){
        // this.setState( (item: any) => 
        // ({   signUp : !item.signUp })
        // )
    }
    

    toogleModal(){
        this.modal.current?.classList.toggle('show-modal')
    }

    useThisModalHere(modal: string){
        console.log(modal)
    }

    login(){
        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            console.log('This is the data', res.data)
        })
        .catch((err)=>{
            console.log(err)
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
                                            type={"Email"} 
                                            placeholder={"Email"}   
                                            value={this.state.email}     
                                            onChange={this.handleuserEmailChanged.bind(this)}        
                                        />
                                    </div>
                                    <div>
                                        <InputField 
                                            type={"Password"} 
                                            placeholder={"Password"}   
                                            value={this.state.password}    
                                            onChange={this.handleuserPasswordChanged.bind(this)}                 
                                        />
                                    </div>
                                    <ForgotPasswordText> I forgot password </ForgotPasswordText>
                                </EditSection>
                                <CustomizeButton
                                    width={"134px"} 
                                    height={"44px"} 
                                    color={"white"} 
                                    backgroundColor={"#010066"} 
                                    buttonText={"Login"}   
                                    onClick= {this.login.bind(this)}
                                />

                                <p className="login-text">Don't have an account yet? <span className="login-click-text" onClick={this.showSignUp}> Sign Up</span></p>

                                {
                                    this.state.signUp ? <SignUp/> : <div style={{display: `none`}}/>
                                }

                            </ClassContainer>
                    </div>
                </div>
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