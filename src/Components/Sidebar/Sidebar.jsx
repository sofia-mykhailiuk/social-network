import classes from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
    let sidebarElements = props.state.friends.map(d => <Friend state={d}/>)
    return (
        <div className={classes.sidebar}>
            {sidebarElements}
        </div>
    );
}

export default Sidebar