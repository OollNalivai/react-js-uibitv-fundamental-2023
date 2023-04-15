import React, {useRef, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts] = useState([
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

    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(bodyInputRef.current.value);

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

                {/*Неуправляемый/неконтролируемый компонент*/}
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Text post"/>

                <MyButton onClick={addNewPost}>Create post</MyButton>

            </form>

            <PostList posts={posts} title="Posts list"/>

        </div>
    );
}

export default App;
