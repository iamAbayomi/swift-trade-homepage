import axios from "axios"
import React from "react"
import styled from "styled-components"
import { response } from "../classes/ModalData"
import ModalCards from "../components/ModalForm/ModalCards"
import CustomizeButton from "../components/ui-components/buttons/CustomizeButton"
import InputField from "../components/ui-components/InputField"
import ModalHeading from "../components/ui-components/ModalHeading"
import Subtitle from "../components/ui-components/typography/Subtitle"
import Login from "./Login"


export default class SignUp extends React.Component{
    modal: React.RefObject<HTMLDivElement>
    constructor(props: any){
        super(props)
        this.modal = React.createRef()
    }

    state = {
        fullname: '',
        first_name:  '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
        loginIn: false,
        confimPassword: false
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

    toogleModal(){
        this.modal.current?.classList.toggle('show-modal')
    }

    useThisModalHere(modal: string){
        console.log(modal)
    }

    signUp(){
        console.log("this is the user fullname "+this.state.fullname)

        axios.post('https://swift-trade-v1.herokuapp.com/api/v1/auth/register', 
                {
                    first_name:  this.state.first_name,
                    last_name : this.state.last_name,
                    phone: this.state.phone,
                    email:  this.state.email,
                    password: this.state.password
                })
                .then((res)=>{
                    console.log('This is the data', res.data)
                    this.confirmPassword()
                })
                .catch((err) => {
                    console.log(err)
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
                                    </div>
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
                                    <div>
                                        <InputField 
                                            type={"Phone No"} 
                                            placeholder={"Phone No"}     
                                            value={this.state.phone}
                                            onChange={this.handleUserPhone.bind(this)}           
                                        />
                                    </div>
                                    <Subtitle
                                        text="By clicking the SignUp button below, you agree to
                                         Patricia's terms and service.
                                        "
                                        weight="500"
                                     />
                                    
                                </EditSection>
                                    <CustomizeButton
                                        width={"134px"} 
                                        height={"44px"} 
                                        color={"white"} 
                                        backgroundColor={"#010066"} 
                                        buttonText={"SignUp"}  
                                        onClick={this.signUp.bind(this)}  
                                        
                                    />
                                
                                <p className="login-text">Already a member? 
                                        <span className="login-click-text"
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
