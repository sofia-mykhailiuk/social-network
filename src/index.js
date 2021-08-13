import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: '1', name: 'Andrei'},
    {id: '2', name: 'Dimych'},
    {id: '3', name: 'Maria'},
    {id: '4', name: 'Sveta'},
    {id: '5', name: 'Olha'},
    {id: '6', name: 'Katya'},
]

let messages = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'What`s up'},
    {id: '4', message: 'Yo'}
]

let posts = [
    {id: '1', message: 'Hi, how are you?', likesCount: 4},
    {id: '2', message: 'This is my first post', likesCount: 199},
    {id: '3', message: 'What`s up', likesCount: 13},
    {id: '4', message: 'Yo', likesCount: 1},
    {id: '5', message: 'Youufuffu', likesCount: 1}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
