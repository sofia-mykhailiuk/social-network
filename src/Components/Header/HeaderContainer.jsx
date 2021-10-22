import Header from "./Header";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import {setAuthUserData, setCurrentUser} from "../../Redux/auth-reducer";

class HeaderCContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, email, login);
                axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + this.props.userId).then(response => {
                    this.props.setCurrentUser(response.data)
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
