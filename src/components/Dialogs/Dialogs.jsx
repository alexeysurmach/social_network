import React from 'react';
import s from './Dialogs.module.css';
import DilogItem from "./DilogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
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

    let dialogsDialogElements = dialogs.map(d => <DilogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dilogsItems}>
                {dialogsDialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;
