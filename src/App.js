import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import {Route} from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';


const App = (props) => {
    console.log(props)
        return (
            <div className='app-wrapper'>
                <Header state={props.state.currentUser} />
                <Navbar state={props.state.sidebar} />
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile
                               store={props.store}
                           />}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               store={props.store}
                           />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' component={Friends}/>

                </div>
            </div>
    );
}



export default App;
