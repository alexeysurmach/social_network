import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dilogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Nastya
                </div>
                <div className={s.dialog}>
                    Leha
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
                <div className={s.dialog}>
                    Max
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>People</div>
                <div className={s.message}>Cowabanga</div>

            </div>
        </div>
    )
}
export default Dialogs;
