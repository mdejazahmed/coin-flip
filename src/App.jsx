import React, { useState } from "react";
import "./App.css";

function App() {
  const [coinFace, setCoinFace] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [result, setResult] = useState([]);

  const handleClick = () => {
    if (previousValue && previousValue === coinFace) {
      // Append to the last column
      const updatedResult = [...result];
      updatedResult[updatedResult.length - 1].push(coinFace);
      setResult(updatedResult);
    } else {
      // Start a new column
      setResult([...result, [coinFace]]);
    }
    setPreviousValue(coinFace);
  };

  return (
    <div className="App">
    <div>

      <h1>Coin Flip</h1>
      <div>
        <select
          className="select"
          value={coinFace}
          onChange={(e) => setCoinFace(e.target.value)}
        >
          <option value="">Select Coin Face</option>
          <option value="head">Head</option>
          <option value="tail">Tail</option>
        </select>

        <button className="submitBtn" onClick={handleClick}>
          Submit
        </button>

        <div className="d-flex gap-4">
          {result.map((column, colIndex) => (
            <div key={colIndex}>
              {column.map((item, itemIndex) => (
                <div key={itemIndex}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
