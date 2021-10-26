import "./User.css"
import userAvatar from "../../../assets/images/no-image-user-1536x1536.jpeg"
import {NavLink} from "react-router-dom";

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
                            props.toggleFollow(props.state.id, props.state.followed)
                        }}>
                    {props.state.followed ? 'Unfollow' : 'Follow'}
                </button>
                <button className={'sendButton'}>Send Message</button>
            </div>
        </div>
    )
};

export default User
