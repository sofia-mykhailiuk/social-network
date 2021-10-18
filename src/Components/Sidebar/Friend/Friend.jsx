import classes from './Friend.module.css';
import userPhoto from "../../../assets/images/no-image-user-1536x1536.jpeg";

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <div className={`avatar`}>
                <img src={ props.state.photos.large != null ? props.state.photos.large : userPhoto } alt=""/>
            </div>
            <div>
                {props.state.name}
            </div>
        </div>
    );
}

export default Friend