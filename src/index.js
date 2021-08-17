import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, sendMessage, subscribe, updateNewMessageValue, updateNewPostValue} from './Redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostValue={updateNewPostValue} updateNewMessageValue={updateNewMessageValue} sendMessage={sendMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

reportWebVitals();
