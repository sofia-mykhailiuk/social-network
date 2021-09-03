import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={classes.allContent}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
