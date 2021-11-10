import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

/*class ProfileContainer extends React.Component {
    componentDidMount() {
        if(this.props.currentUser){
            let userId = this.props.match.params.userId;
            !userId ? this.props.getProfile(this.props.currentUser.userId) : this.props.getProfile(userId)
        }
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}*/

const ProfileContainer = (props) => {
    useEffect(()=>{
        if(props.match.params.userId) {
            props.getProfile(props.match.params.userId)
        } else if (props.currentUser) {
            props.getProfile(props.currentUser.userId)
        }
    },[props.currentUser])


    return <Profile {...props} profile={props.profile}/>
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        currentUser: state.profilePage.currentUser
    }
};

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)