import { useEffect, useState } from "react";
import "./App.css";
import useChangeamount from "./hooks/changeamount";

function App() {
  let [convertedmt, setConvertedamt] = useState(0);
  let [useramount, setUseramount] = useState(0);
  let [selectedcurrency, setSelectedcurrency] = useState("inr");
  let [selectedcurrencyfrom, setSelectedcurrencyfrom] = useState('inr')
  let [data, options] = useChangeamount(selectedcurrencyfrom);
  function changecurrency() {
    let calculatedData = data[selectedcurrency] * useramount;
    setConvertedamt(calculatedData.toFixed(3));
  }

  function swap(){
    setSelectedcurrency(selectedcurrencyfrom)
    setSelectedcurrencyfrom(selectedcurrency)
  }
  return (
    <div className="check">
      <h1>Currency & Crypto Currency Coverter</h1>
      {selectedcurrency ? (
        <h2>
          Converted Value from <span style={{color: 'green'}}>{selectedcurrencyfrom}</span> to <span style={{color: 'green'}}>{selectedcurrency}</span> is: <span style={{color: 'green'}}>{convertedmt}</span>
        </h2>
      ) : (
        <h2>Enter A Value Below:</h2>
      )}

      <label
        style={{ fontSize: "20px", fontWeight: "bold" }}
        htmlFor="userAmount"
      >
        Enter Amount
      </label>
      <br />
      <input
        type="number"
        id="userAmount"
        value={useramount}
        onChange={(e) => setUseramount(e.target.value)}
      />
      <br />
      <label
        style={{ fontSize: "18px", marginRight: "12px" }}
        htmlFor="selectCurrencyfrom"
      >
        Change From
      </label>
      <select
        onChange={(e) => setSelectedcurrencyfrom(e.target.value)}
        style={{ marginBottom: "10px" }}
        id="selectCurrencyfrom"
      >
        <option value="inr">inr</option>
        {options.map((count, index) => (
          <option key={index} value={count}>{count}</option>
        ))}
      </select>
      <br />
      <button onClick={swap}>Swap</button>
      <br />
      <label
        style={{ fontSize: "18px", marginRight: "12px" }}
        htmlFor="selectCurrencyto"
      >
        Change To
      </label>
      <select
        onChange={(e) => setSelectedcurrency(e.target.value)}
        style={{ marginBottom: "10px" }}
        id="selectCurrencyto"
      >
        <option value="inr">inr</option>
        {options.map((count, index) => (
          <option key={index} value={count}>{count}</option>
        ))}
      </select>
      <br />
      <button onClick={changecurrency}>Convert</button>
    </div>
  );
}

export default App;
