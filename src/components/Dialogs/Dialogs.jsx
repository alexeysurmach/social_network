import React from 'react';
import s from './Dialogs.module.css';
import DilogItem from "./DilogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsDialogElements = props.dialogs.map(d => <DilogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

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
