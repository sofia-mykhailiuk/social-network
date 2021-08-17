import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostValue, updateNewMessageValue, sendMessage} from './Redux/state';

import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostValue={updateNewPostValue} updateNewMessageValue={updateNewMessageValue} sendMessage={sendMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
};
