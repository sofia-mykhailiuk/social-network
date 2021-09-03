import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import SidebarContainer from "../Sidebar/SidebarContainer";

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/friends" activeClassName={classes.activeLink}>
          Friends
        </NavLink>
      </div>

      <SidebarContainer />
    </nav>
  );
};

export default Navbar