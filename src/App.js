import React, {useState} from 'react';
import Counter from './components/Counter';

function App() {
    const [value, setValue] = useState('Text in input');

    return (
        <div className="App">
            <h2>{value}</h2>
            <input type="text" onChange={event => setValue(event.target.value)} value={value}/>
            <Counter></Counter>
        </div>
    );
}

export default App;
