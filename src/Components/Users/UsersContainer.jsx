import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleIsFetching
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersCContainer extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true, headers: {"API-KEY" : "b29e5b99-982c-49c5-af2c-eee74a9a7c55"}}).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true, headers: {"API-KEY" : "b29e5b99-982c-49c5-af2c-eee74a9a7c55"}})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} toggleFollow={this.props.toggleFollow}
                   onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

const UsersContainer = connect(mapStateToProps,
    {
        toggleFollow, setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetching
    })(UsersCContainer);

export default UsersContainer