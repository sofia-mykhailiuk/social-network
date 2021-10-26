import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = () => {
    return (
        <div className={classes.friends}>
            Friends
            <div className={classes.findFriends}>
                <NavLink to='/users' activeClass={classes.activeLink}>Find friends</NavLink>
            </div>
        </div>
    );
}

export default Friends