import "./main.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipResult, setTipResult] = useState(0);
  const [total, setTotal] = useState(0);

  const resetHandler = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
    setTipResult(0);
    setTotal(0);
  };

  useEffect(() => {
    if (bill != 0 && tip != 0 && people != 0) {
      const tipVal = tip / 100;
      const totalTip = bill * tipVal;
      setTipResult(totalTip.toFixed(2));

      const totalAmount = parseInt(bill) + parseInt(totalTip);
      setTotal(totalAmount.toFixed(2));
    }
  }, [bill, tip, people]);
  const [peopleValid, setPeopleValid] = useState("");
  const validate = (e) => {
    if (e.target.value != 0) {
      setPeopleValid("valid");
    } else {
      setPeopleValid("invalid");
    }
    setPeople(e.target.value);
  };

  return (
    <div className="app">
      <div className="inputs">
        <label htmlFor="bil">Bill</label>
        <input
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          type="number"
          placeholder="0"
          className="first"
        />
        <label>Select tip </label>
        <div className="grid">
          <button className={tip == 5 && "selected"} onClick={() => setTip(5)}>
            5%
          </button>
          <button
            className={tip == 10 && "selected"}
            onClick={() => setTip(10)}
          >
            10%
          </button>
          <button
            className={tip == 15 && "selected"}
            onClick={() => setTip(15)}
          >
            15%
          </button>
          <button
            className={tip == 25 && "selected"}
            onClick={() => setTip(25)}
          >
            25%
          </button>
          <button
            className={tip == 50 && "selected"}
            onClick={() => setTip(50)}
          >
            50%
          </button>
          <input
            onChange={(e) => setTip(e.target.value)}
            className="custom"
            type="number"
            placeholder="Custom"
            name="tip"
          />
        </div>
        <label htmlFor="people">Number of people </label>
        <input
          className={peopleValid}
          value={people}
          onChange={validate}
          type="number"
          placeholder="0"
        />
      </div>
      <div className="results">
        <div className="flex">
          <p>
            Tip amount <span>/person</span>
          </p>
          <p className="digits">{tipResult ? tipResult : 0}</p>
        </div>
        <div className="flex">
          <p>
            Total <span>/person</span>
          </p>
          <p className="digits">{total ? total : 0}</p>
        </div>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}

export default App;
