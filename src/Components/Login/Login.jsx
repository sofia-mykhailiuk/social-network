import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='login' placeholder='login' component='input'/>
        </div>
        <div>
            <Field name='password' placeholder='password' component='input'/>
        </div>
        <div>
            <Field name='rememberMe' component='input' type='checkbox'/>remember me
        </div>

        <button>Login</button>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login-form"
})(LoginForm)


const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login