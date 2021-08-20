import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.allContent}>
            <ProfileInfo state={props.state}/>
            <MyPosts state={props.state}
                     currentUser={props.currentUser}
                     dispatch={props.dispatch}/>

        </div>
    );
}

export default Profile