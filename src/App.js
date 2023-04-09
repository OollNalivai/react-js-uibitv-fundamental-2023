import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            body: 'JavaScript is a programming language'
        },
        {
            id: 2,
            title: 'JavaScript 2',
            body: 'JavaScript is a programming language 2'
        },
        {
            id: 3,
            title: 'JavaScript 3',
            body: 'JavaScript is a programming language 3'
        }
    ])

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder={"Title post"}/>
                <MyInput type="text" placeholder={"Text post"}/>
                <MyButton>Create post</MyButton>
            </form>
            <PostList posts={posts} title='Posts list'/>
        </div>
    );
}

export default App;
