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
    ]);

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''})
    };

    return (
        <div className="App">
            <form>
                {/* Управляемый компонент*/}

                <MyInput
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Title post"/>

                <MyInput
                    value={post.body}
                    onChange={(e) => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Text post"/>

                <MyButton onClick={addNewPost}>Create post</MyButton>

            </form>

            <PostList posts={posts} title="Posts list"/>

        </div>
    );
}

export default App;
