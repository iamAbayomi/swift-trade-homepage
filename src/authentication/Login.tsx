import React from 'react'


function Login (){
    return(
        <div>
           <p>Welcome</p> 
           <p>Kindly fill in your login details to proceed</p>
           <div>
               <input name=" " className=" " placeholder="email" />
               <input name=" " className=" " placeholder="password" />
               <button>LOGIN</button>
               <p>Don't have an account yet? <span>Sign Up</span></p>
           </div>
        </div>
    )
}

export default Login;