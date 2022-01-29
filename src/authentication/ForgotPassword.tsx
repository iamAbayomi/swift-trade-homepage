import { ChangeEvent, useRef, useState } from "react"
import SimpleReactValidator from "simple-react-validator"
import styled from "styled-components"
import { useCustomAxios } from "../classes/Utilities"
import CustomizeButton from "../components/ui-components/buttons/CustomizeButton"
import InputField from "../components/ui-components/InputField"


function ForgotPassword(){
    const [email, setEmail] = useState("")
    const simpleValidator = useRef( new SimpleReactValidator())

    function onEmailChanged(event: ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    async function sendResetLink(){
        let body = {email}
        if(simpleValidator.current.allValid()){
            const {response, error} = await useCustomAxios('POST', 'user/password/forgot', body)
        }
        else{
            simpleValidator.current.showMessages()
        }
    }


    return(
        <Contents>
            <HeadingText className="light-heading">Please enter your email address to reset your password</HeadingText>
            <InputField 
                type={"email"} 
                placeholder={"Email"}              
                value={email}
                onChange={onEmailChanged}
            />
            {simpleValidator.current.message('email', email, 'required', {className: 'error-message'})}
            <CustomizeButton 
                width={"150px"} 
                height={"40px"} 
                color={"white"} 
                backgroundColor={"#010066"} 
                buttonText={"Send"}
                margin="20px 10px 10px 0px"
                onClick={sendResetLink}
            />
        </Contents>
    )
}

export default ForgotPassword

const Contents = styled.div`
    margin: 20px 20px;
`
const HeadingText = styled.p`
    margin: 20px 0px 40px 0px;
    text-align: left;
`