import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <a> <img src='https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg'/> </a>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}
export default ProfileInfo;