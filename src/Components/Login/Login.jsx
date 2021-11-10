import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {Input} from "../common/FormControls/Input";
import "./Login.css"
import {email, required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    const {handleSubmit, pristine, submitting} = props
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
            <Field name='email' placeholder='email' component={Input} validate={[required, email]}/>
        </div>
        <div>
            <Field name='password' placeholder='password' component={Input} validate={[required]} type='password'/>
        </div>
        <div>
            <Field name='rememberMe' component='input' type='checkbox'/>remember me
        </div>

        <button style={buttonStyle} disabled={pristine || submitting}>Login</button>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login-form"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData, dispatch) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        dispatch(reset("login-form"))
    }

    if(props.loginError) {
        alert(props.loginError)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className="login-wrapper">
        <div className='shadowCard login-card'>
            <h1 style={{color: "#5181b8"}}>LogIn</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        loginError: state.auth.errorMessage
    }
}

export default connect(mapStateToProps, {login})(Login)
