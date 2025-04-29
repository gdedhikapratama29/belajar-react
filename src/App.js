import { useState } from 'react';
import './App.css'
import Perkenalan from './components/Perkenalan'




const App = () => {

    const [counter, setCounter] = useState(0);
    const decrementCounter = () => {
        setCounter(counter - 1);
    }

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            <div>{counter}</div>
            <button onClick={incrementCounter}>+</button>
        </div>  
    ) 
}

export default App;