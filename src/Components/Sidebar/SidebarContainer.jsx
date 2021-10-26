import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {setFriends} from "../../Redux/sidebar-reducer";
import React from "react";

class SidebarCContainer extends React.Component {
  componentDidMount() {
    this.props.setFriends()
  }

  render() {
    return <Sidebar state={this.props.state}/>
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.sidebar,
  };
};

const SidebarContainer = connect(mapStateToProps, {setFriends})(SidebarCContainer);

export default SidebarContainer;
