import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            body: 'JavaScript is a programming language 4'
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

    const [selectedSort, setSelectedSort] = useState('');

    const [searchQuery, setSearchQuery] = useState('');

    function getSortedPosts() {
        console.log('SORT SORT I\'M SORT');
        if (selectedSort) {
            return [...posts].sort(
                (a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }

    const sortedPosts = useMemo(() => {

    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    plaseholder="Search..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Search"
                    option={[
                        {value: 'title', name: 'by name'},
                        {value: 'body', name: 'by description'}
                    ]}/>
            </div>
            {posts.length !== 0
                ?
                <PostList remove={removePost} posts={sortedPosts} title="Posts list"/>
                :
                <h2 style={{textAlign: 'center'}}>Posts not found.</h2>
            }


        </div>
    );
}

export default App;
