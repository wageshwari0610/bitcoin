import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [prices, setPrice] = useState([]);
  const [currentText, setCurrentText] = useState("Get Bitcoin Price");

  const fetchBitcoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
      );
      const data = response?.data?.bpi?.USD?.rate;
      setPrice([...prices, data]);
      setCurrentText("Refresh Bitcoin Price");
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <div className="App">
      <h1>{prices?.[0] && `Current Bitcoin Price - ${prices[0]}`}</h1>
      {prices &&
        prices.length > 1 &&
        prices
          .slice(1)
          .map((price, index) => <p key={index}>Privous Price - {price}</p>)}
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
