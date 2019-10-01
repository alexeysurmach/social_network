import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div>
                <a> <img src='https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg'/> </a>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>

    )
}

export default Profile;