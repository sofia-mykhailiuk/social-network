import "./Header.css";
import {NavLink} from "react-router-dom";
import userAvatar from "../../assets/images/no-image-user-1536x1536.jpeg"

const Header = (props) => {
    return (
        <header className="header cardWrapper">
            {props.isAuth ?
                <div className="currentUser">
                    <img className="avatar"
                         src={props.currentUser.photos.large ? props.currentUser.photos.large : userAvatar}/>
                    <span>
                    {props.login}
                    </span>
                </div> :
                <div className="loginBlock">
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}
        </header>
    );
};

export default Header;
