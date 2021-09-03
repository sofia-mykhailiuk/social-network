import classes from "./Header.module.css";

const Header = (props) => {
  
  return (
    <header className={classes.header}>
      <div className={classes.currentUser}>
        <img src={props.currentUser.img} />
        <span>
          {props.currentUser.name} {props.currentUser.surname}
        </span>
      </div>
    </header>
  );
};

export default Header;
