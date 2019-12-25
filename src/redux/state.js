import {rerenderEntireTree} from "../render";


let state = {
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Nastya'},
            {id: 2, name: 'Roma'},
            {id: 3, name: 'Leha'},
            {id: 4, name: 'Max'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Cowabanga'},
            {id: 3, message: 'Hellow'},
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hey', countLikes: 7},
            {id: 2, message: 'Cowabanga', countLikes: 21}
        ],
        newPostText: ''
    }
};
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText ,
        countLikes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export let addMessage = (postMessage) => {
    let newMessage = {
        id: 3,
        message: postMessage
    }
    state.dialogPage.messages.push(newMessage)
    rerenderEntireTree(state)
};
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state;