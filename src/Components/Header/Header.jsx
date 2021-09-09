import classes from "./Header.module.css";

const Header = (props) => {
  
  return (
    <header className={`${classes.header} cardWrapper`}>
      <div className={classes.currentUser}>
        <img className="avatar" src={props.currentUser.img} />
        <span>
          {props.currentUser.name} {props.currentUser.surname}
        </span>
      </div>
    </header>
  );
};

export default Header;
