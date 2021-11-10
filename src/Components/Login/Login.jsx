import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {Input} from "../common/FormControls/Input";
import "./Login.css"
import {required} from "../../utils/validators";

const LoginForm = (props) => {
    const { handleSubmit, pristine, submitting } = props
    const buttonStyle = {
        boxSizing: "border-box",
        height: "35px",
        width: "260px",
        borderRadius: "8px",
        marginTop: "10px",
        color: "#5181b8"
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <Field name='login' placeholder='login' component={Input}  validate={[required]}/>
        </div>
        <div>
            <Field name='password' placeholder='password' component={Input}  validate={[required]}/>
        </div>
        <div>
            <Field name='rememberMe' component='input' type='checkbox' />remember me
        </div>

        <button style={buttonStyle} disabled={pristine || submitting}>Login</button>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login-form"
})(LoginForm)

const Login = () => {
    const onSubmit = (formData, dispatch) => {
        console.log(formData)
        dispatch(reset("login-form"))
    }
    return <div className="login-wrapper">
        <div className='shadowCard login-card'>
            <h1 style={{color:"#5181b8"}}>LogIn</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
}

export default Login