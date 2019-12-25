import React from 'react';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "../Profileinfo/ProfileInfo";


const Profile = (props) => { debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts ={props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     updateNewPostText = {props.updateNewPostText}
                     addPost = {props.addPost} />
        </div>

    )
}

export default Profile;