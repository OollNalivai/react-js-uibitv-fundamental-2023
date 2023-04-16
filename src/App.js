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

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        };
        setPosts([...posts, newPost]);
        console.log(newPost);
        setTitle('')
        setBody('')
    };

    return (
        <div className="App">
            <form>
                {/* Управляемый компонент*/}

                <MyInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title post"/>

                <MyInput
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    type="text"
                    placeholder="Text post"/>

                <MyButton onClick={addNewPost}>Create post</MyButton>

            </form>

            <PostList posts={posts} title="Posts list"/>

        </div>
    );
}

export default App;
