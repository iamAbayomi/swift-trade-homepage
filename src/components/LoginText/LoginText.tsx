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
                className={props.class}
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
    
`