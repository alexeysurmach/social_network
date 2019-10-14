import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} countLikes={p.countLikes}/>)
    return (
        <div className={s.postBlock}>
            <h3> My posts </h3>
            <div>
                <div><textarea> </textarea></div>
                <div>
                    <button>Ad post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
                {/*<Post message={postData[0].message} countLikes={postData[0].countLikes}/>*/}
            </div>
        </div>
    )
}

export default MyPosts;