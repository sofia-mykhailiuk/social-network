import classes from './Sidebar.module.css';
import Friend from "./Friend/Friend";
import React from "react";
import * as axios from "axios";

class Sidebar extends React.Component {
    constructor (props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setFriends(response.data.items);
        });
    }

    render () {
        return (
            <div className={classes.sidebar}>
                {this.props.state.friends.map((item, index) => {
                    return index<6 ? <Friend state={item} key={item.id}/> : null
                })}
            </div>
        )
    }
}


export default Sidebar