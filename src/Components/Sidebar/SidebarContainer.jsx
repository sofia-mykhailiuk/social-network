import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import {setFriendsAC} from "../../Redux/sidebar-reducer";

let mapStateToProps = (state) => {
  return {
    state: state.sidebar,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setFriends: (friends) => {
      dispatch(setFriendsAC(friends))
    }
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
