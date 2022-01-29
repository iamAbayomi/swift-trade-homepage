import styled from "styled-components"
import CustomizeButton from "../components/ui-components/buttons/CustomizeButton"
import InputField from "../components/ui-components/InputField"


function ForgotPassword(){
    return(
        <Contents>
            <p className="light-heading">Please enter your email address to reset your password</p>
            <InputField 
                type={"email"} 
                placeholder={"Email"}              
                value={""}
                onChange={()=> {}}
            />
            <CustomizeButton 
                width={"150px"} 
                height={"40px"} 
                color={"white"} 
                backgroundColor={"#010066"} 
                buttonText={"Send"}
                margin="20px 10px 10px 0px"    
            />
        </Contents>
    )
}

export default ForgotPassword

const Contents = styled.div`
    margin: 20px 20px;
`