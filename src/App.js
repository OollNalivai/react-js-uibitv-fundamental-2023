import React, {useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';

function App() {
    const [value, setValue] = useState('Text in input');

    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>1. JavaScript</strong>
                    <div>
                        JavaScript is a programming language
                    </div>
                </div>
                <div className="post__btns">
                    <button>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
