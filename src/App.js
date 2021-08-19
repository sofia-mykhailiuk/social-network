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


const App = (props) => {

        return (
            <div className='app-wrapper'>
                <Header state={props.state.currentUser} />
                <Navbar state={props.state.sidebar} />
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.profilePage}
                               currentUser={props.state.currentUser}
                               updateNewPostValue={props.store.updateNewPostValue.bind(props.store)}
                               addPost={props.store.addPost.bind(props.store)}

                           />}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.state.messagesPage}
                               currentUser={props.state.currentUser}
                               updateNewMessageValue={props.store.updateNewMessageValue.bind(props.store)}
                               sendMessage={props.store.sendMessage.bind(props.store)}
                           />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' component={Friends}/>

                    {/*<Dialogs />*/}
                    {/*<Profile/>*/}
                </div>
            </div>
    );
}



export default App;
