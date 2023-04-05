import React from 'react';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
    // const [value, setValue] = useState('Text in input');

    return (
        <div className="App">
            <PostItem post={{
                id: 1,
                title: 'JavaScript',
                body: 'JavaScript is a programming language'}}/>
        </div>
    );
}

export default App;
