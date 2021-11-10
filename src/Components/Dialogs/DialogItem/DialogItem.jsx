import './DialogItem.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.state.id;

    return (
        <div className="dialog-item">
            <div className="avatar">
                <img src={props.state.img} alt=""/>
            </div>
            <NavLink to={path} activeClassName="active">{props.state.name} {props.state.surname}</NavLink>
        </div>
    )
}

export default DialogItem