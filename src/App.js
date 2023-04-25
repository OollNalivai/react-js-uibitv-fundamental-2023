import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

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

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ?
                <PostList remove={removePost} posts={posts} title="Posts list"/>
                :
                <h2 style={{textAlign: 'center'}}>Posts not found.</h2>
            }


        </div>
    );
}

export default App;
