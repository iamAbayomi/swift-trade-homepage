import { ChangeEvent, useRef, useState } from "react"
import SimpleReactValidator from "simple-react-validator"
import styled from "styled-components"
import { sendCustomAxios } from "../classes/Utilities"
import CustomizeButton from "../components/ui-components/buttons/CustomizeButton"
import InputField from "../components/ui-components/InputField"


function ForgotPassword(){
    const [email, setEmail] = useState("")
    const [response, setResponse] = useState<any>(null)
    const simpleValidator = useRef( new SimpleReactValidator())

    function onEmailChanged(event: ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    async function sendResetLink(){
        let body = {email}
        if(simpleValidator.current.allValid()){
            const {response, error} = await sendCustomAxios('POST', 'user/password/forgot', body)
            setResponse(response)
            console.log('response',response, error)
        }
        else{
            simpleValidator.current.showMessages()
        }
    }


    return(
        <Contents>
            <HeadingText className="light-heading">Please enter your email address to reset your password</HeadingText>
            <InputField 
                width="210px"
                height="38px"
                type={"email"} 
                placeholder={"Email"}              
                value={email}
                onChange={onEmailChanged}
                onBlur={()=> simpleValidator.current.showMessageFor('email')}
            />
            {simpleValidator.current.message('email', email, 'required', {className: 'error-message-left'})}
            
            {response ? <p className="success-message-left"> {response.data.message}  </p>
                : <p className="error-message"></p>
            }
            <CustomizeButton 
                width={"150px"} 
                height={"40px"} 
                color={"white"} 
                backgroundColor={"#010066"} 
                buttonText={"Send"}
                margin="40px auto 10px auto"
                onClick={sendResetLink}
            />
            
            
        </Contents>
    )
}

export default ForgotPassword

const Contents = styled.div`
    margin: 20px 10px;
    height: 180px;
    width: 240px;
    box-sizing: border-box;
    
`
const HeadingText = styled.p`
    margin: 20px 0px 20px 0px;
    text-align: center;
`