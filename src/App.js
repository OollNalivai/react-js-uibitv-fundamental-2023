import React, {useState} from 'react';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

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

    const [posts2, setPosts2] = useState([
        {
            id: 1,
            title: 'Python',
            body: 'Python is a programming language'
        },
        {
            id: 2,
            title: 'Python 2',
            body: 'Python is a programming language 2'
        },
        {
            id: 3,
            title: 'Python 3',
            body: 'Python is a programming language 3'
        }
    ])

    return (
        <div className="App">
            <PostList posts={posts} title='Posts list'/>
            <PostList posts={posts2} title='Posts list 2'/>
        </div>
    );
}

export default App;
