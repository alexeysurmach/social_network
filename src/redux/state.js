let rerenderEntireTree = () => {
    console.log('state changed')
}

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
        newPostText: 'alloha'
    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: postMessage,
        countLikes: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = ''
};

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
};
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;