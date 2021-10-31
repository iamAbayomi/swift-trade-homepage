import { useState } from "react"
import styled from "styled-components"

type props ={
    class: string
}

const LoginText : React.FC<props> = (props) => {
    const [isLogin, setisLogin] = useState(false)

    function showLogin(){

    }

    return(
            <Text 
                className="text-button login-button"
                onClick={showLogin}
            >
                Login
            </Text>

    )
}


export default LoginText 

const Text = styled.p`
    margin: 20px 60px 0px 20px !important;
`