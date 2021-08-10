import classes from './Navbar.module.css'

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
                <a href='/profile'>Profile</a>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <a href='/dialogs'>Massages</a>
            </div>
            <div className={classes.item}>
                <a href='/news'>News</a>
            </div>
            <div className={classes.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={classes.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar