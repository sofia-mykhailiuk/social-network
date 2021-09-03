import StoreContext from "../../StoreContext";
import Header from "./Header";
import classes from "./Header.module.css";

const HeaderContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        return <Header currentUser={state.currentUser} />;
      }}
    </StoreContext.Consumer>
  );
};

export default HeaderContainer;
