import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "../Profileinfo/ProfileInfo";
import {addPost} from "../../redux/state";

const Profile = (props) => { debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts ={props.state.posts} addPost = {props.addPost} />
        </div>

    )
}

export default Profile;