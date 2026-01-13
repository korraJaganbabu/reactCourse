import './App.css';
import { useState } from 'react';

function App() {
const [age, setAge] = useState(25);

const increaseAge = () => {
 setAge(age + 1);
 console.log(age);
}

const [inputValue, setInputValue] = useState('');

const handleInputChange = (event) => {
 setInputValue(event.target.value);
 console.log(event.target.value)
}

const [textColor, setTextColor] = useState("black");

const [count, setCount] = useState(0);

const increaseCount = () => {
 setCount(count + 1);
}

const decreaseCount = () => {
 setCount(count - 1);
}

const resetCount = () => {
 setCount(0);
}

return (
 <div className="App"> {age} <button onClick={increaseAge}>Increase Age</button>
 <br />
 <br />
 <input type="text" onChange={handleInputChange} />
 <p style={{color: inputValue.length >= 10 ? "red" : "green"}}>Your entered Value is: {inputValue}</p>
 <br />
 <br />
 <button onClick= {
  () => {
   setTextColor(textColor === "black" ? "red" : "black")
  }}
 >
 Show/Hide
 </button>
 <h1 style={{color: textColor}}>HI THIS IS JAGAN</h1>
 <br />
 <br />
 <button onClick={increaseCount}>Increase</button>
 <button onClick={decreaseCount}>Decrease</button>
 <button onClick={resetCount}>Set to Zero</button>
 {count}
 </div>
);

}

export default App;