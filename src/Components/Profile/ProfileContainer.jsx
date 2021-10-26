import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        !userId ? this.props.getUserProfile() : this.props.getProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

export default compose(
    connect(mapStateToProps, {getProfile, getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)