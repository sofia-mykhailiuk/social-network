import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={classes.allContent}>
            <ProfileInfo state={props.state}/>
            <MyPosts posts={props.state.posts} state={props.currentUser}/>
        </div>
    );
}

export default Profile