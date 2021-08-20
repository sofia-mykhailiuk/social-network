import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} state={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



reportWebVitals();
