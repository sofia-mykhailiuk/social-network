import "./Users.css";
import User from "./User/User"

const Users = (props) => {

    let userItem = props.usersPage.users.map((u)=>{
            return <User state={u}/>
    })
    return (
        <div className={`usersWrapper panelWrapper`}>
            <div className={'allUsers'}>
                {userItem}
            </div>
            <div>
                <button type='submit'>Show more...</button>
            </div>
        </div>
    )
}
export default Users