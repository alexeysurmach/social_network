import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {addMessage} from "./redux/state";


 export let rerenderEntireTree = (state)=>{
ReactDOM.render(
    <BrowserRouter>
        <App state = {state} addPost= {addPost} addMessage ={addMessage} />
    </BrowserRouter>, document.getElementById('root'));
}


