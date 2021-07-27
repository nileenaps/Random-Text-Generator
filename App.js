import React, { useRef, useState } from 'react';
import { txt as text } from './data';
import TextContent from './textcontent';
import './style.css';

const App = () => {

  const [count, setCount] = useState('0');
  const [textOutput, setTextOutput] = useState([]);
  const heading = "Tired of boring lorem ipsum ?";
  let total;

  const handleSubmit = (e) => {
    e.preventDefault();
    total = parseInt(count);
    if (count > '4') total = 4;
    if (count !== '0') setTextOutput(text.slice(0, total));
    else setTextOutput([{ id: 104, desc: "Please enter a value" }]);
  }

  return (
    <section  >
      <h3> {heading}</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="paraCount">Paragraphs : </label>

        <input type="number" name="paraCount"
          value={count} onChange={(e) => {
            if (e.target.value < 0) {
              setCount(0)
            }
            else {
              setCount(e.target.value)
            }
          }} />
        <button className="btn">generate</button>
      </form>
      {textOutput.length !== 0 && <TextContent textOutput={textOutput} />}
    </section>

  )

}

export default App;