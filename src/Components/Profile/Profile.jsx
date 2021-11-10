import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import "./Profile.css"
import React from "react";

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div >
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
