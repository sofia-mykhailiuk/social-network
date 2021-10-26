import './Friends.css';
import {NavLink} from "react-router-dom";

const Friends = () => {
    return (
        <div className={`usersWrapper`}>
            <div className='findFriends'>
                <NavLink to='/users' activeClassName='activeLink'>Find friends</NavLink>
            </div>
        </div>
    );
}

export default Friends