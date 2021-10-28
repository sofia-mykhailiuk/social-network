import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 20154
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateUserStatus}/>
    }
}
/*
const ProfileContainer = (props) => {
    useEffect(()=>{
        let userId = props.match.params.userId
        if(!userId && props.currentUser) {
            userId = props.currentUser.userId
            props.getProfile(userId)
            props.getUserStatus(userId)
        }
    },[props.currentUser])


    return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateUserStatus}/>
}*/

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        currentUser: state.profilePage.currentUser,
        status: state.profilePage.status
    }
};

export default compose(
    connect(mapStateToProps, {getProfile,getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)