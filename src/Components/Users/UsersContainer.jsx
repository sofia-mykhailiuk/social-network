import React from "react";
import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage

    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer