import './Navbar.css'
import {NavLink} from "react-router-dom";
import SidebarContainer from "../Sidebar/SidebarContainer";

const Navbar = () => {
  return (
    <nav className='nav cardWrapper'>
      <div className='nav-item'>
        <NavLink to="/profile" activeClassName='activeLink'>
           Profile
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to="/dialogs" activeClassName='activeLink'>
            Messages
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to="/news" activeClassName='activeLink'>
            News
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to="/music" activeClassName='activeLink'>
            Music
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to="/settings" activeClassName='activeLink'>
            Settings
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to="/friends" activeClassName='activeLink'>
            Friends
        </NavLink>
      </div>

      <SidebarContainer />
    </nav>
  );
};

export default Navbar