import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // const [count, SetCount] = useState(5);

  // function increase() {
  //   SetCount(count + 1);
  // }
  // function decrease() {
  //   SetCount(count - 1);
  // }

  // function catchValue() {
  //   var value = document.getElementById("text-value").value;
  //   console.log(value);
  // }

  // setInterval(realTime,1000);

  const time = new Date().toLocaleTimeString();
  const [value, setValue] = useState(time);

  function realTime() {
    let newTime = new Date().toLocaleTimeString();
    setValue(newTime);
  }

  return (
    <div className="App flex">
      {/* <h2 contentEditable="true" id="text-value"></h2>
      <div className="button-container">
        <button type="button" onClick={catchValue}>
          +
        </button>
        <button type="button" onClick={decrease}>
          -
        </button>
      </div> */}
      <h1>{value}</h1>
      <button onClick={realTime} type="button">
        Get Time
      </button>
    </div>
  );
}
