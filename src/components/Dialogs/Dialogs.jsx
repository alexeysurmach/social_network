import React from 'react';
import s from './Dialogs.module.css';
import DilogItem from "./DilogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DilogItem name={d.name} id={d.id}/>);
    const messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    const newPostMessage = React.createRef();
    const addMessage = ()=> {
      let text = newPostMessage.current.value;
        props.addMessage(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dilogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea ref = {newPostMessage}> </textarea>
                </div>
                <div>
                    <button onClick={addMessage}> add message </button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;



