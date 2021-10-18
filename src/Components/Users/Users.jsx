import React from 'react'
import "./Users.css";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        ;

        return <div className={`usersWrapper panelWrapper`}>
            <div className={'allUsers'}>
                {this.props.users.map((u) => {
                    return <User state={u} toggleFollow={this.props.toggleFollow} key={u.id}/>
                })}
            </div>
            <div>
                <button type='submit'>Show more...</button>
            </div>
            <div>
                {pages.map((p, index) => {
                    return index < 20 ?
                        <span className={p === this.props.currentPage && 'selectedPage'} onClick={() => {
                            this.onPageChanged(p)
                        }}>{p}</span> : null
                })}
            </div>
        </div>

    }
}


export default Users