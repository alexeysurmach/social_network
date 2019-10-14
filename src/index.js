import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Nastya'},
    {id: 2, name: 'Roma'},
    {id: 3, name: 'Leha'},
    {id: 4, name: 'Max'}
];
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Cowabanga'},
    {id: 3, message: 'Hellow'},
];
let posts = [
    {id: 1, message: 'Hey', countLikes: 7},
    {id: 2, message: 'Cowabanga', countLikes: 21}
];

ReactDOM.render(<App dialogs = {dialogs} messages ={messages} posts ={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
