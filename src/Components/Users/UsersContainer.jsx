import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {requestUsers, toggleFollow} from "../../Redux/users-reducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} onPageChanged={this.props.requestUsers}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollow={this.props.toggleFollow}
            />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose (
    connect(mapStateToProps,
        {
            toggleFollow,
            requestUsers
        })
)(UsersContainer)