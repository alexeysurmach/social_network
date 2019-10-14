import React from 'react';
import s from './Dialogs.module.css';
import DilogItem from "./DilogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => { debugger

    const dialogsElements = props.state.dialogs.map(d => <DilogItem name={d.name} id={d.id}/>);
    const messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dilogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;
