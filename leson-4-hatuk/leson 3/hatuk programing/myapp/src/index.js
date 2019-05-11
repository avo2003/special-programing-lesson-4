import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';




export default function App() {
    const [count, setCount ]= useState(0);
    const increment = ()=> setCount(count +1);
    const decrement = ()=> setCount(count -1);
    return (
      <div className="App">
        <h1>Hello</h1>
        <div>{count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
ReactDOM.render(<App />, document.getElementById('root'));

