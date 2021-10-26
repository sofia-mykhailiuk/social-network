import "./App.css";
import {Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import Login from "./Components/Login/Login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={()=><Login/>}/>
            </div>
        </div>
    );
};

export default App;
