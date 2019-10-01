import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfR8X74rkrhWpxqkeNUjMR71RTB2tLljU_-TlBXdPJ9qhJzcLWPA'/>
            {props.message}
            <div>
                <span>like</span>{props.countLikes}
            </div>
        </div>
    )
}

export default Post;