import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.state.id;

    return (
        <div className={classes.dialog}>
            <div className={classes.userAvatar}>
                <img src={props.state.img} alt=""/>
            </div>
            <NavLink to={path} activeClassName={classes.active}>{props.state.name} {props.state.surname}</NavLink>
        </div>
    )
}

export default DialogItem