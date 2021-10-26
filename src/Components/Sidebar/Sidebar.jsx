import classes from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
    return <div className={classes.sidebar}>
        {props.state.friends.map((item, index) => {
            return index < 6 ? <Friend state={item} key={item.id}/> : null
        })}
    </div>
}

export default Sidebar