import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, toggleFollowAC} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer