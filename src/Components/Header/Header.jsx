import "./Header.css";
import {NavLink} from "react-router-dom";
import userAvatar from "../../assets/images/no-image-user-1536x1536.jpeg"
import React, {useEffect} from "react";

const Header = (props) => {
    let image = userAvatar;
    useEffect(() => {
        if(props.currentUser) {
            image = props.currentUser.photos.large ? props.currentUser.photos.large : userAvatar
        }
    }, [props.currentUser])

    return (
        <header className="header cardWrapper">


            {props.isAuth ?
                <div className="currentUser">
                    <button onClick={props.logout}>Log out</button>
                    <span>
                    {props.login}
                    </span>
                    <img className="avatar"
                         src={image}
                    alt=''/>
                </div> :
                <div className="loginBlock">
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}
        </header>
    );
};

export default Header;
