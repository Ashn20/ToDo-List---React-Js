import React, { useState } from "react";
import './App.css';

function App() {


  let [inputText, setInputText] = useState('');
  let [items, setItems] = useState([]);


  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);

  }

  function addItem() {
    setItems((prevItems) => { return [...prevItems, inputText] });
    setInputText('');
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItems) => { return <li>{todoItems}</li> })}

        </ul>
      </div>
    </div>
  );
}

export default App;
