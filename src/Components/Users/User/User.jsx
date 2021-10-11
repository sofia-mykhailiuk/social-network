import "./User.css"

const User = (props) => {
    return (
        <div className={`userCard shadowCard`}>
            <div className={`avatar`}>
                <img src={props.state.img} alt=""/>
            </div>
            <div className={'userDescription'}>
                <div>
                    <div className='header-text'>
                        {`${props.state.name} ${props.state.surname}`}
                    </div>
                    <div className={`subheader-text`}>
                        {`${props.state.location.city}, ${props.state.location.country}`}
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
