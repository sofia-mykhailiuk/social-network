import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = (props) => {
    const [userId, setUserId] = useState(props.match.params.userId)

    useEffect(() => {
        if(props.match.params.userId) {
            setUserId(props.match.params.userId)
        } else {
            setUserId(props.match.params.userId)
        }
        if (!userId && props.isAuth) {
            props.getProfile(props.authorizedUserId)
            props.getUserStatus(props.authorizedUserId)
        } else if (userId) {
            props.getProfile(userId)
            props.getUserStatus(userId)
        }
        if(!userId && !props.authorizedUserId){
            props.history.push('/login')
        }
    }, [props.match.params.userId, props.isAuth])
    return <Profile {...props} profile={props.profile} updateStatus={props.updateUserStatus}/>
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
    withRouter
    // withAuthRedirect
)(ProfileContainer)
