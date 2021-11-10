import './ProfileInfo.css'
import userPhoto from "./../../../assets/images/no-image-user-1536x1536.jpeg"
import lookingForAJob from "./../../../assets/looking-for-a-job.svg"
import githubLogo from "./../../../assets/github-logo.png"
import vkLogo from "./../../../assets/vk-logo.png"
import fbLogo from "./../../../assets/fb-logo.png"
import instLogo from "./../../../assets/inst-logo.png"
import twitterLogo from "./../../../assets/twitter-logo.png"
import websiteLogo from "./../../../assets/websites-logo.png"
import youtubeLogo from "./../../../assets/youtube-logo.png"
import linkLogo from "./../../../assets/link-logo.png"

const ProfileInfo = (props) => {
    return (
        <div className='profile-info-container'>
            <div className='profile-background-image'>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div className='user-avatar'>
                <img className='avatar profile-avatar'
                     src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt=""/>
                <img className='looking-for-a-job' src={props.profile.lookingForAJob ? lookingForAJob : null}
                     alt=""/>
            </div>
            <div className='description-block'>
                <div className='user-description'>
                    <div className='full-name'>{props.profile.fullName}</div>
                    <div className="user-job">
                        <span>{props.profile.lookingForAJob ? 'Looking for a job!' : null}</span>
                        <br/>
                        <span>Contact me:</span>
                    </div>
                </div>
                <ul className="user-contacts">
                    {props.profile.contacts.github ? <li> <img src={githubLogo} alt=""/> {props.profile.contacts.github}</li> : null}
                    {props.profile.contacts.vk ? <li> <img src={vkLogo} alt=""/> {props.profile.contacts.vk }</li> : null}
                    {props.profile.contacts.facebook ? <li> <img src={fbLogo} alt=""/> {props.profile.contacts.facebook}</li> : null}
                    {props.profile.contacts.instagram ? <li> <img src={instLogo} alt=""/> {props.profile.contacts.instagram}</li> : null}
                    {props.profile.contacts.twitter ? <li> <img src={twitterLogo} alt=""/> {props.profile.contacts.twitter}</li> : null}
                    {props.profile.contacts.website ? <li> <img src={websiteLogo} alt=""/> {props.profile.contacts.website}</li> : null}
                    {props.profile.contacts.youtube ? <li> <img src={youtubeLogo} alt=""/> {props.profile.contacts.youtube}</li> : null}
                    {props.profile.contacts.mainLink ? <li> <img src={linkLogo} alt=""/> {props.profile.contacts.mainLink}</li> :  null}
                </ul>

            </div>
        </div>
    )
}

export default ProfileInfo