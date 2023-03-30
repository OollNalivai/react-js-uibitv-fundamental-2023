import React, {useState} from 'react';

function App() {
    let [likes, setLikes] = useState(5);
    const [value, setValue] = useState('Text in input');

    function increment() {
        setLikes(likes + 1);
    }

    function decrement() {
        setLikes(likes - 1);
    }

    return (
        <div className="App">
            <h1>{likes}</h1>
            <h2>{value}</h2>
            <input type="text" onChange={event => setValue(event.target.value)} value={value}/>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;
