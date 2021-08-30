import React from 'react'


function SignUp(){
    return(
        <div>
            <p>Sign Up</p> 
            <p>There's no change upon registration</p>
            <input name="fullname" className=" " placeholder="Full Name" />
            <input name="email" className=" " placeholder="Full Name" />
            <input name="password" className=" " placeholder="password" />
            <input name="confirmpassword" className="" placeholder="confirmpassword" />
            <button>SIGNUP</button>
            <p>By clicking the SignUp button below, you agree to Patricia terms and service. <span>Sign Up</span></p>
            <p>Already a member? <span>Login</span> </p>
        </div>
    )
}
