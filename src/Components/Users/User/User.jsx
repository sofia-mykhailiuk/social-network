import "./User.css"
import userPhoto from "../../../assets/images/no-image-user-1536x1536.jpeg"

const User = (props) => {
    return (
        <div className={`userCard shadowCard`}>
            <div className={`avatar`}>
                {/*<img src={props.state.img} alt=""/>*/}
                <img src={ props.state.photos.large != null ? props.state.photos.large : userPhoto } alt=""/>
            </div>
            <div className={'userDescription'}>
                <div>
                    <div className='header-text'>
                        {/*{`${props.state.name} ${props.state.surname}`}*/}
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
                <button id='toggle-follow' onClick={() => {
                    props.toggleFollow(props.state.id)
                }} className={'followButton'}>{props.state.followed ? 'Unfollow' : 'Follow'}</button>
                <button className={'sendButton'}>Send Message</button>
            </div>
        </div>
    )
};

export default User
