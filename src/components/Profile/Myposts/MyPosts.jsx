import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3> My posts </h3>
            <div>
                <div> <textarea> </textarea> </div>
                <div> <button>Ad post</button> </div>
            </div>
            <div className={s.posts}>
                <Post message='Hey' countLikes = '7'/>
                <Post message='Cowabanga' countLikes = '21'/>
            </div>
        </div>
    )
}

export default MyPosts;