import InputField from "../components/ui-components/InputField"

function ForgotPassword(){
    return(
        <div>
            <p>Please enter your email to reset your password</p>
            <InputField 
                type={"email"} 
                placeholder={"Email"}              
                value={""}
                onChange={()=> {}}
            />
        </div>
    )
}

export default ForgotPassword