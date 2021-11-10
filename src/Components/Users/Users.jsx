import React from 'react'
import "./Users.css";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    componentWillUnmount() {

    }

    render () {
        return <div className={`usersWrapper panelWrapper`}>
            <div className={'allUsers'}>
                {this.props.usersPage.users.map((u) => {
                    return <User state={u} toggleFollow={this.props.toggleFollow} key={u.id}/>
                })}
            </div>
            <div>
                <button type='submit'>Show more...</button>
            </div>
        </div>

    }
}


export default Users