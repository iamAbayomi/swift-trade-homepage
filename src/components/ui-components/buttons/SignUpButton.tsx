import { useState } from "react"
import Login from "../../../authentication/Login"
import SignUp from "../../../authentication/Signup"

type Props = {
    class : string
}

const SignUpButton : React.FC<Props> = (Props) => {
    const [showSignup, setShowSignUp] = useState(false)
    
    function toggleSignUp(){
        setShowSignUp(!showSignup)
    }

    return(
        <div>
            <button
                onClick={toggleSignUp}
                className = {Props.class}
            >
                 GET STARTED
            </button>
            {
                showSignup ? <SignUp  /> : <div style={ {display : `none`}}/>
            }
        </div>
    )
}

export default SignUpButton