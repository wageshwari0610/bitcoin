import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [prices, setPrice] = useState([]);
  const [currentText, setCurrentText] = useState("Get Bitcoin Price");

  const fetchBitcoinPrice = async () => {
    try {
      const result = await axios.get("");
      var temp = prices;
      temp.push(3000);
      setPrice(temp);
      setCurrentText("Refresh Bitcoin Price");
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <div className="App">
      <h1>{prices?.[0]}</h1>
      {prices &&
        prices.length > 1 &&
        prices.map((price, index) => {
          return <p key={index}>Privous Price {price}</p>;
        })}
      {console.log(prices)}
      <button
        className={
          currentText === "Get Bitcoin Price" ? "btnBlue" : "btnPurple"
        }
        onClick={fetchBitcoinPrice}
      >
        {currentText}
      </button>
    </div>
  );
}

export default App;
