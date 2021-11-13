import React from "react";
import {Field, reduxForm} from "redux-form";
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
        marginTop: "10px"
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
        {props.error &&
            <div style={{color: "#AD7CB5", fontStyle: "italic", textAlign: "center"}}>{props.error}</div>}
    </form>
}

const LoginReduxForm = reduxForm({
    form: "loginForm"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className="login-wrapper">
        <div className='shadowCard login-card'>
            <h1 style={{color: "#AD7CB5"}}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)
