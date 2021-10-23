import React from "react";
import User from "./User/User";
import "./Users.css";

let Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    ;

    return <div className={`usersWrapper panelWrapper`}>
        <div className={'allUsers'}>
            {props.users.map((u) => {
                return <User state={u} toggleFollow={props.toggleFollow} followingInProgress={props.followingInProgress}
                             toggleFollowingProgress={props.toggleFollowingProgress} key={u.id}/>
            })}
        </div>
        <div>
            <button type='submit'>Show more...</button>
        </div>
        <div>
            {pages.map((p, index) => {
                return index < 20 ?
                    <span className={p === props.currentPage && 'selectedPage'} onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span> : null
            })}
        </div>
    </div>
}

export default Users