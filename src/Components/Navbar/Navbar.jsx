import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

// let classes = {
//     'nav' : 'Navbar_nav__3rBUO',
//     'item' : 'Navbar_item__11USq',
//     'active': "Navbar_active__FFVa7"
// }

// let class1 = 'item'
// let class2 = 'active'
// // 'item active'
// // let classes = class1 + ' ' + class2
// let classes = `${class1} ${class2}`

console.log(classes)

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink} >Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink} >Massages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLink} >News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink} >Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink} >Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar