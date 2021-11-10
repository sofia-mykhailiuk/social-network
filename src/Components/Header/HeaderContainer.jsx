import Header from "./Header";
import {connect} from "react-redux";
import React from "react";
import {setAuthUserData, setCurrentUser} from "../../Redux/auth-reducer";
import {authAPI, profileAPI} from "../../api/api";

class HeaderCContainer extends React.Component {
    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAuthUserData(id, email, login);
                profileAPI.getProfile(this.props.userId).then(data => {
                    this.props.setCurrentUser(data)
                })
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        currentUser: state.auth.currentUser
    };
};

const HeaderContainer = connect(mapStateToProps, {setAuthUserData, setCurrentUser})(HeaderCContainer);

export default HeaderContainer;
