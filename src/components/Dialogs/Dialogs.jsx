import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DilogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.message}> {props.message} </div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dilogsItems}>
                <DilogItem name='Nastya' id='1'/>
                <DilogItem name='Roma' id='2'/>
                <DilogItem name='Leha' id='3'/>
                <DilogItem name='Max' id='4'/>

            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Cowabanga'/>
                <Message message='Hellow'/>

            </div>
        </div>
    )
}
export default Dialogs;
