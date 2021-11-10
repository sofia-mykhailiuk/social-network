import "./User.css"
import userAvatar from "../../../assets/images/no-image-user-1536x1536.jpeg"
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../api/api";

const User = (props) => {
    const getButtonState = () => {
        return props.followingInProgress.some(id => id === props.state.id)
    }

    return (
        <div className={`userCard shadowCard`}>
            <div className={`avatar`}>
                <NavLink to={'/profile/' + props.state.id}>
                    <img src={props.state.photos.large != null ? props.state.photos.large : userAvatar} alt=""/>
                </NavLink>
            </div>
            <div className={'userDescription'}>
                <div>
                    <div className='header-text'>
                        {`${props.state.name}`}
                    </div>
                    <div className={`subheader-text`}>
                        {`props.state.location.city, props.state.location.country`}
                    </div>
                </div>
                <br/>
                <div className={`text userStatus`}>
                    {props.state.status}
                </div>
            </div>
            <div className={`buttonsContainer custom-button`}>
                <button disabled={getButtonState()}
                        id='toggle-follow' className={`followButton ${getButtonState() ? 'disabled' : ''}`}
                        onClick={() => {
                            props.toggleFollowingProgress(true, props.state.id)
                            props.state.followed ?
                                followAPI.unfollow(props.state.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.toggleFollow(props.state.id)
                                    }
                                    props.toggleFollowingProgress(false, props.state.id)
                                }) :
                                followAPI.follow(props.state.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.toggleFollow(props.state.id)
                                    }
                                    props.toggleFollowingProgress(false, props.state.id)
                                })
                        }}>
                    {props.state.followed ? 'Unfollow' : 'Follow'}
                </button>
                <button className={'sendButton'}>Send Message</button>
            </div>
        </div>
    )
};

export default User
