import React, {useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

function App() {
    const [value, setValue] = useState('Text in input');

    return (
        <div className="App">
            <h2>{value}</h2>
            <input type="text" onChange={event => setValue(event.target.value)} value={value}/>
            <Counter/>
            <ClassCounter/>
        </div>
    );
}

export default App;
