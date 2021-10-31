import { useState } from "react"
import styled from "styled-components"
import Login from "../../authentication/Login"

type props ={
    class: string
}

const LoginText : React.FC<props> = (props) => {
    const [isLogin, setisLogin] = useState(false)

    function showLogin(){
        setisLogin(!isLogin)
    }

    return(
        <div>
            <Text 
                className="text-button login-button"
                onClick={showLogin}
            >
                Login
            </Text>
            {
                isLogin ? <Login /> : <div style={{display: `none`}} />
            }
        </div>
    )
}


export default LoginText 

const Text = styled.p`
    margin: 20px 60px 0px 20px !important;
`