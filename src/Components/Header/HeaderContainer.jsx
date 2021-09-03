import Header from "./Header";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
