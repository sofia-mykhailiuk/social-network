import Header from "./Header";
import {connect} from "react-redux";
import React from "react";
import {getAuth, logout} from "../../Redux/auth-reducer";

class HeaderCContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
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
        currentUser: state.profilePage.currentUser
    };
};

const HeaderContainer = connect(mapStateToProps, {getAuth, logout})(HeaderCContainer);

export default HeaderContainer;
