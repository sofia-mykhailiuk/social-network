import Header from "./Header";
import {connect} from "react-redux";
import React from "react";
import {logout} from "../../Redux/auth-reducer";

class HeaderCContainer extends React.Component {

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

const HeaderContainer = connect(mapStateToProps, {logout})(HeaderCContainer);

export default HeaderContainer;
