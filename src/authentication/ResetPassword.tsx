import React from 'react'
import InputField from '../components/ui-components/InputField';


function Resetpassword(){
    return(
        <div>
            <p>Please enter the reset code and your password</p>
            <InputField
                type={""}
                placeholder={""}
                value={""}
                onChange={()=>{}}
            />
            <InputField
                type={""}
                placeholder={""}
                value={""}
                onChange={()=>{}}
            />
        </div>
    )
}

export default Resetpassword;