import React, { ChangeEvent, useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import styled from 'styled-components';
import { sendCustomAxios } from '../classes/Utilities';
import CustomizeButton from '../components/ui-components/buttons/CustomizeButton';
import InputField from '../components/ui-components/InputField';


function ResetPassword(){
    const [resetCode, setResetCode] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState<any>(null)
    const simpleValidator = useRef( new SimpleReactValidator())
    
    function onResetCodeChanged(event: ChangeEvent<HTMLInputElement>){
        setResetCode(event.target.value)
    }

    function onPasswordChanged(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    async function resetPassword(){
        let body = {code: resetCode, password}
        if(simpleValidator.current.allValid()){
            const {response, error} = await sendCustomAxios('POST', 'user/password/reset', body)
            setResponse(response)
            console.log('response', response, 'error', error)
        }
        else{ simpleValidator.current.showMessages()}
    }

    return(
        <Contents>
            <HeadingText className="light-heading">Please enter the reset code sent to your mail and your new password</HeadingText>
            <InputField
                width="210px"
                height="38px"
                type={"name"}
                placeholder={"Reset Code"}
                value={resetCode}
                onChange={onResetCodeChanged}
                onBlur={()=> simpleValidator.current.showMessageFor('code')}
            />
            {simpleValidator.current.message('code', resetCode, 'required', {className: 'error-message-left'})}

            <InputField
                width="210px"
                height="38px"
                type={"password"}
                placeholder={"Password"}
                value={password}
                onChange={onPasswordChanged}
                onBlur={()=> simpleValidator.current.showMessageFor('password')}
            />
            
            {simpleValidator.current.message('password', password, 'required', {className: 'error-message-left'})}

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
                onClick={resetPassword}
            />
        </Contents>
    )
}

export default ResetPassword;

const Contents = styled.div`
    margin: 20px 10px;
    height: auto;
    width: 240px;
    box-sizing: border-box;
    
`
const HeadingText = styled.p`
    margin: 20px 0px 20px 0px;
    text-align: center;
`