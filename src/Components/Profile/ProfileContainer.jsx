import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserProfile} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        !userId ? this.props.getUserProfile() : this.props.getProfile(userId)
    }

    render() {
        if(!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }
        return <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile, getUserProfile})(WithUrlDataContainerComponent)
