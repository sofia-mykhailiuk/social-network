import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.currentUser}>
                <img src={props.state.img} alt=""/>
                <span>{props.state.name} {props.state.surname}</span>
            </div>

        </header>
    );
}

export default Header