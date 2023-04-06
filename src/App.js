import React, {useState} from 'react';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';

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
            <h2 style={{textAlign: 'center'}}>Posts list</h2>
            {posts.map((post) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
}

export default App;
