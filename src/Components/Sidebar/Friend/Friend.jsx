import classes from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <div className={classes.userAvatar}>
                <img src={props.state.img} alt=""/>
            </div>
            <div>
                {props.state.name}
            </div>
        </div>
    );
}

export default Friend