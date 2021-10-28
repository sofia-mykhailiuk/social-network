import React from "react";

const LoginForm = () => {
    return <form action="">
        <input type="text" placeholder='login'/>
        <input type="text" placeholder='password'/>
        <input type="checkbox"/>remember me
        <button>Login</button>
    </form>
}


const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login