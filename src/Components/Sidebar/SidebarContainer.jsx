import Sidebar from "./Sidebar";
import StoreContext from "../../StoreContext";

const SidebarContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        console.log(store);
        return <Sidebar state={state.sidebar} />;
      }}
    </StoreContext.Consumer>
  );
};

export default SidebarContainer;
