import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} countLikes={p.countLikes}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }
    return (
        <div className={s.postBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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